import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const courses = await prisma.course.findMany();
  return new Response(JSON.stringify(courses));
}
