import { authUserSession } from "@/libs/auth";
import Link from "next/link";

export default async function UserActionButton() {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between items-center gap-4">
      {user ? (
        <Link href="/dashboard" className="py-1">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionUrl}
        className="bg-color-dark text-color-accent p-2 rounded-lg text-sm"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
