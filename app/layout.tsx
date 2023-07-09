import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tuhin - I create software experiences",
  description: "I create software experiences",
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
