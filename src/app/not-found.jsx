"use client";

import { WarningDiamond } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <WarningDiamond size={72} className="text-color-accent" />
        <h1 className="text-color-accent text-3xl mb-3">Not Found</h1>
        <button
          onClick={() => router.back()}
          className="text-color-primary hover:text-color-accent transition-all"
        >
          Back to Page
        </button>
      </div>
    </div>
  );
}
