import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prisma";

export const authUserSession = async () => {
  const data = await getServerSession(authOptions);

  if (data?.user) {
    const findOrCreateUser = await prisma.users.upsert({
      where: {
        email: data.user.email,
      },
      update: {
        name: data.user.name,
        avatar: data.user.avatar,
      },
      create: {
        name: data.user.name,
        email: data.user.email,
        avatar: data.user.image,
      },
    });
  }

  return data?.user;
};
