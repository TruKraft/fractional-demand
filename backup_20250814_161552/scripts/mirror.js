
/* eslint-disable no-console */
import { writeFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as sleep } from "node:timers/promises";
import * as fs from "node:fs";
import fse from "fs-extra";
import * as cheerio from "cheerio";
import { fetch } from "undici";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ORIGIN = "https://www.fractionaldemand.com";
const START_URL = ORIGIN + "/";

const OUT_DIR = path.join(__dirname, "..", "public", "mirror");
const ASSET_DIR = path.join(OUT_DIR, "assets");
const seen = new Set();

function cleanURL(u) {
  if (!u) return null;
  // Remove URL params/fragments for file storage
  try {
    const url = new URL(u, ORIGIN);
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}

function localNameFromURL(u) {
  const url = new URL(u);
  // Preserve path structure
  let file = url.pathname;
  if (file.endsWith("/")) file += "index.html";
  // Some CDNs serve assets without extension; add .bin fallback
  if (!path.extname(file)) file += ".bin";
  // Prevent very deep paths
  const safe = file.replace(/^\/+/, "");
  return path.join(ASSET_DIR, safe);
}

async function downloadAsset(u) {
  const url = cleanURL(u);
  if (!url || seen.has(url)) return null;
  seen.add(url);
  const dest = localNameFromURL(url);
  await fse.ensureDir(path.dirname(dest));
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    return dest;
  } catch (e) {
    console.warn("! asset failed", url, e.message);
    return null;
  }
}

async function processCSS(filePath, baseUrl) {
  // Download assets referenced in CSS url(...)
  let css = await readFile(filePath, "utf-8");
  const urlRegex = /url\(([^)]+)\)/g;
  const matches = [...css.matchAll(urlRegex)];
  for (const m of matches) {
    let raw = m[1].trim().replace(/^['"]|['"]$/g, "");
    if (raw.startsWith("data:")) continue;
    try {
      const abs = new URL(raw, baseUrl).toString();
      const saved = await downloadAsset(abs);
      if (saved) {
        const rel = path.relative(path.dirname(filePath), saved).replaceAll("\\", "/");
        css = css.replace(m[0], `url(${rel})`);
      }
    } catch { /* noop */ }
  }
  await writeFile(filePath, css, "utf-8");
}

function rewriteAttr($el, attr, base) {
  const val = $el.attr(attr);
  if (!val) return;
  try {
    const abs = new URL(val, base).toString();
    const dest = localNameFromURL(abs);
    const rel = "assets/" + path.relative(ASSET_DIR, dest).replaceAll("\\", "/");
    $el.attr(attr, rel);
  } catch {
    // leave untouched
  }
}

async function mirror() {
  console.log("→ Mirroring", START_URL);
  await fse.emptyDir(OUT_DIR);
  await fse.ensureDir(ASSET_DIR);

  const htmlRes = await fetch(START_URL, { redirect: "follow" });
  if (!htmlRes.ok) throw new Error(`Failed to fetch: ${START_URL} (${htmlRes.status})`);
  const html = await htmlRes.text();

  const $ = cheerio.load(html);

  // Collect assets
  const assetSelectors = [
    ["link[rel='stylesheet']", "href"],
    ["script[src]", "src"],
    ["img[src]", "src"],
    ["source[srcset]", "srcset"],
    ["link[rel='preload'][as='style']", "href"],
    ["link[rel='preload'][as='font']", "href"],
    ["link[rel='icon']", "href"],
    ["video[src]", "src"]
  ];

  // srcset handling
  function extractSrcset(value) {
    if (!value) return [];
    return value.split(",").map(x => x.trim().split(" ")[0]).filter(Boolean);
  }

  const toDownload = new Set();
  for (const [sel, attr] of assetSelectors) {
    $(sel).each((_, el) => {
      const $el = $(el);
      const val = $el.attr(attr);
      if (!val) return;
      if (attr === "srcset") {
        for (const u of extractSrcset(val)) toDownload.add(new URL(u, START_URL).toString());
      } else {
        toDownload.add(new URL(val, START_URL).toString());
      }
    });
  }

  // Download assets
  for (const url of toDownload) {
    const saved = await downloadAsset(url);
    if (saved && path.extname(saved).match(/\.css$/i)) {
      await processCSS(saved, url);
    }
    // be polite
    await sleep(15);
  }

  // Rewrite references in HTML
  for (const [sel, attr] of assetSelectors) {
    $(sel).each((_, el) => rewriteAttr($(el), attr, START_URL));
  }

  // Remove Content-Security-Policy/meta that might block local assets
  $("meta[http-equiv='content-security-policy']").remove();

  // Ensure relative navigation still works (we leave hrefs to remote site intact)
  // Save rewritten HTML
  const outHTML = $.html();
  await writeFile(path.join(OUT_DIR, "index.html"), outHTML, "utf-8");
  console.log("✓ Mirror complete →", path.join("public", "mirror", "index.html"));
}

mirror().catch((e) => {
  console.error("Mirror failed:", e);
  process.exit(0); // don't crash install
});
