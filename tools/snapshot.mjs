/* eslint-disable no-console */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function arg(name, def) {
  const idx = process.argv.indexOf(`--${name}`);
  return idx !== -1 ? process.argv[idx + 1] : def;
}

async function main() {
  const domain = arg('domain', 'https://www.fractionaldemand.com');
  const outRoot = path.join(__dirname, '..', 'snapshot');
  await fs.mkdir(outRoot, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36');
  await page.setDefaultNavigationTimeout(120000);
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  // Be resilient: avoid waiting forever due to long-polling
  await page.goto(domain, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForSelector('#main', { timeout: 60000 }).catch(() => {});
  // Give scripts and styles time to apply, but don't hang
  await new Promise((r) => setTimeout(r, 3000));

  const html = await page.content();
  await browser.close();

  await fs.writeFile(path.join(outRoot, 'index.html'), html, 'utf-8');
  console.log('✓ Snapshot saved to snapshot/index.html');
}

main().catch((e) => { console.error(e); process.exit(1); });


