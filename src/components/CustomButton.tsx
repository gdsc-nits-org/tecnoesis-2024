"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CustomButtonProps {
  text: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, className }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const hoverAudio = new Audio("/assets/Landing/hover-sfx.wav");
    hoverAudio.volume = 0.5;
    setAudio(hoverAudio);
  }, []);

  const playm = () => {
    if (audio) {
      void audio.play();
    }
  };
  return (
    <>
      <div
        id="hover-button"
        onMouseEnter={playm}
        className={`customBtn relative flex w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden bg-transparent p-3 text-white duration-500 hover:bg-[#2F629C] sm:p-4 lg:p-5 ${className}`}
      >
        <div className="absolute top-0 z-0 flex h-auto w-full items-center justify-center">
          <div className="gradpart1"></div>
          <div className="gradpart2"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center gap-4">
          <span>
            <Image
              alt="planet"
              height={25}
              width={25}
              src="/assets/Landing/planet.webp"
            />
          </span>
          <span className="btnText text-nowrap font-outfit">{text}</span>
        </div>
      </div>
    </>
  );
};

export default CustomButton;
