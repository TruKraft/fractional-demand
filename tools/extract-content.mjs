/* eslint-disable no-console */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function text(el) {
  return el.text().replace(/\s+/g, ' ').trim();
}

async function main() {
  const snap = path.join(__dirname, '..', 'snapshot', 'index.html');
  const html = await fs.readFile(snap, 'utf-8');
  const $ = cheerio.load(html);

  const outDir = path.join(__dirname, '..', 'content');
  await fs.mkdir(outDir, { recursive: true });

  // Extract Services with per-item blurbs
  const services = [];
  const servicesHead = $(':header:contains("Our services")').first();
  if (servicesHead.length) {
    const area = servicesHead.closest('section, div');
    // Find candidate item headings beneath the services area
    const candidateHeaders = area.find('h1, h2, h3, h4, h5').toArray();
    const seenTitles = new Set();
    // compute a general default blurb from the area
    let areaDefault = '';
    area.find('p').each((_, el) => { const t = text($(el)); if (t.length > areaDefault.length) areaDefault = t; });

    for (const h of candidateHeaders) {
      const titleText = text($(h));
      if (!titleText) continue;
      // Filter out section heading and duplicates; keep short-ish titles
      if (/our services/i.test(titleText)) continue;
      if (titleText.length > 60) continue;
      // Heuristic: only accept if looks like a service title by keywords or capitalized words
      if (!/(Paid|LinkedIn|Facebook|ABM|Lead|Email|Ads|Search|Strategy|Marketing|Nurture)/i.test(titleText)) continue;
      if (seenTitles.has(titleText)) continue;
      seenTitles.add(titleText);

      // Find nearest descriptive paragraph following the header
      let blurb = '';
      // Prefer immediate following paragraphs
      const nextP = $(h).nextAll('p').filter((_, el) => text($(el)).length > 40).first();
      if (nextP && nextP.length) blurb = text(nextP);
      // Fallback: search within the same parent block
      if (!blurb) {
        const parent = $(h).parent();
        const pInParent = parent.find('p').filter((_, el) => text($(el)).length > 40).first();
        if (pInParent && pInParent.length) blurb = text(pInParent);
      }
      // Last resort: longest paragraph in area
      if (!blurb) blurb = areaDefault;

      services.push({ key: titleText.toLowerCase().replace(/[^a-z0-9]+/g, '-'), title: titleText, blurb });
    }
  }
  // Preserve existing content if our extraction is poorer
  const servicesPath = path.join(outDir, 'services.json');
  try {
    const existing = JSON.parse(await fs.readFile(servicesPath, 'utf-8'));
    if (Array.isArray(existing) && existing.length === services.length) {
      for (let i = 0; i < services.length; i += 1) {
        if (!services[i].blurb && existing[i] && existing[i].blurb) services[i].blurb = existing[i].blurb;
      }
    }
  } catch {}
  await fs.writeFile(servicesPath, JSON.stringify(services, null, 2));

  // Extract Bios
  const bios = [];
  const aboutHead = $(':header:contains("About us")').first();
  if (aboutHead.length) {
    const area = aboutHead.closest('section, div').parent();
    // cards: detect rounded border containers
    const cards = area.find('div, article').filter((_, el) => /border|radius/i.test($(el).attr('style') || '')).toArray();
    cards.forEach((c) => {
      const card = $(c);
      const nameEl = card.find(':header').filter((_, el) => /[A-Z][a-z]+\s[A-Z][a-z]+/.test(text($(el)))).first();
      const name = nameEl.length ? text(nameEl) : '';
      if (!name) return;
      const titleEl = card.find(':header').filter((_, el) => /(Founder|Manager|CMO|Owner|Sr\.|Senior)/i.test(text($(el)))).first();
      const title = titleEl.length ? text(titleEl) : '';
      let best = '';
      card.find('p, h2').each((_, el) => {
        const t = text($(el));
        if (t.length > best.length) best = t;
      });
      bios.push({ name, title, blurb: best });
    });
  }
  await fs.writeFile(path.join(outDir, 'bios.json'), JSON.stringify(bios, null, 2));

  console.log(`✓ Extracted ${services.length} services and ${bios.length} bios → content/`);
}

main().catch((e) => { console.error(e); process.exit(1); });


