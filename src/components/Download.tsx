'use client';
import Image from "next/image";
import { useEffect } from "react";

const Download: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-sm mx-auto space-x-4 text-white 
    md:max-w-7xl overflow-hidden px-3 h-full w-full md:flex md:flex-row-reverse md:gap-8">
      <div className="md:flex h-[70%]">
        <div
          className="flex items-center h-[24rem] w-[23rem]"
          style={{
            width: "23rem",
            height: "24rem",
          }}
          dangerouslySetInnerHTML={{
            __html: `
              <spline-viewer url="https://prod.spline.design/psqhx99vgzwWUMIs/scene.splinecode" style="width: 100%; height: 100%;"></spline-viewer>
            `,
          }}
        />
      </div>
      <div className="h-[30%] lg:h-[20%] text-start">
        <div className="mt-4 md:mt-0 text-center pb-6 text-lg md:text-xl h-[60%]">
            <h5 className="text-white mt-10 font-rp1 text-xl lg:text-4xl font-bold hidden h-[20%] md:flex">Download the</h5>
            <h1 className="text-gradient-blue font-rp1 text-2xl font-bold lg:text-[2.7rem] hidden md:flex pt-1"> new tecnoesis app</h1>
          <h3 className="md:hidden">Download The New Tecnoesis App On Both Android And iOS Devices.</h3>
          <h3 className="md:flex text-start hidden w-full md:text-sm py-[1rem]">Tecnoesis is the annual techno-managerial event of NIT Silchar, promising all tech geeks the ideal niche of fascinating events, workshops, competitions and interactions worth a lifetime. </h3>
        </div>
        <div className="flex md:justify-start md:p-0 text-start items-center justify-center gap-[1.75rem] px-8 space-x-4 my-2">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-lg md:p-0 hover:cursor-pointer"
          >
            <Image
              src="/app-store-logo/play_store.webp"
              alt="Google Play Store"
              width={150}
              height={150}
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-lg p-[1px] hover:cursor-pointer"
          >
            <Image
              src="/app-store-logo/app_store.webp"
              alt="Apple Store"
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
