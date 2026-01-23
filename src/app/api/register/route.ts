import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Registration from "../../../models/Registration";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { college, member1, member2, member3, event, email } = body;

    if (!college || !member1 || !event || !email) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    const registration = new Registration({
      college,
      members: [member1, member2, member3].filter(Boolean),
      event,
      email
    });

    await registration.save();

    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
