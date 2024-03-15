import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-center text-4xl font-bold my-4">
      <Link href={"/"}>MapleStory Information</Link>
    </header>
  );
};

export default Header;
