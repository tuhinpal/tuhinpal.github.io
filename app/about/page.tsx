import type { Metadata } from "next";

import AboutDetails from "./components/Details";
import AboutHeading from "./components/Heading";

const title = "about - tuhin";
const description =
  "I am a full-stack engineer from India with a focus on web technology.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
    // images: [
    //   {
    //     url: `/api/og?title=${encodeURIComponent(
    //       "Tuhin Kanti Pal is a full-stack engineer from India"
    //     )}`,
    //     width: 1200,
    //     height: 630,
    //     alt: title,
    //   },
    // ],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <AboutHeading />
      <AboutDetails />
    </div>
  );
}
