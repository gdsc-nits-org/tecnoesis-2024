"use client";
import Navbar from "~/components/LandingNav";
import Scene from "~/components/Scene";
import { useMediaQuery } from "usehooks-ts";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

const NavbarMobile = dynamic(() => import("~/components/LandingNavMobile"))

export const runtime = "edge";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const matches = useMediaQuery("(max-width: 1024px)")
  let browser=/Mozilla/i;
  let isBrowserMozilla=browser.test(navigator.userAgent);
  console.log(isBrowserMozilla);
  if(!isBrowserMozilla){
    return (
      <main className="bg-black">
        <Navbar />
        {isClient && matches && <NavbarMobile />}
        <div className="h-screen">
          {
            navigator.deviceMemory<=2 && !(/Android/i.test(navigator.userAgent))?
              <h1>Android</h1>:<Scene />
          }
          {/* <Scene /> */}
        </div>
        {/* <Footer /> */}
      </main>
    );
  }
  else{
    return (
      <main className="bg-black">
        <Navbar />
        {isClient && matches && <NavbarMobile />}
        <div className="h-screen">
          {/* <Scene /> */}
        </div>
        {/* <Footer /> */}
      </main>
    );
  }
}
