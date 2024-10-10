"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FuturisticButton = () => {
  const outerBorderRef = useRef<HTMLDivElement>(null);
  const innerBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(outerBorderRef.current, {
      rotate: 360,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });

    gsap.to(innerBorderRef.current, {
      rotate: -360,
      duration: 6,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="group relative flex items-center justify-center">
        <div
          ref={outerBorderRef}
          className="absolute h-[200px] w-[200px] rounded-full border-[2px] border-cyan-400 group-hover:animate-pulse"
        ></div>

        <div
          ref={innerBorderRef}
          className="absolute h-[150px] w-[150px] rounded-full border-[1px] border-cyan-400"
        ></div>

        <button className="relative z-10 h-[100px] w-[250px] rounded-full border-[2px] border-white bg-black font-outfit text-3xl uppercase tracking-widest text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
          Enter
        </button>

        <div className="absolute z-0 h-[220px] w-[220px] animate-pulse rounded-full bg-cyan-400/20 blur-2xl group-hover:bg-cyan-400/40"></div>
      </div>
    </div>
  );
};

export default FuturisticButton;
