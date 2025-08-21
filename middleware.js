// Minimal, defensive middleware for password gating on Vercel Edge
import { NextResponse } from 'next/server';

export function middleware(req) {
  try {
    const sitePassword = process.env.SITE_PASSWORD;
    if (!sitePassword) return NextResponse.next();

    const { pathname, search } = req.nextUrl;

    // Broad allowlist: static, api, auth and root assets
    const PUBLIC_PREFIXES = [
      '/_next',
      '/assets',
      '/public',
      '/api',
      '/auth',
    ];
    const PUBLIC_EXACT = new Set([
      '/',
      '/favicon.ico',
      '/robots.txt',
      '/sitemap.xml',
      '/favicon.png',
    ]);

    if (PUBLIC_EXACT.has(pathname) || PUBLIC_PREFIXES.some((p) => pathname.startsWith(p))) {
      return NextResponse.next();
    }

    const authed = req.cookies.get('site_protected')?.value === '1';
    if (authed) return NextResponse.next();

    const nextParam = encodeURIComponent(`${pathname}${search || ''}`);
    return NextResponse.redirect(new URL(`/auth?next=${nextParam}`, req.url));
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  // Exclude common static and service routes from matching
  matcher: [
    '/((?!_next/|assets/|public/|robots.txt|sitemap.xml|favicon.ico|favicon.png|auth|api/).*)',
  ],
};


