"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      const search = searchRef.current.value;

      if (search.trim().length > 0) {
        router.push(`/search/${search}`);
      }
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute end-2 top-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}
