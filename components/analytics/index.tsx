"use client";

import Clarity from "./Clarity";

const ENABLED_ANALYTICS = process.env.NODE_ENV === "production";

export default function Analytics({ children }: { children: React.ReactNode }) {
  return ENABLED_ANALYTICS ? (
    <>
      {children}
      <Clarity />
    </>
  ) : (
    <>{children}</>
  );
}
