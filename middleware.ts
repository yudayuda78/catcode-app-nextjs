import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET || "0hmyg00dn3ss/!!33"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value

  // kalau tidak ada token, redirect ke login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    jwt.verify(token, SECRET_KEY)
    // kalau token valid, biarkan lanjut
    return NextResponse.next()
  } catch (err) {
    // kalau token invalid / expired
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

// Tentukan path mana saja yang dilindungi
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // contoh: proteksi /dashboard dan /profile
}
