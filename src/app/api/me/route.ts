import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET || "0hmyg00dn3ss/!!33";

export async function GET(request: Request) {
    try{
        
        const token = request.headers.get("cookie")
            ?.split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1];




        if (!token) {
            return NextResponse.json({ message: "Token tidak ditemukan" }, { status: 401 });
        }


        let decoded: any;
        try {
            decoded = jwt.verify(token, SECRET_KEY);
        } catch (err) {
            return NextResponse.json({ message: "Token tidak valid atau kadaluarsa" }, { status: 401 });
        }

 
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, email: true, username: true },
        });

        if (!user) {
            return NextResponse.json({ message: "User tidak ditemukan" }, { status: 404 });
        }

        return NextResponse.json({ user });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}