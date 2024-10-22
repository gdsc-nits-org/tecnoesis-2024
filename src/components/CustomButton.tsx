"use client";
import React from "react";
import Image from "next/image";
interface CustomButtonProps {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <div
      className={`customBtn relative m-auto flex w-[100%] cursor-pointer items-center justify-center overflow-hidden bg-[transparent] p-5 text-xl text-white duration-500 hover:scale-105 hover:bg-[#2F629C]`}
    >
      <div className="absolute top-0 z-0 flex h-[100%] min-w-[100%] flex-row items-center justify-center">
        <div className="gradpart1"></div>
        <div className="gradpart2"></div>
      </div>
      <div className="z-1 absolute top-0 flex h-[100%] flex-row items-center justify-center gap-4">
        <span>
          <Image
            alt="planet"
            height={25}
            width={25}
            src="/assets/Landing/planet.webp"
          />
        </span>
        <span className="btnText">{text}</span>
      </div>
    </div>
  );
};

export default CustomButton;
