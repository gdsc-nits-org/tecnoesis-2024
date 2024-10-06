"use client";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import FinalFooter from "~/components/FinalFooter";


export const runtime = "edge";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const matches = useMediaQuery("(max-width: 1024px)")
  return (
    <main className="min-h-[100vh]">
      <div className="min-h-[50vh] bg-yellow-500 w-full">hello</div>
      <FinalFooter />
    </main>
  );
}
