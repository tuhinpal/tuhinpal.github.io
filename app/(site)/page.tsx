import type { Metadata } from "next";

import Hero from "./components/Hero";
import Works from "./components/Works";

export const metadata: Metadata = {
  title: "tuhin - I build great products",
  description:
    "I am a full-stack engineer from India with a focus on web technology.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <Works />
    </div>
  );
}
