'use client';
import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const PhotoGallery: React.FC = () => {
  return (
    <div
      className="w-full h-[33rem] lg:h-[40rem] bg-no-repeat sm:bg-contain bg-top bg-[length:22rem_auto] sm:bg-[position:center_50%] flex items-center justify-center sm:p-6 md:p-8 gap-10 overflow-hidden"
      style={{
        backgroundImage: 'url(/past-sponsor-logos/photogalleryBG.webp)',
      }}
    >
      <div className="lg:w-[70%] w-[100%] sm:pl-10 flex flex-col items-left text-center sm:text-left p-0 justify-center pt-[19rem] lg:pt[20rem]">
        <div className="w-full text-gradient-blue font-rp1 text-3xl font-bold md:text-[2rem]">Photo</div>
        <div className="w-full font-rp1 sm:text-[5rem] text-[2.7rem] sm:leading-[6rem] leading-[3rem] font-medium text-white">Gallery</div>
        <p className="w-[50%] text-left sm:flex hidden mt-4 text-sm md:text-base text-white">
          Tecnoesis is the annual techno-managerial event of NIT Silchar, promising all tech geeks the ideal niche of fascinating events, workshops, competitions, and interactions worth a lifetime.
        </p>
        <p className="w-full sm:pr-[22rem] sm:hidden pt-[0.5rem] text-sm md:text-base text-white">
          Tecnoesis is the annual techno-managerial event of NIT Silchar, promising all tech geeks.
        </p>
      </div>
      <div className="w-[30%] items-center justify-end lg:flex hidden">
        <div className="w-[100%] h-[100%] flex gap-10 justify-end pr-[5rem]">
          <Image
            src="/past-sponsor-logos/HoverTextPG.webp"
            alt="Photo Gallery 1"
            className="w-[3rem] h-[33rem] object-contain animate-upDown"
            height={33}
            width={34}
          />
          <Image
            src="/past-sponsor-logos/HoverTextPG2.webp"
            alt="Photo Gallery 2"
            className="w-[4.7rem] h-[33rem] object-contain animate-oppositeUpDown"
            height={33}
            width={34}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
