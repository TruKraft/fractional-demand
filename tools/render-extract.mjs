/* eslint-disable no-console */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function arg(name, def) {
  const idx = process.argv.indexOf(`--${name}`);
  return idx !== -1 ? process.argv[idx + 1] : def;
}

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

async function main() {
  const domain = arg('domain', 'https://www.fractionaldemand.com');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(domain, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForSelector('#main', { timeout: 60000 }).catch(() => {});

  // Let animations complete; force make elements visible via script
  await page.addStyleTag({ content: '*{opacity:1 !important; transform:none !important; will-change:auto !important;}' });
  await new Promise((r) => setTimeout(r, 1500));

  // Evaluate to get rendered HTML and computed styles inlined (critical)
  const html = await page.evaluate(() => {
    // Inline computed styles for each element to preserve layout without external CSS dependencies
    const doc = document.cloneNode(true);
    const walker = doc.createTreeWalker(doc.body || doc, NodeFilter.SHOW_ELEMENT);
    const original = document;
    while (walker.nextNode()) {
      const el = walker.currentNode;
      const ref = original.querySelector('[data-uid]' + (el.getAttribute('data-uid') ? `[data-uid='${el.getAttribute('data-uid')}']` : '')) || null;
      const target = original.querySelector(el.tagName.toLowerCase());
      const src = target || (ref ? ref : null);
      if (!src) continue;
      const cs = getComputedStyle(src);
      const style = Array.from(cs)
        .map((p) => `${p}:${cs.getPropertyValue(p)}`)
        .join(';');
      el.setAttribute('style', style);
    }
    return new XMLSerializer().serializeToString(doc);
  });

  await browser.close();

  const $ = cheerio.load(html);
  const root = $('#main').length ? $('#main') : $('body');
  const parts = [];
  root.children().each((_, el) => { const h = $.html(el); if (h.trim()) parts.push(h); });
  if (parts.length === 0) parts.push(root.html() || '');

  const compDir = path.join(__dirname, '..', 'components', 'extracted');
  await fs.mkdir(compDir, { recursive: true });
  const names = [];
  for (let i = 0; i < parts.length; i += 1) {
    const firstClass = cheerio.load(parts[i])('*').first().attr('class') || `Section${i + 1}`;
    const name = toPascalCase(firstClass) || `Section${i + 1}`;
    const finalName = names.includes(name) ? `${name}${i + 1}` : name;
    names.push(finalName);
    await writeComponent(compDir, finalName, parts[i]);
  }

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
  console.log(`✓ Render-extract wrote ${names.length} components with inlined computed styles.`);
}

main().catch((e) => { console.error(e); process.exit(1); });


