import Hero from "./components/Hero";
import Works from "./components/Works";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <Works />
    </div>
  );
}
