"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      className="flex justify-evenly items-center rounded-2xl overflow-hidden ease-in-out duration-300"
    >
      <div
        className={`w-14 h-10 flex justify-center items-center ${
          theme == "light"
            ? "bg-slate-600 text-gray-300"
            : "bg-gray-300 text-gray-700"
        }`}
      >
        <FaMoon className="w-10 h-6" />
      </div>
      <div
        className={`w-14 h-10 flex justify-center items-center ${
          theme == "light"
            ? "bg-gray-300 text-gray-700"
            : "bg-white text-black "
        }`}
      >
        <IoSunnyOutline className=" w-10 h-8" />
      </div>
    </button>
  );
}
