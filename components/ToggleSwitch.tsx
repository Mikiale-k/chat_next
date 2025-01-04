"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ToggleSwitch() {
  const [selected, setSelected] = useState("Personal");
  const router = useRouter();

  // Function to handle label click (Personal or Business)
  const handleToggle = (newSelection: string) => {
    setSelected(newSelection);
    router.replace(`/${newSelection.toLowerCase()}`);
  };

  return (
    <div>
      <div className="flex items-center justify-center w-40 h-10 bg-zinc-700 rounded-full">
        <span
          className={`w-1/2 text-center text-sm font-medium ${
            selected === "Personal"
              ? "text-white bg-customGray p-1.5 m-1 rounded-full"
              : "text-gray-300"
          }`}
          onClick={() => handleToggle("Personal")}
        >
          Personal
        </span>

        <span
          className={`w-1/2 text-center text-sm font-medium ${
            selected === "Business"
              ? "text-white bg-customGray p-1.5 m-1 rounded-full"
              : "text-gray-300"
          }`}
          onClick={() => handleToggle("Business")}
        >
          Business
        </span>
      </div>
    </div>
  );
}
