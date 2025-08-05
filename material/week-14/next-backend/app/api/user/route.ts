import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from '../../generated/prisma'

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    const user =await client.user.create({
      data: { username, password },
    });
    console.log("\n\n\n", user, "\n\n\n");
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );

  } catch (err: any) {
    console.error("🚨 Prisma error:", err.message);
    return NextResponse.json({ error: err.message || "Something went wrong" }, { status: 500 });
  }
}


