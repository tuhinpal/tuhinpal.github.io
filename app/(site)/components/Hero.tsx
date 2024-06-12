"use client";

import Anchor from "@/components/Anchor";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center mt-16 md:mt-24 w-full md:w-max flex-wrap">
      <div>
        <Image
          src="/images/me-square.jpeg"
          alt="Tuhin"
          width={85}
          height={85}
          className="rounded-3xl"
        />
      </div>

      <h1
        className="flex flex-col text-[30px] md:text-[40px] leading-tight"
        style={{
          fontWeight: 700,
        }}
      >
        <span> Hi, I&apos;m Tuhin -</span>
        <span>I build web products.</span>
      </h1>

      <div className="w-full">
        <Anchor href="/about" aria-label="About Page" className="py-2.5 text-lg">
          About Me
        </Anchor>
      </div>
    </div>
  );
}
