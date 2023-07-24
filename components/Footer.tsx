"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import Anchor from "./Anchor";

export default function Footer() {
  const pathname = usePathname();

  const isAboutPage = useMemo(() => pathname === "/about", [pathname]);

  return (
    <footer className="flex flex-wrap justify-center gap-2 sm:justify-between items-center w-full py-5 px-10 mt-7 mb-14 bg-neutral-100 rounded-[33px]">
      <div className="flex items-center gap-1">
        <Anchor
          href="/"
          className="p-0 hover:bg-transparent bg-transparent outline-none"
          aria-label="Home Page"
        >
          <Logo width={120} height={30} className="text-stone-600" />
        </Anchor>

        <p className="ml-3 text-sm text-stone-600 hidden md:block">
          © {new Date().getFullYear()}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {!isAboutPage ? (
          <Anchor
            href="/about"
            className="text-stone-600"
            aria-label="About Page"
          >
            About me
          </Anchor>
        ) : (
          <Anchor href="/" className="text-stone-600" aria-label="Home Page">
            Home
          </Anchor>
        )}

        <SocialMedia
          className="gap-3"
          buttonStyle={{
            padding: "0.5rem",
            backgroundColor: "transparent",
            color: "#57534e",
          }}
          iconStyle={{ width: "1.5rem", height: "1.5rem" }}
        />
      </div>
    </footer>
  );
}
