
# Replicator — One-time Next.js scaffold from a permitted domain

This repo provides a replicator script that crawls a domain you own or have permission to reproduce, scaffolds a fresh Next.js app, and generates pages and assets for continued development.

## Quick start

```bash
npm install

# Interactive (prompts for domain, project name, and output dir; defaults to current dir)
npm run replicate

# Or provide flags
npm run replicate -- --domain https://example.com --project example --out . --max 75
```

After replication (if you chose current dir):

```bash
npm install
npm run dev   # http://localhost:3000
```

## What it does

- Scaffolds a new Next.js + Tailwind app from `templates/next-app/` into your chosen directory (default: current directory).
- Crawls up to `--max` pages on the same origin.
- Downloads assets (CSS/JS/images/fonts), rewrites paths to local `/assets/...`, and stores HTML in `public/mirror/`.
- Generates `app/**/page.tsx` files that render the HTML using an isolated wrapper, so Tailwind does not affect styles.

## Notes

- This is intended as a one-time operation per repo. To replicate another site, duplicate this repo and run again.
- Third-party/dynamic scripts may not function offline. You can strip or replace them as you continue development.
- You can incrementally replace mirrored sections with real React components and keep assets as needed.

