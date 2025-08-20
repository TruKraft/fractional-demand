/* eslint-disable no-console */
import { mkdir, writeFile, readFile } from "node:fs/promises";
import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as sleep } from "node:timers/promises";
import * as cheerio from "cheerio";
import fse from "fs-extra";
import { fetch } from "undici";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function usage() {
  console.log(
    [
      "Usage: npm run replicate -- --domain https://example.com [--out .] [--max 50] [--project Example]",
      "",
      "Defaults: --out . (current directory). This is intended as a one-time initializer.",
    ].join("\n")
  );
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    const v = argv[i + 1];
    if (a === "--domain") out.domain = v;
    if (a === "--out") out.out = v;
    if (a === "--max") out.max = Number(v);
    if (a === "--project") out.project = v;
  }
  return out;
}

async function promptInteractive(defaults) {
  const { createInterface } = await import("node:readline/promises");
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const domain = (await rl.question(`Domain to replicate${defaults.domain ? ` [${defaults.domain}]` : ""}: `)) || defaults.domain;
  let out =
    (await rl.question(`Output directory (will overwrite)${defaults.out ? ` [${defaults.out}]` : " [.]"}: `)) || defaults.out || process.cwd();
  const project = (await rl.question(`Project name${defaults.project ? ` [${defaults.project}]` : ""}: `)) || defaults.project || new URL(domain).hostname.replace(/^www\./, "");
  const maxStr = await rl.question(`Max pages to crawl${defaults.max ? ` [${defaults.max}]` : " [50]"}: `);
  const max = Number(maxStr || defaults.max || 50);
  rl.close();
  return { domain, out, project, max };
}

async function scaffoldNextApp(templateRoot, targetDir, projectName) {
  await fse.copy(templateRoot, targetDir, { overwrite: true, errorOnExist: false });
  const pkgPath = path.join(targetDir, "package.json");
  const pkg = JSON.parse(await readFile(pkgPath, "utf-8"));
  pkg.name = projectName || pkg.name;
  await writeFile(pkgPath, JSON.stringify(pkg, null, 2));
}

function withinOrigin(url, origin) {
  try {
    const u = new URL(url, origin);
    return u.origin === new URL(origin).origin;
  } catch {
    return false;
  }
}

function normalizePathFromUrl(u) {
  const url = new URL(u);
  let p = url.pathname;
  if (p.endsWith("/")) p += "index.html";
  if (!path.extname(p)) p += ".html";
  return p.startsWith("/") ? p.slice(1) : p;
}

function pageRouteFromUrl(u) {
  const url = new URL(u);
  let p = url.pathname.replace(/\/$/, "");
  if (p === "" || p === "/") return [];
  return p.split("/").filter(Boolean);
}

function localAssetPath(assetUrl, assetRootDir) {
  const u = new URL(assetUrl);
  let file = u.pathname;
  if (file.endsWith("/")) file += "index.html";
  if (!path.extname(file)) file += ".bin";
  file = file.replace(/^\/+/, "");
  return path.join(assetRootDir, file);
}

async function downloadAsset(assetUrl, assetRootDir, seen) {
  const abs = new URL(assetUrl).toString();
  if (seen.has(abs)) return null;
  seen.add(abs);
  const dest = localAssetPath(abs, assetRootDir);
  await fse.ensureDir(path.dirname(dest));
  try {
    const res = await fetch(abs);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    return dest;
  } catch (e) {
    console.warn("! asset failed", abs, e.message);
    return null;
  }
}

async function processCSS(filePath, baseUrl, assetRootDir, seen) {
  let css = await readFile(filePath, "utf-8");
  const urlRegex = /url\(([^)]+)\)/g;
  const matches = [...css.matchAll(urlRegex)];
  for (const m of matches) {
    let raw = m[1].trim().replace(/^['"]|['"]$/g, "");
    if (!raw || raw.startsWith("data:")) continue;
    try {
      const abs = new URL(raw, baseUrl).toString();
      const saved = await downloadAsset(abs, assetRootDir, seen);
      if (saved) {
        const rel = path.relative(path.dirname(filePath), saved).replaceAll("\\", "/");
        css = css.replace(m[0], `url(${rel})`);
      }
    } catch {}
  }
  await writeFile(filePath, css, "utf-8");
}

function extractSrcset(value) {
  if (!value) return [];
  return value.split(",").map((x) => x.trim().split(" ")[0]).filter(Boolean);
}

function rewriteAttr($el, attr, base, assetRootDir) {
  const val = $el.attr(attr);
  if (!val) return;
  try {
    const abs = new URL(val, base).toString();
    const dest = localAssetPath(abs, assetRootDir);
    const rel = path.relative(assetRootDir, dest).replaceAll("\\", "/");
    $el.attr(attr, `/assets/${rel}`);
  } catch {}
}

async function crawlAndMaterialize(origin, targetDir, options) {
  const startUrl = new URL("/", origin).toString();
  const appDir = path.join(targetDir, "app");
  const publicDir = path.join(targetDir, "public");
  const assetRoot = path.join(publicDir, "assets");

  await fse.ensureDir(appDir);
  await fse.ensureDir(publicDir);
  await fse.ensureDir(assetRoot);

  const queue = [startUrl];
  const visited = new Set();
  const seenAssets = new Set();
  const maxPages = Number(options.max) || 50;

  const assetSelectors = [
    ["link[rel='stylesheet']", "href"],
    ["script[src]", "src"],
    ["img[src]", "src"],
    ["source[srcset]", "srcset"],
    ["link[rel='preload'][as='style']", "href"],
    ["link[rel='preload'][as='font']", "href"],
    ["link[rel='icon']", "href"],
    ["video[src]", "src"],
    ["link[rel='modulepreload']", "href"]
  ];

  while (queue.length && visited.size < maxPages) {
    const url = queue.shift();
    if (!url || visited.has(url)) continue;
    visited.add(url);
    console.log(`→ Fetch ${url}`);
    try {
      // Render with headless browser to capture dynamic content (e.g., Framer)
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
      await page.waitForTimeout(500);
      const html = await page.content();
      await browser.close();
      const $ = cheerio.load(html);

      $("a[href]").each((_, el) => {
        const href = $(el).attr("href");
        if (!href) return;
        try {
          const abs = new URL(href, url).toString();
          if (withinOrigin(abs, origin)) queue.push(abs);
        } catch {}
      });

      // Remove scripts and modulepreloads to keep static output
      $("script").remove();
      $("link[rel='modulepreload']").remove();

      const toDownload = new Set();
      for (const [sel, attr] of assetSelectors) {
        $(sel).each((_, el) => {
          const $el = $(el);
          const val = $el.attr(attr);
          if (!val) return;
          if (attr === "srcset") {
            for (const u of extractSrcset(val)) toDownload.add(new URL(u, url).toString());
          } else {
            toDownload.add(new URL(val, url).toString());
          }
        });
      }

      for (const a of toDownload) {
        const saved = await downloadAsset(a, assetRoot, seenAssets);
        if (saved && path.extname(saved).match(/\.css$/i)) {
          await processCSS(saved, a, assetRoot, seenAssets);
        }
        await sleep(10);
      }

      for (const [sel, attr] of assetSelectors) {
        $(sel).each((_, el) => rewriteAttr($(el), attr, url, assetRoot));
      }

      $("meta[http-equiv='content-security-policy']").remove();

      // Extract body HTML only
      const bodyHTML = ($("body").html() || "").trim();
      const safeHTML = bodyHTML
        .replaceAll("`", "\\`")
        .replaceAll("${", "\\${");

      // Collect head bits
      const title = ($("title").first().text() || "").trim();
      const safeTitle = title
        .replaceAll("`", "\\`")
        .replaceAll("${", "\\${");
      const stylesheets = [];
      $("link[rel='stylesheet']").each((_, el) => {
        const href = $(el).attr("href");
        if (href) stylesheets.push(href);
      });

      const routeSegments = pageRouteFromUrl(url);
      const pageDir = path.join(appDir, ...routeSegments);
      await fse.ensureDir(pageDir);
      const pageFile = path.join(pageDir, "page.tsx");

      const pageContents = `\nexport default function Page() {\n  const html = \`${safeHTML}\`;\n  return <div className=\"mirror-root\" dangerouslySetInnerHTML={{ __html: html }} />;\n}\n`;
      await writeFile(pageFile, pageContents, "utf-8");

      // Write a head.tsx for styles and title
      const headFile = path.join(pageDir, "head.tsx");
      const headContents = `\nexport default function Head() {\n  return (\n    <>\n      ${title ? `<title>${safeTitle}</title>` : ""}\n      ${stylesheets.map((h) => `<link rel=\"stylesheet\" href=\"${h}\" />`).join("\n      ")}\n    </>\n  );\n}\n`;
      await writeFile(headFile, headContents, "utf-8");
    } catch (e) {
      console.warn("! page failed", url, e.message);
    }
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || args.h) {
    usage();
    process.exit(0);
  }

  const defaults = { domain: args.domain, out: args.out, project: args.project, max: args.max || 50 };
  let domain = defaults.domain;
  let out = defaults.out;
  let project = defaults.project;
  let max = defaults.max;

  if (!domain || !out || !project) {
    ({ domain, out, project, max } = await promptInteractive(defaults));
  }

  if (!domain) {
    console.error("Domain is required.");
    usage();
    process.exit(1);
  }
  if (!/^https?:\/\//i.test(domain)) domain = `https://${domain}`;

  out = out || process.cwd();
  await fse.ensureDir(out);

  const templateRoot = path.join(__dirname, "..", "templates", "next-app");
  console.log("→ Scaffolding Next.js app at", out);
  await scaffoldNextApp(templateRoot, out, project);

  console.log("→ Crawling and generating pages from", domain);
  await crawlAndMaterialize(domain, out, { max });

  console.log("✓ Replication complete");
  console.log("Next steps:\n  1) cd", out, "\n  2) npm install\n  3) npm run dev  # http://localhost:3000");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


