/* eslint-disable no-console */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function toPascalCase(text) {
  return (text || 'Section')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
    .replace(/^\d+/, 'X');
}

function sanitize(html) {
  return html.replaceAll('`', '\\`').replaceAll('${', '\\${');
}

function localAssetPath(assetUrl, assetRootDir) {
  const u = new URL(assetUrl);
  let file = u.pathname;
  if (file.endsWith('/')) file += 'index.html';
  if (!path.extname(file)) file += '.bin';
  file = file.replace(/^\/+/, '');
  return path.join(assetRootDir, file);
}

async function downloadAsset(assetUrl, assetRootDir, seen) {
  const abs = new URL(assetUrl).toString();
  if (seen.has(abs)) return null;
  seen.add(abs);
  const dest = localAssetPath(abs, assetRootDir);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  const res = await fetch(abs);
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buf);
  return dest;
}

function rewriteAttr($el, attr, base, assetRootDir) {
  const val = $el.attr(attr);
  if (!val) return;
  try {
    const abs = new URL(val, base).toString();
    const dest = localAssetPath(abs, assetRootDir);
    const rel = path.relative(assetRootDir, dest).replaceAll('\\', '/');
    $el.attr(attr, `/assets/${rel}`);
  } catch {}
}

async function processCSSContent(css, baseUrl, assetRootDir) {
  const urlRegex = /url\(([^)]+)\)/g;
  let rewritten = css;
  const matches = [...css.matchAll(urlRegex)];
  const seen = new Set();
  for (const m of matches) {
    let raw = m[1].trim().replace(/^['"]|['"]$/g, '');
    if (!raw || raw.startsWith('data:')) continue;
    try {
      const abs = new URL(raw, baseUrl).toString();
      const saved = await downloadAsset(abs, assetRootDir, seen);
      if (saved) {
        const rel = path.relative(path.join(assetRootDir, '..'), saved).replaceAll('\\', '/');
        rewritten = rewritten.replace(m[0], `url(/${rel})`);
      }
    } catch {}
  }
  return rewritten;
}

async function inlineStylesheets($, origin, assetRootDir, globalsCssPath) {
  const hrefs = new Set();
  $("link[rel='stylesheet']").each((_, el) => {
    const h = $(el).attr('href');
    if (h) hrefs.add(new URL(h, origin).toString());
  });

  let aggregated = '';
  for (const href of hrefs) {
    try {
      const res = await fetch(href);
      if (!res.ok) continue;
      let css = await res.text();
      css = await processCSSContent(css, href, assetRootDir);
      aggregated += `\n/* from: ${href} */\n` + css + '\n';
    } catch {}
  }

  // Remove link tags after inlining
  $("link[rel='stylesheet']").remove();

  if (aggregated.trim().length === 0) return;

  const MARK_START = '/* BEGIN EXTRACTED CSS */';
  const MARK_END = '/* END EXTRACTED CSS */';
  let globals = '';
  try { globals = await fs.readFile(globalsCssPath, 'utf-8'); } catch {}
  const startIdx = globals.indexOf(MARK_START);
  const endIdx = globals.indexOf(MARK_END);
  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    globals = globals.slice(0, startIdx + MARK_START.length) + '\n' + aggregated + '\n' + globals.slice(endIdx);
  } else {
    globals += `\n\n${MARK_START}\n${aggregated}\n${MARK_END}\n`;
  }
  await fs.writeFile(globalsCssPath, globals, 'utf-8');
}

async function inlineHeadStyles($, origin, assetRootDir, globalsCssPath) {
  // collect inline <style> tags from <head>
  let aggregated = '';
  $('head style').each((_, el) => {
    const css = $(el).html() || '';
    if (css.trim().length) aggregated += `\n/* inline head style */\n${css}\n`;
  });
  $('head style').remove();
  if (!aggregated.trim().length) return;
  // rewrite url(...) inside inline CSS as well
  aggregated = await processCSSContent(aggregated, origin, assetRootDir);
  const MARK_START = '/* BEGIN EXTRACTED CSS */';
  const MARK_END = '/* END EXTRACTED CSS */';
  let globals = '';
  try { globals = await fs.readFile(globalsCssPath, 'utf-8'); } catch {}
  const startIdx = globals.indexOf(MARK_START);
  const endIdx = globals.indexOf(MARK_END);
  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    globals = globals.slice(0, startIdx + MARK_START.length) + '\n' + aggregated + '\n' + globals.slice(endIdx);
  } else {
    globals += `\n\n${MARK_START}\n${aggregated}\n${MARK_END}\n`;
  }
  await fs.writeFile(globalsCssPath, globals, 'utf-8');
}

async function localizeAssets($, origin, assetRootDir) {
  const selectors = [
    ['img[src]', 'src'],
    ['source[srcset]', 'srcset']
  ];
  const toDownload = new Set();
  selectors.forEach(([sel, attr]) => {
    $(sel).each((_, el) => {
      const $el = $(el);
      const v = $el.attr(attr);
      if (!v) return;
      if (attr === 'srcset') {
        v.split(',').forEach((p) => {
          const u = p.trim().split(' ')[0];
          if (u) toDownload.add(new URL(u, origin).toString());
        });
      } else {
        toDownload.add(new URL(v, origin).toString());
      }
    });
  });
  const seen = new Set();
  for (const u of toDownload) await downloadAsset(u, assetRootDir, seen);
  // rewrite attributes
  selectors.forEach(([sel, attr]) => {
    $(sel).each((_, el) => rewriteAttr($(el), attr, origin, assetRootDir));
  });
}
async function writeComponent(dir, name, html) {
  const file = path.join(dir, `${name}.tsx`);
  const content = `
export default function ${name}() {
  const html = \`${sanitize(html)}\`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
`;
  await fs.writeFile(file, content, 'utf-8');
}

function normalizeDom($) {
  $('*').each((_, el) => {
    const $el = $(el);
    let style = $el.attr('style') || '';
    if (style) {
      style = style.replace(/opacity:\s*0(\.\d+)?/g, 'opacity: 1');
      style = style.replace(/will-change:[^;]+;?/g, '');
      style = style.replace(/transform:\s*[^;]+/g, (m) => (m.includes('none') ? m : 'transform: none'));
      style = style.replace(/left:\s*-?\d+px/g, 'left: 0px');
      style = style.replace(/mask-image:[^;]+;?/g, '');
      $el.attr('style', style);
    }
  });
}

async function main() {
  const snapshotHtmlPath = path.join(__dirname, '..', 'snapshot', 'index.html');
  const html = await fs.readFile(snapshotHtmlPath, 'utf-8');
  const $ = cheerio.load(html);

  // Prepare public asset dir
  const publicDir = path.join(__dirname, '..', 'public');
  await fs.mkdir(publicDir, { recursive: true });
  const assetRoot = path.join(publicDir, 'assets');
  await fs.mkdir(assetRoot, { recursive: true });

  // Inline styles into globals.css and localize image assets in DOM
  const globalsCssPath = path.join(__dirname, '..', 'app', 'globals.css');
  await inlineStylesheets($, 'https://www.fractionaldemand.com', assetRoot, globalsCssPath);
  await inlineHeadStyles($, 'https://www.fractionaldemand.com', assetRoot, globalsCssPath);
  await localizeAssets($, 'https://www.fractionaldemand.com', assetRoot);
  normalizeDom($);

  // Extract sections from #main
  // Build granular sections using multiple heuristics
  const sections = [];
  const root = $('#main').length ? $('#main') : $('body');
  const push = (el) => { const html = $.html(el); if (html && html.trim().length) sections.push(html); };

  // Pass 1: obvious structural blocks at depth 1
  const primarySel = 
    "> [data-framer-component-type], > [data-framer-name], > section, > header, > footer, > div:has(h1), > div:has(h2), > div:has(h3), > div:has(nav), > div[role='region'], > div[role='banner'], > div[role='contentinfo']";
  const primaries = root.find(primarySel).toArray();
  if (primaries.length) primaries.forEach((el) => push(el));

  // Pass 2: if still few, split large wrappers by child stacks/frames
  if (sections.length < 8) {
    root.children('div').each((_, div) => {
      const $div = $(div);
      const children = $div.find(
        "> [data-framer-component-type], > [data-framer-name], > section, > div:has(h2), > div:has(h3), > div[role='region']"
      ).toArray();
      if (children.length >= 2) children.forEach((el) => push(el));
    });
  }

  // Pass 3: fallback by headings as anchors
  if (sections.length < 8) {
    let buffer = [];
    root.children().each((_, el) => {
      const tag = (el.tagName || '').toLowerCase();
      if (['h1', 'h2', 'h3'].includes(tag) && buffer.length) {
        const frag = cheerio.load('<div></div>')('div').append(buffer).get(0);
        push(frag);
        buffer = [];
      }
      buffer.push(el);
    });
    if (buffer.length) {
      const frag = cheerio.load('<div></div>')('div').append(buffer).get(0);
      push(frag);
    }
  }

  // De-dup
  const seenHtml = new Set();
  const unique = [];
  for (const h of sections) {
    const key = h.slice(0, 200);
    if (!seenHtml.has(key)) { seenHtml.add(key); unique.push(h); }
  }
  const finalSections = unique;
  if (sections.length === 0) sections.push(root.html() || '');

  // Generate components
  const compDir = path.join(__dirname, '..', 'components', 'extracted');
  await fs.mkdir(compDir, { recursive: true });
  const names = [];
  for (let i = 0; i < finalSections.length; i += 1) {
    const firstClass = cheerio.load(finalSections[i])('*').first().attr('class') || `Section${i + 1}`;
    const name = toPascalCase(firstClass) || `Section${i + 1}`;
    const finalName = names.includes(name) ? `${name}${i + 1}` : name;
    names.push(finalName);
    await writeComponent(compDir, finalName, finalSections[i]);
  }

  // Compose page
  const imports = names.map((n) => `import ${n} from '@/components/extracted/${n}';`).join('\n');
  const jsx = names.map((n) => `        <${n} />`).join('\n');
  const pageTsx = `
${imports}

export default function Page() {
  return (
    <main>
${jsx}
    </main>
  );
}
`;
  await fs.writeFile(path.join(__dirname, '..', 'app', 'page.tsx'), pageTsx, 'utf-8');

  console.log(`✓ Wrote ${names.length} components to components/extracted and composed app/page.tsx`);
}

main().catch((e) => { console.error(e); process.exit(1); });


