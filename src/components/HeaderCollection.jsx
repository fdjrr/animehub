"use client";

import { ArrowArcLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function HeaderCollection({ title }) {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();

    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button className="text-color-primary" onClick={handleBack}>
        <ArrowArcLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-semibold">{title}</h3>
    </div>
  );
}
