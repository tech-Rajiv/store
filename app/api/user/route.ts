import { AUTH_OPTIONS } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: NextResponse) => {
  const session = await getServerSession(AUTH_OPTIONS);
  return NextResponse.json({ session });
};
