import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Redirect vercel.app domain to main domain
  if (hostname.includes('vercel.app')) {
    const url = request.nextUrl.clone();
    url.host = 'banyahouse.com';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }
  
  // redirect www to non-www
  if (hostname.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.host = hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};