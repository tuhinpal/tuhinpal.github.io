import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Montserrat({ subsets: ["latin"] });

const title = "tuhin - I build web products";
const description =
  "I am a full-stack engineer from India with a focus on web technology.";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ||
      process.env.VERCEL_URL ||
      `http://localhost:${process.env.PORT || 3000}`
  ),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        sizes: "16x16",
        url: "/images/icons/16.png",
      },
      {
        sizes: "32x32",
        url: "/images/icons/32.png",
      },
      {
        sizes: "192x192",
        url: "/images/icons/192.png",
      },
      {
        sizes: "512x512",
        url: "/images/icons/512.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    title,
    description,
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(title)}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} flex justify-center`}>
        <div className="w-full max-w-7xl px-6">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
