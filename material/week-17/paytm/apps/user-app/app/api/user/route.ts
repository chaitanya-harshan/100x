import prisma from "@repo/db/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

export const GET = async () => {
  const session = await getServerSession(authOptions);
  if (session && session.user) {
    return NextResponse.json({ user: session.user });
  }
  else {
    return NextResponse.redirect(new URL("/api/auth/signin", process.env.NEXTAUTH_URL || "http://localhost:3001"));
  }

  return NextResponse.json({ message: "No user logged in" }, { status: 403 });

  // await prisma.user.create({
  //   data: {
  //     email: "chaitanyaharshan.official@gmail.com",
  //     name: "Chaitanya Harshan",
  //     number: "9876543210",
  //     password: "elon+baby+eat=A=MARS~rock",
  //   },
  // });
  // return NextResponse.json({ message: "User created" });
};
