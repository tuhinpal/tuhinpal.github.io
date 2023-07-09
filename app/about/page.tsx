"use client";

import AboutDetails from "./components/Details";
import AboutHeading from "./components/Heading";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <AboutHeading />
      <AboutDetails />
    </div>
  );
}
