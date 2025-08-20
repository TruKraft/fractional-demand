/* eslint-disable no-console */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
// Using Node 18+ global fetch; no extra deps needed

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function toPascalCase(text) {
  return text
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
    .replace(/^\d+/, 'X');
}

function extractSections($) {
  // Heuristic: top-level sections are <section>, major <div> blocks under <main>, or hero wrappers
  const sections = [];
  const main = $('main').length ? $('main').first() : $('body');

  // Prefer #main > * (Framer) else <section>
  if ($('#main').length) {
    $('#main').children().each((i, el) => sections.push($(el)));
  } else {
    main.find('section').each((i, el) => sections.push($(el)));
  }

  // If no <section>, fall back to large direct children in main/body
  if (sections.length === 0) {
    main.children('div,header,footer').each((i, el) => {
      const $el = $(el);
      if ($el.text().trim().length > 0 || $el.find('img,video,svg').length > 0) {
        sections.push($el);
      }
    });
  }

  // Ensure non-empty unique HTML blocks
  return sections
    .map(($el, idx) => ({ idx, html: $.html($el) }))
    .filter((s) => s.html && s.html.trim().length > 0);
}

function sanitizeForTemplate(html) {
  return html.replaceAll('`', '\\`').replaceAll('${', '\\${');
}

function pxToTailwind(px) {
  const n = parseInt(px, 10);
  const scale = [0,1,2,3,4,5,6,8,10,12,16,20,24,28,32,36,40,44,48,56,64,72,80,96];
  let best = 0;
  let diff = Infinity;
  for (const s of scale) {
    const d = Math.abs(n - s * 4); // tailwind default scale * 4px
    if (d < diff) { diff = d; best = s; }
  }
  return best === 0 ? '0' : `${best}`;
}

function styleToTailwind(styleStr) {
  if (!styleStr) return '';
  const map = new Map();
  for (const part of styleStr.split(';')) {
    const [kRaw, vRaw] = part.split(':');
    if (!kRaw || !vRaw) continue;
    const k = kRaw.trim();
    const v = vRaw.trim();
    switch (k) {
      case 'display':
        if (v === 'flex') map.set('display','flex');
        if (v === 'grid') map.set('display','grid');
        break;
      case 'justify-content':
        if (v === 'center') map.set('justify','justify-center');
        if (v === 'space-between') map.set('justify','justify-between');
        if (v === 'flex-start') map.set('justify','justify-start');
        if (v === 'flex-end') map.set('justify','justify-end');
        break;
      case 'align-items':
        if (v === 'center') map.set('items','items-center');
        if (v === 'flex-start') map.set('items','items-start');
        if (v === 'flex-end') map.set('items','items-end');
        break;
      case 'text-align':
        if (v === 'center') map.set('text','text-center');
        if (v === 'right') map.set('text','text-right');
        if (v === 'left') map.set('text','text-left');
        break;
      case 'font-weight':
        if (v === '700' || v === 'bold') map.set('font','font-bold');
        if (v === '600') map.set('font','font-semibold');
        if (v === '500') map.set('font','font-medium');
        break;
      case 'gap': {
        const val = pxToTailwind(v);
        if (val) map.set('gap', `gap-${val}`);
        break; }
      case 'padding': {
        const val = pxToTailwind(v);
        if (val) map.set('p', `p-${val}`);
        break; }
      case 'padding-left': { const val = pxToTailwind(v); if (val) map.set('pl',`pl-${val}`); break; }
      case 'padding-right': { const val = pxToTailwind(v); if (val) map.set('pr',`pr-${val}`); break; }
      case 'padding-top': { const val = pxToTailwind(v); if (val) map.set('pt',`pt-${val}`); break; }
      case 'padding-bottom': { const val = pxToTailwind(v); if (val) map.set('pb',`pb-${val}`); break; }
      case 'margin': { const val = pxToTailwind(v); if (val) map.set('m',`m-${val}`); break; }
      case 'margin-left': { const val = pxToTailwind(v); if (val) map.set('ml',`ml-${val}`); break; }
      case 'margin-right': { const val = pxToTailwind(v); if (val) map.set('mr',`mr-${val}`); break; }
      case 'margin-top': { const val = pxToTailwind(v); if (val) map.set('mt',`mt-${val}`); break; }
      case 'margin-bottom': { const val = pxToTailwind(v); if (val) map.set('mb',`mb-${val}`); break; }
      case 'width': if (v.endsWith('px')) map.set('w', `w-[${v}]`); break;
      case 'height': if (v.endsWith('px')) map.set('h', `h-[${v}]`); break;
    }
  }
  return Array.from(map.values()).join(' ');
}

function toCamelCaseAttr(name) {
  // preserve data- and aria-
  if (name.startsWith('data-') || name.startsWith('aria-')) return name;
  // special cases
  const map = {
    for: 'htmlFor',
    tabindex: 'tabIndex',
    frameborder: 'frameBorder',
    maxlength: 'maxLength',
    rowspan: 'rowSpan',
    colspan: 'colSpan',
    readonly: 'readOnly',
    cellspacing: 'cellSpacing',
    cellpadding: 'cellPadding',
    allowfullscreen: 'allowFullScreen',
    autoplay: 'autoPlay',
    srcset: 'srcSet',
    crossorigin: 'crossOrigin',
    referrerpolicy: 'referrerPolicy',
    viewbox: 'viewBox',
    'xlink:href': 'xlinkHref',
    'xml:space': 'xmlSpace',
    allowtransparency: 'allowTransparency',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'fill-rule': 'fillRule',
    'clip-path': 'clipPath',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity'
  };
  if (map[name]) return map[name];
  // generic hyphen/colon to camelCase
  return name.replace(/[:-](\w)/g, (_, c) => (c ? c.toUpperCase() : '')).replace(/^(.)/, (m) => m.toLowerCase());
}

function cheerioToTailwindJSX(html) {
  const $ = cheerio.load(html);
  $('script').remove();
  $('style').remove();
  $('link').remove();
  $('*').each((_, el) => {
    const $el = $(el);
    const style = $el.attr('style');
    if (style) {
      const tw = styleToTailwind(style);
      const existing = $el.attr('class') || '';
      $el.removeAttr('style');
      $el.attr('class', `${existing} ${tw}`.trim());
    }
    // Remove event handlers
    const attrs = { ...(el.attribs || {}) };
    Object.keys(attrs).forEach((raw) => {
      const lower = raw.toLowerCase();
      if (lower === 'class') return; // handled
      if (lower.startsWith('on')) {
        $el.removeAttr(raw);
        return;
      }
      const value = attrs[raw];
      const camel = toCamelCaseAttr(lower);
      if (camel !== raw) {
        $el.removeAttr(raw);
        $el.attr(camel, value);
      }
    });
  });
  let out = $('body').length ? $('body').html() || '' : $.html();
  out = out.replace(/ class=/g, ' className=');
  // self-close common void tags for TSX
  out = out.replace(/<(img|br|hr|input)([^>]*)>/g, '<$1$2 />');
  return out;
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
  // rewrite
  selectors.forEach(([sel, attr]) => {
    $(sel).each((_, el) => rewriteAttr($(el), attr, origin, assetRootDir));
  });
}

async function writeComponent(componentsDir, name, html) {
  const file = path.join(componentsDir, `${name}.tsx`);
  const safe = sanitizeForTemplate(html);
  const content = `
export default function ${name}() {
  const html = \`${safe}\`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
`;
  await fs.writeFile(file, content, 'utf-8');
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

  // Inject into globals.css between markers
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

async function inlineHeadStyles($, globalsCssPath) {
  // Collect inline <style> from head (e.g., Framer SSR CSS)
  let aggregated = '';
  $('head style').each((_, el) => {
    const css = $(el).html() || '';
    if (css.trim().length) aggregated += `\n/* inline head style */\n` + css + '\n';
  });
  $('head style').remove();
  if (!aggregated.trim().length) return;
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
async function main() {
  const origin = process.argv[2] || 'https://www.fractionaldemand.com';
  console.log('→ Extracting components from', origin);

  let html = '';
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    );
    await page.setDefaultNavigationTimeout(120000);
    await page.goto(origin, { waitUntil: 'domcontentloaded' });
    // Wait for Framer content to populate #main (or any substantial content)
    await page.waitForSelector('#main', { timeout: 60000 }).catch(() => {});
    await page.waitForFunction(
      () => {
        const main = document.querySelector('#main') || document.querySelector('main') || document.body;
        return !!main && (main.children.length > 0 || (main.innerText || '').trim().length > 50);
      },
      { timeout: 60000 }
    ).catch(() => {});
    await new Promise((r) => setTimeout(r, 750));
    html = await page.content();
    await browser.close();
  } catch (e) {
    console.warn('! Headless render failed, falling back to raw HTML fetch:', e.message);
    const res = await fetch(origin);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    html = await res.text();
  }

  const $ = cheerio.load(html);
  // Remove scripts to avoid hydration problems
  $('script').remove();
  // Localize assets
  const assetRoot = path.join(__dirname, '..', 'public', 'assets');
  await fs.mkdir(assetRoot, { recursive: true });
  await localizeAssets($, origin, assetRoot);
  // Inline and append remote styles into app/globals.css
  const globalsCssPath = path.join(__dirname, '..', 'app', 'globals.css');
  await inlineStylesheets($, origin, assetRoot, globalsCssPath);
  await inlineHeadStyles($, globalsCssPath);

  const sections = extractSections($);
  if (sections.length === 0) {
    console.warn('! No sections found. Generating a single component from <body>.');
    sections.push({ idx: 0, html: $('body').html() || '' });
  }

  const componentsDir = path.join(__dirname, '..', 'components', 'extracted');
  await fs.mkdir(componentsDir, { recursive: true });

  const componentNames = [];
  for (let i = 0; i < sections.length; i += 1) {
    const { html: sectionHTML } = sections[i];
    const firstText = cheerio.load(sectionHTML)('*').first().attr('class') || `Section${i + 1}`;
    const name = toPascalCase(firstText) || `Section${i + 1}`;
    const uniqueName = componentNames.includes(name) ? `${name}${i + 1}` : name;
    componentNames.push(uniqueName);
    await writeComponent(componentsDir, uniqueName, sectionHTML);
  }

  // Compose app/page.tsx
  const imports = componentNames.map((n) => `import ${n} from '../components/extracted/${n}';`).join('\n');
  const jsx = componentNames.map((n) => `        <${n} />`).join('\n');
  const pageTsx = `
${imports}

export default function Page() {
  return (
    <main>
      <div className="mirror-root">
${jsx}
      </div>
    </main>
  );
}
`;
  const appDir = path.join(__dirname, '..', 'app');
  await fs.writeFile(path.join(appDir, 'page.tsx'), pageTsx, 'utf-8');

  console.log(`✓ Generated ${componentNames.length} components in components/extracted and composed app/page.tsx`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


