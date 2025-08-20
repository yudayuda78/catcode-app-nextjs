import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, username } = body

    // validasi input
    if (!email || !password || !username) {
      return NextResponse.json(
        { message: "Email, username, dan password wajib diisi" },
        { status: 400 }
      )
    }

    // cek apakah email sudah ada
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: "Email sudah terdaftar" },
        { status: 400 }
      )
    }

    // cek apakah username sudah ada
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    })

    if (existingUsername) {
      return NextResponse.json(
        { message: "Username sudah dipakai" },
        { status: 400 }
      )
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // simpan user ke DB
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      { 
        message: "Register berhasil", 
        user: { id: user.id, email: user.email, username: user.username } 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Register error:", error)
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}
