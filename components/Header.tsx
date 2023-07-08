"use client";

import { ImLinkedin, ImGithub } from "react-icons/im";
import Image from "next/image";

import Button from "@/components/Button";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full py-4">
      <div className="items-center gap-3 hidden md:flex">
        <Button>About</Button>
      </div>

      <div>
        <Image
          src="/images/logo.svg"
          alt="tuhin logo"
          width={120}
          height={30}
          className="dark:filter dark:invert"
        />
      </div>

      <div className="flex items-center gap-3">
        <Button className="p-2.5">
          <ImLinkedin className="w-4 h-4" />
        </Button>

        <Button className="p-2.5">
          <ImGithub className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}
