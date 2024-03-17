"use client";

import React from "react";
import { userNameSessionStorageKey } from "@/hook/useHomeInputForm";
import Link from "next/link";

const Header = () => {
  const removeSessionStorage = () => {
    const userName = sessionStorage.getItem(userNameSessionStorageKey);
    sessionStorage.removeItem(userName!);
    sessionStorage.removeItem(userNameSessionStorageKey);
  };
  return (
    <header className="text-center text-4xl font-bold my-4">
      <Link href={"/"} onClick={removeSessionStorage}>
        MapleStory Information
      </Link>
    </header>
  );
};

export default Header;
