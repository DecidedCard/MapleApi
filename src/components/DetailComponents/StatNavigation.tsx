import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const StatNavigation = () => {
  return (
    <Navbar position="static">
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href={"/detail/stat"}>상세 스탯</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href={"/detail/union"}>유니온</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"/detail/item"}>장착 장비</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href={"/detail/skill"}>스킬</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default StatNavigation;
