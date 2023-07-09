"use client";

import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <header className="flex flex-row justify-between items-center w-full py-5 px-10 mt-7 mb-14 bg-neutral-100 rounded-[33px]">
      <div className="flex items-center gap-1">
        <Logo width={120} height={30} className="text-stone-600" />

        <p className="ml-3 text-sm text-stone-600">
          © {new Date().getFullYear()}
        </p>
      </div>

      <SocialMedia
        className="gap-3"
        buttonStyle={{
          padding: "0.5rem",
          backgroundColor: "transparent",
          color: "#57534e",
        }}
        iconStyle={{ width: "1.5rem", height: "1.5rem" }}
      />
    </header>
  );
}
