"use client";
import Login from "~/components/GoogleAuth";
import Landing from "~/components/Landing";
import Navbar from "~/components/LandingNav";
import Scene from "~/components/Scene";
import { useMediaQuery } from "usehooks-ts";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import LandingFooter from "~/components/LandingFooter";

const NavbarMobile = dynamic(() => import("~/components/LandingNavMobile"));

export const runtime = "edge";
interface NavigatorExtended extends Navigator {
  deviceMemory?: number | undefined;
}
export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const comingsoon = false;
  useEffect(() => {
    setIsClient(true)
  }, [])
  const matches = useMediaQuery("(max-width: 1024px)")
  return (
<main className="bg-black min-h-screen flex flex-col">
  <Navbar />
  {isClient && matches && <NavbarMobile />}
  <div className="flex-grow">
    <Scene />
  </div>
  {/* <Footer /> */}
</main>
  );
}