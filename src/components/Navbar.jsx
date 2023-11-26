import Link from "next/link";
import InputSearch from "@/components/InputSearch";
import UserActionButton from "@/components/UserActionButton";

export default function Navbar() {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-3">
        <Link href="/" className="font-semibold text-2xl">
          AnimeHub
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
}
