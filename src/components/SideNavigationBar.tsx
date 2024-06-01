import React, { useEffect, useRef } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const SideNavigationBar = ({
  sideNavigationBar,
  setNavigationBar,
}: {
  sideNavigationBar: true;
  setNavigationBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const mouseClickCheckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (
        sideNavigationBar &&
        mouseClickCheckRef.current &&
        !mouseClickCheckRef.current.contains(e.target as Node)
      ) {
        setNavigationBar(false);
      }
    });
  }, [sideNavigationBar, setNavigationBar]);

  return (
    <div
      ref={mouseClickCheckRef}
      className="absolute right-0 top-0 z-10 w-72 h-full bg-gray-50 animate-side"
    >
      <ThemeSwitcher />
    </div>
  );
};

export default SideNavigationBar;
