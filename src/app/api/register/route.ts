import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB(); // runs ONLY at runtime

  const data = await req.json();
  const saved = await Registration.create(data);

  return NextResponse.json({ success: true, saved });
}
