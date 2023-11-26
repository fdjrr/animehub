import { authUserSession } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();

  return (
    <div className="flex flex-col m-10 justify-center items-center text-color-primary">
      <Image
        src={user?.image}
        alt="..."
        width={150}
        height={150}
        className="rounded-full"
      />
      <h3 className="mt-3">{user?.name}</h3>
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/dashboard/collections"
          className="bg-color-accent text-color-dark hover:bg-color-dark hover:text-color-accent hover:border hover:border-color-accent transition-all px-3 py-2 rounded text-sm"
        >
          My Collection
        </Link>
        <Link
          href="/dashboard/comments"
          className="bg-color-accent text-color-dark hover:bg-color-dark hover:text-color-accent hover:border hover:border-color-accent transition-all  px-3 py-2 rounded text-sm"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
}
