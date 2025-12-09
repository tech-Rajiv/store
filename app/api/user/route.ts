import { AUTH_OPTIONS } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: NextResponse) => {
  const data = await prisma.product.findMany({});
  const session = await getServerSession(AUTH_OPTIONS);
  return NextResponse.json({ session, data });
};
