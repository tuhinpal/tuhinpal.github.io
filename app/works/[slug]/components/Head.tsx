"use client";

import Image from "next/image";

import Anchor from "@/components/Anchor";
import { WorkContentData } from "../getData";

export default function WorkHead({ data }: { data: WorkContentData }) {
  return (
    <div className="flex flex-col py-10 max-w-2xl gap-4">
      <h1 className="font-semibold text-center text-[30px] md:text-[40px] leading-tight">
        “{data.slogan}”
      </h1>

      <p className="text-center text-gray-600 text-sm mt-2">
        {data.description}
      </p>

      <div className="flex flex-wrap gap-4 items-center justify-between p-5 bg-zinc-100 mt-8 rounded-3xl">
        <div className="flex items-center gap-4">
          <Image
            src={data.logo}
            alt={data.name}
            width={60}
            height={60}
            className="rounded-2xl"
          />

          <div>
            <p className="font-bold text-xl">{data.name}</p>

            <p className="text-sm text-zinc-700">{data.role}</p>
          </div>
        </div>

        <Anchor
          href={data.website}
          className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 hover:rounded-full"
          target="_blank"
        >
          Visit site
        </Anchor>
      </div>
    </div>
  );
}
