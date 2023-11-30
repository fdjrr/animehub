"use client";

import { useState } from "react";

function ButtonCollection({ mal_id }) {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (e) => {
    e.preventDefault();

    const data = { mal_id };

    const req = await fetch("/api/v1/collections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const collection = await req.json();

    if (req.ok) {
      setIsCreated(true);
    }
  };

  return isCreated ? (
    ""
  ) : (
    <button
      onClick={handleCollection}
      className="px-2 py-1 bg-color-accent text-color-secondary rounded"
    >
      Save to Collection
    </button>
  );
}

export default ButtonCollection;
