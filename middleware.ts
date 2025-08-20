import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Password-only protection using a cookie. Set SITE_PASSWORD in env.
export function middleware(req: NextRequest) {
  const sitePassword = process.env.SITE_PASSWORD;
  if (!sitePassword) return NextResponse.next();

  const { pathname, search } = req.nextUrl;

  const PUBLIC_PATHS = [
    '/favicon',
    '/robots.txt',
    '/sitemap.xml',
    '/_next',
    '/assets',
    '/public',
    '/api/health',
    '/api/auth',
    '/auth',
  ];
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const authCookie = req.cookies.get('site_protected')?.value;
  if (authCookie === '1') {
    return NextResponse.next();
  }

  const nextUrl = encodeURIComponent(pathname + search);
  const url = new URL(`/auth?next=${nextUrl}`, req.url);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: '/:path*',
};


