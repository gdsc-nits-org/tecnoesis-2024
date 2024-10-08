"use client";
import React from 'react';
import Image from "next/image";
interface CustomButtonProps {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text}) => {
  return (
    <div className={`customBtn relative m-auto w-[100%] overflow-hidden flex items-center justify-center text-white text-xl hover:text-2xl cursor-pointer bg-[transparent] p-5 hover:bg-[#2F629C] duration-500`}>
      <div className='absolute top-0 z-0 min-w-[100%] h-[100%] flex flex-row items-center justify-center'><div className='gradpart1'></div><div className='gradpart2'></div></div>
      <div className="absolute top-0 z-1 flex flex-row items-center justify-center gap-4 h-[100%]"><span><Image alt="planet" height={25} width={25} src="/assets/Landing/planet.webp"/></span><span className='btnText'>{text}</span></div>
    </div>
  );
}

export default CustomButton;
