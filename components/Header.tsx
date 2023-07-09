"use client";

import Button from "@/components/Button";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Anchor from "./Anchor";

export default function Header() {
  const pathname = usePathname();

  const isAboutPage = useMemo(() => pathname === "/about", [pathname]);

  return (
    <header className="flex flex-row justify-between items-center w-full py-8">
      <div className="items-center gap-3 hidden md:flex w-1/3">
        {isAboutPage ? (
          <Anchor className="text-lg" href={"/"}>
            Back to main
          </Anchor>
        ) : (
          <Anchor className="text-lg" href={"/about"}>
            About
          </Anchor>
        )}
      </div>

      <div className="w-1/3 flex justify-start md:justify-center">
        <Logo width={120} height={30} className="dark:filter dark:invert" />
      </div>

      <SocialMedia
        className="w-1/3 justify-end"
        buttonStyle={{ padding: "0.625rem" }}
        iconStyle={{ width: "1.25rem", height: "1.25rem" }}
      />
    </header>
  );
}
