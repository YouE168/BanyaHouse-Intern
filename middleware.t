import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if accessing admin routes (except login page)
  if (path.startsWith('/admin') && !path.startsWith('/admin/login')) {
    const session = request.cookies.get('admin-session');

    // If no session, redirect to login
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};