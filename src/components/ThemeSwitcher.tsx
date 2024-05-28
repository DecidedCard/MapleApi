"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="ml-72">
      <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
        {`${theme == "light" ? "Dark" : "Light"} mode`}
      </button>
    </div>
  );
}
