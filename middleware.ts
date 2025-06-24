import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
const locales = ['en', 'pt']
 
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  return acceptLanguage?.split(',')[0].split('-')[0] || 'en'
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip middleware for static files and api routes
  if (
    pathname.includes('.') || // static files
    pathname.startsWith('/api/') // api routes
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Get the preferred locale
  const locale = getLocale(request)
  
  // Redirect if locale is pt-BR
  if (locale === 'pt') {
    return NextResponse.redirect(
      new URL(`/pt${pathname}`, request.url)
    )
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: Skip static files
    // '/((?!_next|.*\\..*).*)',
  ],
}