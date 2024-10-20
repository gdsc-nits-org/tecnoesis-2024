"use client";
import React from "react";
const FuturisticButton: React.FC = () => {
  // const setTarget=() => {
  //   gsap.to(outerBorderRef.current, {
  //     rotate: 60,
  //     duration: 10,
  //     ease: "linear",
  //     repeat: -1,
  //   });

  //   gsap.to(innerBorderRef.current, {
  //     rotate: -60,
  //     duration: 6,
  //     ease: "linear",
  //     repeat: -1,
  //   })
  // }

  return (
    <div className="flex h-screen items-center justify-center outline-none">
      <div className="enterbtn group relative flex items-center justify-center">
        <div className="squarebox absolute h-[250px] w-[250px] flex flex-col items-center justify-center">
          <div className="flex flex-row items-start justify-between h-[50%] w-[100%]">
            <div className="border-l-2 border-t-2 border-white min-h-[50%] min-w-[25%]"></div>
            <div className="border-r-2 border-t-2 border-white min-h-[50%] min-w-[25%]"></div>
          </div>
          <div className="flex flex-row items-end justify-between h-[50%] w-[100%]">
            <div className="border-l-2 border-b-2 border-white min-h-[50%] min-w-[25%]"></div>
            <div className="border-r-2 border-b-2 border-white min-h-[50%] min-w-[25%]"></div>  
          </div>
        </div>
        <div
          className="outerring bg-[url('/assets/Landing/outerringenter.svg')] bg-cover bg-no-repeat absolute h-[200px] w-[200px] rounded-full"
        ></div>

        <div
          className="innerring bg-[url('/assets/Landing/innerringenter.svg')] bg-cover bg-no-repeat absolute h-[150px] w-[150px] rounded-full"
        ></div>

        <button className="relative z-10 font-rp1 h-[100px] w-[250px] text-3xl uppercase tracking-widest text-white transition-all duration-300">
          Enter
        </button>

        <div className="absolute z-0 h-[220px] w-[220px] animate-pulse rounded-full bg-cyan-400/20 blur-2xl"></div>
      </div>
    </div>
  );
};

export default FuturisticButton;
