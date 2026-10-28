import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Purge any previously poisoned immutable dev chunk cache once per browser session in dev
  if (process.env.NODE_ENV === 'development' && !request.cookies.get('rhm_cache_v5')) {
    response.headers.set('Clear-Site-Data', '"cache"');
    response.cookies.set('rhm_cache_v5', '1', {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'none',
      secure: true,
    });
  }

  // Add cache control for images
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Add compression hint
  response.headers.set('Vary', 'Accept-Encoding');

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
