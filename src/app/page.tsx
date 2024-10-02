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
  const [comingsoon,setComingsoon]=useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const matches = useMediaQuery("(max-width: 1024px)");

  if (!isClient) return null;
  const nav = navigator as NavigatorExtended;
  const isFirefox = navigator.userAgent.includes("Firefox");
  const isLowMemoryDevice = nav.deviceMemory! <= 4;
  const isAndroid = /Android/i.test(navigator.userAgent);
  if(comingsoon){
    if (!isFirefox) {
      return (
        <main className="bg-black">
          <Navbar />
          {matches && <NavbarMobile />}
          <div className="h-screen">
            {(isLowMemoryDevice && isAndroid) ? <div className="text-[#ffffff] flex items-center justify-center min-h-screen"><p>Low memory Android device detected</p></div> : <Scene />}
            <Login />
          </div>
        </main>
      );
    } else {
      return (
        <main className="bg-black">
          <Navbar />
          {matches && <NavbarMobile />}
          <div className="h-screen flex items-center justify-center">
            <h1 className="text-[#ffffff]">Please have the mercy to use chromium based browsers</h1>
            <Login />
        </div>


        </main>
      );
    }
  }
  else{
    return(
      <div className="bg-[url('https://res.cloudinary.com/dhry5xscm/image/upload/v1727624095/tecno-24/stars_cfwxhr.avif')] overflow-hidden w-[100vw]">
        <Landing/>
      </div>
    );
  }
}
