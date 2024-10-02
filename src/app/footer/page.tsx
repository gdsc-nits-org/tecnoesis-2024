"use client";
import Navbar from "~/components/LandingNav";
import Scene from "~/components/Scene";
import { useMediaQuery } from "usehooks-ts";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import Footer from "~/components/Footer";

const NavbarMobile = dynamic(() => import("~/components/LandingNavMobile"))

export const runtime = "edge";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const matches = useMediaQuery("(max-width: 1024px)")
  return (
    <main className="bg-black">
      <Footer />
    </main>
  );
}
