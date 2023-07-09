import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tuhin - I build great products",
  description:
    "I am a full-stack engineer from India with a focus on web technology.",
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
