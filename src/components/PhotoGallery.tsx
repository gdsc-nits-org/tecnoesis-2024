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
        <div className="text-gradient-blue 3xl:text-7xl w-full font-rp1 text-xl font-bold lg:text-2xl 2xl:text-4xl">
          Photo
        </div>
        <div className="3xl:text-9xl w-full font-rp1 text-3xl font-medium leading-[3rem] text-white sm:leading-[6rem] lg:text-4xl 2xl:text-6xl">
          Gallery
        </div>
        <p className="3xl:text-6xl mt-4 hidden w-[50%] text-left font-outfit text-lg text-white sm:flex sm:w-[100%] lg:w-[50%] lg:text-xl 2xl:text-3xl">
          Tecnoesis Is The Annual Techno-Managerial Event of NIT Silchar,
          Promising All Tech Geeks, The Ideal Niche of Fascinating Events,
          Workshops, Competitions And Interactions Worth A Lifetime.
        </p>
        <p className="3xl:text-6xl w-full py-[0.7rem] font-outfit text-lg text-white sm:hidden sm:pr-[22rem] md:text-base lg:text-xl 2xl:text-3xl">
          Tecnoesis Is The Annual Techno-Managerial Event of NIT Silchar,
          Promising All Tech Geeks.
        </p>
        <div className="width-[42%] mt-[0.7rem] px-[3rem] sm:pl-0 sm:pr-[64%] sm:pt-[1rem]">
          <div onClick={handleButtonClick}>
            <CustomButton
              text="View Gallery"
              className="3xl:text-5xl text-base lg:text-lg 2xl:text-2xl"
            />
          </div>
        </div>
      </div>
      <div className="hidden w-[30%] items-center justify-end lg:flex">
        <div className="flex h-[100%] w-[100%] justify-end gap-10 pr-[5rem]">
          <Image
            src="/past-sponsor-logos/HoverTextPG.webp"
            alt="Photo Gallery 1"
            className="animate-upDown h-[33rem] w-[3rem] object-contain"
            height={33}
            width={34}
          />
          <Image
            src="/past-sponsor-logos/HoverTextPG2.webp"
            alt="Photo Gallery 2"
            className="animate-oppositeUpDown h-[33rem] w-[4.7rem] object-contain"
            height={33}
            width={34}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
