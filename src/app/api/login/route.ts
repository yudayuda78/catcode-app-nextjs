import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"


const SECRET_KEY = process.env.JWT_SECRET || "0hmyg00dn3ss/!!33";


export async function POST(request: Request) {
    try{
        const body = await request.json()
        const { email, password } = body
        if(!email || ! password){
            return NextResponse.json({message: "Email dan password wajib diisi"}, {status: 400})
        }

        const user = await prisma.user.findUnique({ where:  {email : email} })
        if (!user) {
            return NextResponse.json({ message: "User tidak ditemukan" }, { status: 401 })
        }

        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
            return NextResponse.json({ message: "Password salah" }, { status: 401 })
        }

        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" })
        const res = NextResponse.json({ message: "Login sukses" })
        res.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        })

        return res
    }catch(error){
        console.error("Login error:", error);
        return NextResponse.json({ error: "Login failed" }, { status: 500 });
    }
}