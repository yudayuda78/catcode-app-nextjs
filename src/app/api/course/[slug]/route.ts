import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

interface Params {
  params: { slug: string }
}

export async function GET(request: Request, { params }: Params) {
    const {slug} = params
    const course = await prisma.course.findUnique({
        where: { slug },
        include: {
        topics: {
            include: {
            lessons: true,
            tests: true,
            }
        }
        }
    });

    if (!course) {
        return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(course);
}