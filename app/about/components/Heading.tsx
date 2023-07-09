"use client";

import Image from "next/image";

export default function AboutHeading() {
  return (
    <div className="max-w-4xl flex flex-wrap gap-y-10 items-center py-20 justify-center md:justify-between">
      <div className="w-full flex justify-center items-center md:w-5/12">
        <Image
          src={"/images/me-square.jpeg"}
          alt={"Tuhin Photo"}
          width={500}
          height={500}
          className="rounded-[48px] max-w-full"
        />
      </div>

      <h1 className="font-semibold text-4xl w-full md:w-7/12 pl-0 md:pl-12 leading-[45px] text-center md:text-left">
        Hello, I'm Tuhin Kanti Pal. I create products for the web. Currently
        working as{" "}
        <span className="text-red-500 font-bold">Technical Lead</span> at{" "}
        <a
          href="https://visadb.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-bold"
        >
          Visadb.io
        </a>{" "}
        and{" "}
        <a
          href="https://ddevi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 font-bold"
        >
          Devi AI
        </a>
        .
      </h1>
    </div>
  );
}
