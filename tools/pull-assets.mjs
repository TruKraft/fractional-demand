/* eslint-disable no-console */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function arg(name, def) {
  const idx = process.argv.indexOf(`--${name}`);
  return idx !== -1 ? process.argv[idx + 1] : def;
}

function toFileName(base, url) {
  const u = new URL(url);
  const ext = path.extname(u.pathname) || '.png';
  return `${base}${ext}`.replace(/\s+/g, '-').toLowerCase();
}

async function download(url, targetDir, fileName) {
  await fs.mkdir(targetDir, { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const file = path.join(targetDir, fileName);
  await fs.writeFile(file, buf);
  return file;
}

async function main() {
  const origin = arg('domain', 'https://www.fractionaldemand.com');
  const snapshotPath = path.join(__dirname, '..', 'snapshot', 'index.html');
  let html = '';
  try {
    html = await fs.readFile(snapshotPath, 'utf-8');
  } catch {
    console.error('Snapshot not found. Run: npm run snapshot');
    process.exit(1);
  }

  const $ = cheerio.load(html);
  const assetDir = path.join(__dirname, '..', 'public', 'assets', 'images');

  const outMap = path.join(assetDir, 'assets-map.json');
  let previous = {};
  try {
    const existing = await fs.readFile(outMap, 'utf-8');
    previous = JSON.parse(existing);
  } catch {}

  const mapping = {
    logos: previous.logos || [],
    bioImages: previous.bioImages || {},
    logosRow1: previous.logosRow1 || [],
    logosRow2: previous.logosRow2 || [],
    wordmark: previous.wordmark,
    servicesImage: previous.servicesImage,
  };

  // wordmark in nav/footer
  const navLogo = $('img[alt="Logo"]').first();
  if (navLogo.length) {
    const src = navLogo.attr('src');
    const abs = new URL(src, origin).toString();
    const file = toFileName('logo-wordmark-white', abs);
    await download(abs, assetDir, file).catch(() => {});
    mapping.wordmark = `/assets/images/${file}`;
  }

  // logos strip
  // Prefer extracting by known Framer containers for each row
  function collectUniqueSrcsIn(sel) {
    const imgs = $(sel).find('img').toArray();
    const seenLocal = new Set();
    const out = [];
    for (const img of imgs) {
      const src = $(img).attr('src');
      if (!src) continue;
      const abs = new URL(src, origin).toString();
      if (seenLocal.has(abs)) continue;
      seenLocal.add(abs);
      out.push(abs);
    }
    return out;
  }

  let row1Srcs = collectUniqueSrcsIn('.framer-1sp48ew-container');
  let row2Srcs = collectUniqueSrcsIn('.framer-1mp74bk-container');

  // Fallback: try heading-based detection and alternate split
  if (row1Srcs.length === 0 && row2Srcs.length === 0) {
    const logosHeading = $(':contains("B2B brands we\'ve helped grow"):header').first();
    const logosSection = logosHeading.length ? logosHeading.closest('section, div') : null;
    const logoImgsAll = logosSection ? logosSection.find('img').toArray() : [];
    const seen = new Set();
    const uniqueSrcs = [];
    for (const img of logoImgsAll) {
      const src = $(img).attr('src');
      if (!src) continue;
      const abs = new URL(src, origin).toString();
      if (seen.has(abs)) continue;
      seen.add(abs);
      uniqueSrcs.push(abs);
    }
    if (uniqueSrcs.length) {
      uniqueSrcs.forEach((abs, idx) => {
        if (idx % 2 === 0) row1Srcs.push(abs);
        else row2Srcs.push(abs);
      });
    }
  }

  // Download and map both rows if we found any
  if (row1Srcs.length || row2Srcs.length) {
    const row1Picked = row1Srcs.map((abs, i) => ({ abs, file: toFileName(`logo-r1-${i + 1}`, abs) }));
    const row2Picked = row2Srcs.map((abs, i) => ({ abs, file: toFileName(`logo-r2-${i + 1}`, abs) }));
    for (const { abs, file } of [...row1Picked, ...row2Picked]) {
      await download(abs, assetDir, file).catch(() => {});
    }
    mapping.logosRow1 = row1Picked.map(({ file }) => `/assets/images/${file}`);
    mapping.logosRow2 = row2Picked.map(({ file }) => `/assets/images/${file}`);
    mapping.logos = [...mapping.logosRow1, ...mapping.logosRow2];
  }

  // services photo (unsplash)
  const servicesHead = $(':contains("Our services"):header').first();
  const servicesBlock = servicesHead.length ? servicesHead.closest('section, div').parent() : null;

  // Try to find per-service images near each service title
  mapping.servicesImages = mapping.servicesImages || {};
  if (servicesBlock) {
    const titles = servicesBlock.find('h1,h2,h3,h4,h5').toArray().filter((el) => /Paid|LinkedIn|Facebook|ABM|Lead|Email|Ads|Search|Strategy|Marketing|Nurture/i.test($(el).text()));
    for (const t of titles) {
      const title = $(t).text().trim();
      const key = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      let src = '';
      // Direct <img>
      let img = $(t).nextAll('img').first();
      if (!img.length) img = $(t).parent().find('img').first();
      if (img && img.length) src = img.attr('src') || '';
      // Background-image on a wrapper
      if (!src) {
        let bg = $(t).nextAll('*[style*="background-image"]').first();
        if (!bg.length) bg = $(t).parent().find('*[style*="background-image"]').first();
        const style = (bg.attr('style') || '').toString();
        const m = style.match(/background-image:\s*url\(([^\)]+)\)/i);
        if (m && m[1]) src = m[1].replace(/['"]/g, '');
      }
      // Framer background wrapper
      if (!src) {
        const bgWrap = $(t).closest('section,div').find('[data-framer-background-image-wrapper] img').first();
        if (bgWrap && bgWrap.length) src = bgWrap.attr('src') || '';
      }
      if (!src) continue;
      const abs = new URL(src, origin).toString();
      const file = toFileName(`service-${key}`, abs);
      await download(abs, assetDir, file).catch(() => {});
      mapping.servicesImages[key] = `/assets/images/${file}`;
    }
  }

  // Fallback shared services image
  if (!mapping.servicesImage) {
    const servicesImg = servicesBlock ? servicesBlock.find('img').first() : null;
    if (servicesImg && servicesImg.length) {
      const src = servicesImg.attr('src');
      if (src) {
        const abs = new URL(src, origin).toString();
        const file = toFileName('unsplash-laptop', abs);
        await download(abs, assetDir, file).catch(() => {});
        mapping.servicesImage = `/assets/images/${file}`;
      }
    }
  }

  // bios
  function findImageNearName(name) {
    const candidates = $(`[data-framer-component-type="RichTextContainer"], :header, p`).filter((_, el) => $(el).text().trim() === name);
    if (!candidates.length) return null;
    // Choose the shallowest element
    let best = candidates[0];
    candidates.each((_, el) => { if ($(el).parents().length < $(best).parents().length) best = el; });
    const container = $(best).closest('article, section, div');
    let img = container.find('img').first();
    if (!img.length) img = container.find('[data-framer-background-image-wrapper] img').first();
    const src = img.attr('src');
    return src ? new URL(src, origin).toString() : null;
  }

  const gavinUrl = findImageNearName('Gavin Tanner');
  if (gavinUrl) {
    const file = toFileName('gavin', gavinUrl);
    await download(gavinUrl, assetDir, file).catch(() => {});
    mapping.bioImages['Gavin Tanner'] = `/assets/images/${file}`;
  }
  const jacobUrl = findImageNearName('Jacob Cullum');
  if (jacobUrl) {
    const file = toFileName('jacob', jacobUrl);
    await download(jacobUrl, assetDir, file).catch(() => {});
    mapping.bioImages['Jacob Cullum'] = `/assets/images/${file}`;
  }
  const jordanUrl = findImageNearName('Jordan Barker');
  if (jordanUrl) {
    const file = toFileName('jordan', jordanUrl);
    await download(jordanUrl, assetDir, file).catch(() => {});
    mapping.bioImages['Jordan Barker'] = `/assets/images/${file}`;
  }
  const cindyUrl = findImageNearName('Cindy Westra');
  if (cindyUrl) {
    const file = toFileName('cindy', cindyUrl);
    await download(cindyUrl, assetDir, file).catch(() => {});
    mapping.bioImages['Cindy Westra'] = `/assets/images/${file}`;
  }
  const walterUrl = findImageNearName('Walter Silveira');
  if (walterUrl) {
    const file = toFileName('walter', walterUrl);
    await download(walterUrl, assetDir, file).catch(() => {});
    mapping.bioImages['Walter Silveira'] = `/assets/images/${file}`;
  }

  // fallback if names not found: first two circular images on page
  if (!mapping.gavin || !mapping.jacob) {
    const roundImgs = $('img').filter((_, el) => {
      const style = $(el).attr('style') || '';
      return /border-radius:\s*100px|50%/.test(style);
    }).toArray();
    if (!mapping.gavin && roundImgs[0]) {
      const src = $(roundImgs[0]).attr('src');
      if (src) {
        const abs = new URL(src, origin).toString();
        const file = toFileName('gavin', abs);
        await download(abs, assetDir, file).catch(() => {});
        mapping.gavin = `/assets/images/${file}`;
      }
    }
    if (!mapping.jacob && roundImgs[1]) {
      const src = $(roundImgs[1]).attr('src');
      if (src) {
        const abs = new URL(src, origin).toString();
        const file = toFileName('jacob', abs);
        await download(abs, assetDir, file).catch(() => {});
        mapping.jacob = `/assets/images/${file}`;
      }
    }
  }

  await fs.writeFile(outMap, JSON.stringify(mapping, null, 2));
  console.log('✓ Assets saved to public/assets/images and mapping written to', outMap);
}

main().catch((e) => { console.error(e); process.exit(1); });


