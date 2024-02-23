"use server";

import { Liveblocks } from "@liveblocks/node";
import { prisma } from "@/lib/prisma";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_TgtzSx0OXV0uJtPl-bMKDiCOvpTdQPwKkp_8wXhzUNBpRSq25rCytax6mk1ozH7J",
});

export async function POST(request: Request) {
  // Get the current user from your database
  const user = await prisma?.user.findUnique({
    where: { id: 3 },
  });

  console.log("REQUEST", await request.json());

  // Identify the user and return the result

  const { status, body } = await liveblocks.identifyUser({
    userId: user?.id.toString(),
  });
  return new Response(body, { status });
}
