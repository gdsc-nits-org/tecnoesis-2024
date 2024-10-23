"use client";
import { useEffect, useState } from "react";
import Landing from "~/components/Landing";

export const runtime = "edge";
export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-[url('/assets/Landing/stars-bg.avif')]">
      <Landing />
    </div>
  );
}
