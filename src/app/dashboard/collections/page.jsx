import HeaderCollection from "@/components/HeaderCollection";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();

  const data = await prisma.users.findFirst({
    where: {
      email: user?.email,
    },
    include: {
      collections: true,
    },
  });

  return (
    <div className="mt-4 px-4 w-full">
      <HeaderCollection title="My Collection" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {data.collections.map((collection, index) => {
          return (
            <Link
              href={`/anime/${collection.mal_id}`}
              className="relative border-2 border-color-accent"
              key={index}
            >
              <Image
                src=""
                alt="..."
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                <h5 className="text-xl text-center">Judul Anime</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
