import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const SideNavigationBar = () => {
  return (
    <div className="absolute right-0 top-0 z-10 w-72 h-full bg-gray-50">
      <ThemeSwitcher />
    </div>
  );
};

export default SideNavigationBar;
