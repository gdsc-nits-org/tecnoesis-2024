"use client";
import Image from "next/image";
import { useEffect } from "react";

const Download: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mx-auto h-full w-full max-w-sm space-x-4 overflow-hidden px-3 text-white md:mt-[5rem] md:flex md:max-w-[82vw] md:flex-row-reverse md:gap-8 xl:max-w-7xl">
      <div className="h-[70%] md:flex w-full flex items-center justify-center">
        <div
          className="flex h-[20rem] w-[20rem] -translate-x-4 items-center sm:-translate-x-0 md:w-[23rem] bg-contain bg-center bg-no-repeat bg-[url('/assets/mobile/circle.png')]"
        >
          <img src = "/assets/mobile/mobile.gif" alt = "gif" className="h-fit w-[30rem] scale-150"/>
        </div>
      </div>
      <div className="h-[30%] text-start lg:h-[20%]">
        <div className="mt-4 h-[60%] pb-6 text-center text-lg md:mt-0 md:text-xl">
          <h5 className="mt-10 hidden h-[20%] font-rp1 text-xl font-bold text-white md:flex lg:text-2xl 3xl:text-4xl 4xl:text-7xl">
            {/* Download the */}
            Coming Soon
          </h5>
          <h1 className="text-gradient-blue titleText hidden pt-1 text-left font-rp1 font-bold md:flex">
            {" "}
            new tecnoesis app
          </h1>
          <h3 className="normalContent font-outfit md:hidden">
            Coming Soon, The New Tecnoesis App on Android.
          </h3>
          <h3 className="normalText hidden w-full py-[1rem] text-start font-outfit text-[#B5D8EABF] md:flex">
            Tecnoesis is the annual techno-managerial event of NIT Silchar,
            promising all tech geeks the ideal niche of fascinating events,
            workshops, competitions and interactions worth a lifetime.{" "}
          </h3>
        </div>
        <div className="my-2 flex hidden items-center justify-center gap-[1.75rem] space-x-4 p-0 text-start md:justify-start">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white hover:cursor-pointer md:p-0"
          >
            <Image
              src="/app-store-logo/play_store.webp"
              alt="Google Play Store"
              width={150}
              height={150}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
