import Link from "next/link";
import React from "react";

const StatNavigation = () => {
  return (
    <nav>
      <li>
        <Link href={"/detail/stat"}>상세 스탯</Link>
      </li>
      <li>
        <Link href={"/detail/union"}>유니온</Link>
      </li>
      <li>
        <Link href={"/detail/item"}>장착 장비</Link>
      </li>
      <li>
        <Link href={"/detail/skill"}>스킬</Link>
      </li>
    </nav>
  );
};

export default StatNavigation;
