"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const PhotoGallery: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/gallery");
  };

  return (
    <div
      className="flex h-[38rem] w-full items-center justify-center gap-10 overflow-hidden bg-[length:22rem_auto] bg-top bg-no-repeat sm:bg-contain sm:bg-[position:center_50%] sm:p-6 md:p-8 lg:h-[40rem]"
      style={{
        backgroundImage: "url(/past-sponsor-logos/photogalleryBG.webp)",
      }}
    >
      <div className="items-left flex w-[100%] flex-col justify-center p-0 pt-[20rem] text-center sm:pl-10 sm:pt-[14rem] sm:text-left lg:w-[70%] lg:pt-[11rem]">
        <div className="text-gradient-blue w-full font-rp1 text-xl font-bold lg:text-2xl 3xl:text-4xl 4xl:text-7xl">
          Photo
        </div>
        <div className="titleText w-full font-rp1 font-medium text-white">
          Gallery
        </div>
        <p className="normalText mt-4 hidden w-[50%] text-left font-outfit text-[#B5D8EABF] sm:flex sm:w-[100%] lg:w-[50%]">
          Tecnoesis Is The Annual Techno-Managerial Event of NIT Silchar,
          Promising All Tech Geeks, The Ideal Niche of Fascinating Events,
          Workshops, Competitions And Interactions Worth A Lifetime.
        </p>
        <p className="normalText w-full py-[0.7rem] font-outfit text-[#B5D8EABF] sm:hidden sm:pr-[22rem]">
          Tecnoesis Is The Annual Techno-Managerial Event of NIT Silchar,
          Promising All Tech Geeks.
        </p>
        <div className="width-[42%] mt-[0.7rem] px-[3rem] sm:pl-0 sm:pr-[64%] sm:pt-[1rem]">
          <div onClick={handleButtonClick}>
            <CustomButton
              text="View Gallery"
              className="text-base font-semibold hover:text-[0.95] lg:text-lg lg:hover:text-[1.1rem] 2xl:text-2xl 2xl:hover:text-[1.45rem] 3xl:text-5xl 3xl:hover:text-[2.95rem]"
            />
          </div>
        </div>
      </div>
      <div className="hidden w-[30%] items-center justify-end lg:flex">
        <div className="flex h-[100%] w-[100%] justify-end gap-10 pr-[5rem]">
          <Image
            src="/past-sponsor-logos/HoverTextPG.webp"
            alt="Photo Gallery 1"
            className="h-[33rem] w-[3rem] animate-upDown object-contain"
            height={33}
            width={34}
          />
          <Image
            src="/past-sponsor-logos/HoverTextPG2.webp"
            alt="Photo Gallery 2"
            className="h-[33rem] w-[4.7rem] animate-oppositeUpDown object-contain"
            height={33}
            width={34}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
