import prisma from "@repo/db/client";
import { NextResponse } from "next/server";
// import { useBalance } from "@repo/store/useBalance";

export const GET = async () => {
  // const balance = useBalance()

  await prisma.user.create({
    data: {
      email: "chaitanyaharshan.official@gmail.com",
      name: "Chaitanya Harshan",
    },
  });

  return NextResponse.json({ message: "User created" });
};
