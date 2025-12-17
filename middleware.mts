import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { hostname } = new URL(request.url);
  
  if (hostname.includes('vercel.app')) {
    return NextResponse.redirect(`https://banyahouse.com${request.nextUrl.pathname}`, 301);
  }
  
  if (hostname.startsWith('www.')) {
    return NextResponse.redirect(`https://banyahouse.com${request.nextUrl.pathname}`, 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};