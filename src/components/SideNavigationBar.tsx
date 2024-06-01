import React, { useEffect, useRef, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const SideNavigationBar = ({
  sideNavigationBar,
  setNavigationBar,
}: {
  sideNavigationBar: boolean;
  setNavigationBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [animationCheck, setAnimationCheck] = useState(false);
  const mouseClickCheckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (
        sideNavigationBar &&
        mouseClickCheckRef.current &&
        !mouseClickCheckRef.current.contains(e.target as Node)
      ) {
        setAnimationCheck(true);
        setTimeout(() => {
          setAnimationCheck(false);
          setNavigationBar(false);
        }, 750);
      }
    });
  }, [sideNavigationBar, setNavigationBar]);

  return (
    <nav
      ref={mouseClickCheckRef}
      className={`absolute right-0 top-0 z-10 w-72 h-full bg-primary-100 ${
        sideNavigationBar && !animationCheck && "animate-sideOn"
      } ${sideNavigationBar && animationCheck && "animate-sideOff"}`}
    >
      <ol className="flex flex-col items-start gap-4 m-2 text-2xl font-medium">
        <ol>로그인</ol>
        <ol>회원가입</ol>
      </ol>
      <ThemeSwitcher />
    </nav>
  );
};

export default SideNavigationBar;
