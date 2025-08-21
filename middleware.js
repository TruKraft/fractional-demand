// Minimal password gate for Vercel Edge
import { NextResponse } from 'next/server';

export function middleware(req) {
  try {
    const sitePassword = process.env.SITE_PASSWORD;
    if (!sitePassword) return NextResponse.next();

    const { pathname, search } = req.nextUrl;

    // Allow static, api, auth, and root assets
    const PUBLIC_PREFIXES = ['/_next', '/assets', '/public', '/api', '/auth'];
    const PUBLIC_EXACT = new Set(['/robots.txt', '/sitemap.xml', '/favicon.ico', '/favicon.png']);
    if (PUBLIC_EXACT.has(pathname) || PUBLIC_PREFIXES.some((p) => pathname.startsWith(p))) {
      return NextResponse.next();
    }

    if (req.cookies.get('site_protected')?.value === '1') return NextResponse.next();

    const nextParam = encodeURIComponent(`${pathname}${search || ''}`);
    return NextResponse.redirect(new URL(`/auth?next=${nextParam}`, req.url));
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!_next/|assets/|public/|robots.txt|sitemap.xml|favicon.ico|favicon.png|auth|api/).*)'],
};


