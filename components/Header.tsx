"use client";

import Button from "@/components/Button";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full py-8">
      <div className="items-center gap-3 hidden md:flex">
        <Button className="text-lg">About</Button>
      </div>

      <div>
        <Logo width={120} height={30} className="dark:filter dark:invert" />
      </div>

      <SocialMedia
        buttonStyle={{ padding: "0.625rem" }}
        iconStyle={{ width: "1.25rem", height: "1.25rem" }}
      />
    </header>
  );
}
