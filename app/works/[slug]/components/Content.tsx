"use client";

import RenderMarkdown from "@/components/Markdown";
import { WorkContentData } from "../getData";

export function WorkContent({
  data,
  content,
}: {
  data: WorkContentData;
  content: string;
}) {
  return (
    <div className="flex flex-col py-10 max-w-3xl gap-4">
      {/* What I Did? */}
      <div className="w-full bg-zinc-100 rounded-3xl py-6 px-8">
        <h2 className="font-bold text-left text-2xl">What I did?</h2>

        <ul className="list-disc pl-5 mt-6">
          {data.tldr.map((item) => (
            <li
              key={item}
              className="font-medium mb-1.5 text-gray-700 font-sans"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Markdown content */}
      <RenderMarkdown content={content} className="mt-8" />
    </div>
  );
}
