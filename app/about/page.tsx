import type { Metadata } from "next";

import AboutDetails from "./components/Details";
import AboutHeading from "./components/Heading";

export const metadata: Metadata = {
  title: "about - tuhin",
  description:
    "I am a full-stack engineer from India with a focus on web technology.",
};

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <AboutHeading />
      <AboutDetails />
    </div>
  );
}
