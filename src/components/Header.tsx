"use client";

import React, { useState } from "react";
import Link from "next/link";

import { userNameSessionStorageKey } from "@/hook/useHomeInputForm";

import { GoSidebarExpand } from "react-icons/go";
import SideNavigationBar from "./SideNavigationBar";

const Header = () => {
  const [sideNavigationBar, setNavigationBar] = useState(false);

  const removeSessionStorage = () => {
    const userName = sessionStorage.getItem(userNameSessionStorageKey);
    sessionStorage.removeItem(userName!);
    sessionStorage.removeItem(userNameSessionStorageKey);
  };

  const onClickSideNavigationBarToggle = () => {
    setNavigationBar(!sideNavigationBar);
  };

  return (
    <header className="flex justify-between text-center text-3xl font-bold my-4 mx-2">
      <Link href={"/"} onClick={removeSessionStorage}>
        MapleStory Information
      </Link>
      <GoSidebarExpand
        onClick={onClickSideNavigationBarToggle}
        className="cursor-pointer"
      />
      {sideNavigationBar && <SideNavigationBar />}
    </header>
  );
};

export default Header;
