import React, { useCallback, useEffect, useRef, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import { IoExitOutline } from "react-icons/io5";

const SideNavigationBar = ({
  sideNavigationBar,
  setNavigationBar,
}: {
  sideNavigationBar: boolean;
  setNavigationBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [animationCheck, setAnimationCheck] = useState(false);
  const mouseClickCheckRef = useRef<HTMLDivElement>(null);

  const sidebarOffHandler = useCallback(() => {
    setAnimationCheck(true);
    setTimeout(() => {
      setAnimationCheck(false);
      setNavigationBar(false);
    }, 750);
  }, [setNavigationBar]);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (
        sideNavigationBar &&
        mouseClickCheckRef.current &&
        !mouseClickCheckRef.current.contains(e.target as Node)
      ) {
        sidebarOffHandler();
      }
    });
  }, [sideNavigationBar, sidebarOffHandler]);

  return (
    <nav
      ref={mouseClickCheckRef}
      className={`absolute right-0 top-0 z-10 w-72 h-96 bg-primary-50 ${
        sideNavigationBar && !animationCheck && "animate-sideOn"
      } ${sideNavigationBar && animationCheck && "animate-sideOff"}`}
    >
      <ol className="flex flex-col items-start gap-4 m-2 text-2xl font-medium">
        <Link href={"/login"} className="w-full">
          <ol className="bg-default-50">로그인</ol>
        </Link>
        <Link href={"/create_account"} className="w-full">
          <ol className="bg-default-50">회원가입</ol>
        </Link>
      </ol>
      <div className="absolute bottom-0 right-1 flex justify-between w-[96%]">
        <IoExitOutline onClick={sidebarOffHandler} className="cursor-pointer" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default SideNavigationBar;
