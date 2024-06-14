"use client";

import React, { useState } from "react";

import Link from "next/link";

import { GoSidebarExpand } from "react-icons/go";

import SideNavigationBar from "./SideNavigationBar";

import { SESSIONSTORAGE_KEY } from "@/util/sessionStorrageKey";

const Header = () => {
  const [sideNavigationBar, setNavigationBar] = useState(false);

  const removeSessionStorage = () => {
    const userName = sessionStorage.getItem(SESSIONSTORAGE_KEY.userName);
    sessionStorage.removeItem(userName!);
    sessionStorage.removeItem(SESSIONSTORAGE_KEY.userName);
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
      {sideNavigationBar && (
        <SideNavigationBar
          sideNavigationBar={sideNavigationBar}
          setNavigationBar={setNavigationBar}
        />
      )}
    </header>
  );
};

export default Header;
