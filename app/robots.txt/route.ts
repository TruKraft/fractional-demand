import type { NextRequest } from 'next/server';

export function GET(_req: NextRequest) {
  const lines = [
    '# Allow all search engines and AI crawlers',
    'User-agent: *',
    'Allow: /',
    '',
    '# AI Crawler Specific Rules',
    '# OpenAI GPT Bot',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    '# Common Crawl Bot',
    'User-agent: CCBot',
    'Allow: /',
    '',
    '# Anthropic AI (Claude)',
    'User-agent: anthropic-ai',
    'Allow: /',
    '',
    '# Claude Bot',
    'User-agent: Claude-Web',
    'Allow: /',
    '',
    '# Perplexity AI',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    '# Google Extended (for AI training)',
    'User-agent: Google-Extended',
    'Allow: /',
    '',
    '# Sitemaps',
    'Sitemap: https://www.fractionaldemand.com/sitemap.xml',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain' },
  });
}


