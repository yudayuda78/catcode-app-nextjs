import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'secret_key_default')
const PUBLIC_PATHS = ['/login', '/register']



async function verifyJWT(token: string) {
  try {
    return await jwtVerify(token, SECRET_KEY)
  } catch (err) {
    return null
  }
}

export async function middleware(request: NextRequest) {
  console.log("URL:", request.url)
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  if (token) {
    const decoded = await verifyJWT(token)

    if (decoded && PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  if (!token) {
    if (!token && /^\/course(\/.*)?$/.test(pathname)) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/login/:path*', '/register/:path*', '/course', '/course/:path*'],
}
