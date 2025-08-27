import { NextResponse } from "next/server"


export async function POST() {
    try{
        const res = NextResponse.json({message: "Logout sukses"})
        res.cookies.set("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        expires: new Date(0),
    })

    return res
    }catch(error){
        console.error("Error logging out:", error)
        return NextResponse.json({error: "Logout Failed"}, {status: 500})
    }
}