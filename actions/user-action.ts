"use server";

import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs";
import { cookies } from "next/headers";

export async function createUser(emailAddress: string, firstName: string) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: emailAddress },
    });

    if (existingUser) {
      cookies().set("user", JSON.stringify(existingUser), { secure: true });
      // console.log("Existing user:", existingUser);
      // console.log("Cookie set for existing user:", cookies().get("user"));
      return existingUser;
    }

    let user: Prisma.UserCreateInput;

    user = {
      username: firstName,
      email: emailAddress,
    };

    const newUser = await prisma.user.create({
      data: user,
    });
    console.log("New user created:", newUser);

    cookies().set("user", JSON.stringify(newUser), { secure: true });
    // console.log("Cookie set for new user:", cookies().get("user"));

    return newUser;
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
