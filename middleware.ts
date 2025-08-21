import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Password-only protection using a cookie. Set SITE_PASSWORD in env.
export function middleware(req: NextRequest) {
  try {
    const sitePassword = process.env.SITE_PASSWORD;
    if (!sitePassword) return NextResponse.next();

    const { pathname, search } = req.nextUrl;

    // Allow common public paths and all API routes through
    const PUBLIC_PATHS = [
      '/favicon',
      '/favicon.ico',
      '/robots.txt',
      '/sitemap.xml',
      '/_next',
      '/assets',
      '/public',
      '/api',
      '/auth',
    ];
    if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
      return NextResponse.next();
    }

    const authCookie = req.cookies.get('site_protected')?.value;
    if (authCookie === '1') {
      return NextResponse.next();
    }

    const nextUrlEncoded = encodeURIComponent(`${pathname}${search || ''}`);
    const redirectUrl = new URL(`/auth?next=${nextUrlEncoded}`, req.url);
    return NextResponse.redirect(redirectUrl);
  } catch (_err) {
    // If anything goes wrong in middleware, do not block the request
    return NextResponse.next();
  }
}

// Exclude static assets and auth route at the matcher level for extra safety
export const config = {
  matcher: [
    '/((?!_next/|assets/|public/|robots.txt|sitemap.xml|favicon.ico|auth|api/).*)',
  ],
};


