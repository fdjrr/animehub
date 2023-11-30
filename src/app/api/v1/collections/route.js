import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";

export async function POST(req) {
  const userSession = await authUserSession();

  const user = await prisma.users.findUnique({
    where: {
      email: userSession?.email,
    },
  });

  const { mal_id } = await req.json();

  const data = { user_id: user?.id, mal_id: String(mal_id) };

  try {
    const collection = await prisma.collections.create({
      data,
    });

    return Response.json({ collection }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
