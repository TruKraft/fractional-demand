import type { NextRequest } from 'next/server';

export function GET(_req: NextRequest) {
  const lines = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /lp/',
    '',
    'User-agent: GPTBot',
    'Allow: /',
    'Disallow: /lp/',
    '',
    'User-agent: CCBot',
    'Allow: /',
    'Disallow: /lp/',
    '',
    'User-agent: anthropic-ai',
    'Allow: /',
    'Disallow: /lp/',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    'Disallow: /lp/',
    '',
    'Sitemap: https://www.fractionaldemand.com/sitemap.xml',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain' },
  });
}


