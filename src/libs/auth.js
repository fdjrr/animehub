import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const authUserSession = async () => {
  const user = await getServerSession(authOptions);
  return user?.user;
};
