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
    <div className="mx-auto h-full w-full max-w-sm space-x-4 overflow-hidden px-3 text-white md:flex md:max-w-7xl md:flex-row-reverse md:gap-8">
      <div className="h-[70%] md:flex">
        <div
          className="flex h-[24rem] w-[23rem] items-center"
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
      <div className="h-[30%] text-start lg:h-[20%]">
        <div className="mt-4 h-[60%] pb-6 text-center text-lg md:mt-0 md:text-xl">
          <h5 className="mt-10 hidden h-[20%] font-rp1 text-xl font-bold text-white md:flex lg:text-2xl 3xl:text-4xl 4xl:text-7xl">
            Download the
          </h5>
          <h1 className="text-gradient-blue titleText hidden pt-1 font-rp1 font-bold md:flex">
            {" "}
            new tecnoesis app
          </h1>
          <h3 className="normalContent font-outfit md:hidden">
            Download The New Tecnoesis App on Android.
          </h3>
          <h3 className="normalText hidden w-full py-[1rem] text-start font-outfit text-[#B5D8EABF] md:flex">
            Tecnoesis is the annual techno-managerial event of NIT Silchar,
            promising all tech geeks the ideal niche of fascinating events,
            workshops, competitions and interactions worth a lifetime.{" "}
          </h3>
        </div>
        <div className="my-2 flex items-center justify-center gap-[1.75rem] space-x-4 p-0 text-start md:justify-start">
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
