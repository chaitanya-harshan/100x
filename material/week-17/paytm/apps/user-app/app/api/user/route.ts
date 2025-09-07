import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  await prisma.user.create({
    data: {
      email: "chaitanyareigns98@gmail.com",
      name: "Chaitanya",
    },
  });

  return NextResponse.json({ message: "User created" });
};
