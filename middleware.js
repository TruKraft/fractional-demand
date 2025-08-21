// Minimal password gate for Vercel Edge
import { NextResponse } from 'next/server';

export function middleware(req) {
  try {
    const sitePassword = process.env.SITE_PASSWORD;
    if (!sitePassword) return NextResponse.next();

    const { pathname, search } = req.nextUrl;

    // Public routes: static, api, auth, and root assets
    const isPublic = (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/assets') ||
      pathname.startsWith('/public') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/auth') ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml' ||
      pathname === '/favicon.ico' ||
      pathname === '/favicon.png'
    );
    if (isPublic) return NextResponse.next();

    // Already authenticated
    if (req.cookies.get('site_protected')?.value === '1') {
      return NextResponse.next();
    }

    const nextParam = encodeURIComponent(`${pathname}${search || ''}`);
    return NextResponse.redirect(new URL(`/auth?next=${nextParam}`, req.url));
  } catch {
    // Fail-open: never crash the edge handler
    return NextResponse.next();
  }
}

// Strict matcher to avoid touching static/auth/api
export const config = {
  matcher: [
    '/((?!_next/|assets/|public/|robots.txt|sitemap.xml|favicon.ico|favicon.png|auth|api/).*)',
  ],
};

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


