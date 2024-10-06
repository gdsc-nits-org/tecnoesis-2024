<<<<<<< HEAD
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Login from "~/components/GoogleAuth";
import Landing from "~/components/Landing";
import Navbar from "~/components/LandingNav";
import Scene from "~/components/Scene";

const NavbarMobile = dynamic(() => import("~/components/LandingNavMobile"));

export const runtime = "edge";
interface NavigatorExtended extends Navigator {
  deviceMemory?: number | undefined;
}
export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const comingsoon = false;
  useEffect(() => {
    setIsClient(true);
  }, []);

  const matches = useMediaQuery("(max-width: 1024px)");

  if (!isClient) return null;
  const nav = navigator as NavigatorExtended;
  const isFirefox = navigator.userAgent.includes("Firefox");
  const isLowMemoryDevice = nav.deviceMemory! <= 4;
  const isAndroid = /Android/i.test(navigator.userAgent);
  if (comingsoon) {
    if (!isFirefox) {
      return (
        <main className="bg-black">
          <Navbar />
          {matches && <NavbarMobile />}
          <div className="h-screen">
            {isLowMemoryDevice && isAndroid ? (
              <div className="flex min-h-screen items-center justify-center text-[#ffffff]">
                <p>Low memory Android device detected</p>
              </div>
            ) : (
              <Scene />
            )}
            <Login />
          </div>
        </main>
      );
    } else {
      return (
        <main className="bg-black">
          <Navbar />
          {matches && <NavbarMobile />}
          <div className="flex h-screen items-center justify-center">
            <h1 className="text-[#ffffff]">
              Please have the mercy to use chromium based browsers
            </h1>
            <Login />
          </div>
        </main>
      );
    }
  } else {
    return (
      <div className="min-h-screen w-screen overflow-hidden bg-[url('/assets/Landing/stars-bg.avif')]">
        <Landing />
      </div>
    );
  }
=======
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
  return (
    <main className="bg-black">
      <Navbar />
      {isClient && matches && <NavbarMobile />}
      <div className="h-screen">
        <Scene />
      </div>
      {/* <Footer /> */}
    </main>
  );
>>>>>>> 4ed7492 (fix)
}