'use client';
import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const PhotoGallery: React.FC = () => {
  return (
    <div
      className="w-full h-[38rem] lg:h-[40rem] bg-no-repeat sm:bg-contain bg-top bg-[length:22rem_auto] sm:bg-[position:center_50%] flex items-center justify-center sm:p-6 md:p-8 gap-10 overflow-hidden"
      style={{
        backgroundImage: 'url(/past-sponsor-logos/photogalleryBG.webp)',
      }}
    >
      <div className="lg:w-[70%] w-[100%] sm:pl-10 flex flex-col items-left text-center sm:text-left p-0 justify-center pt-[20rem] sm:pt-[14rem] lg:pt-[11rem]">
        <div className="w-full text-gradient-blue font-rp1 text-3xl font-bold md:text-[2rem]">Photo</div>
        <div className="w-full font-rp1 sm:text-[5rem] text-[2.7rem] sm:leading-[6rem] leading-[3rem] font-medium text-white">Gallery</div>
        <p className="w-[50%] text-left sm:flex hidden mt-4 text-sm lg:w-[50%] sm:w-[100%] md:text-base text-white">
          Tecnoesis Is The Annual Techno-Managerial Event of NIT Silchar, Promising All Tech Geeks The Ideal Niche of Fascinating Events, Workshops, Competitions And Interactions Worth A Lifetime.
        </p>
        <p className="w-full sm:pr-[22rem] sm:hidden py-[0.7rem] text-sm md:text-base text-white">
          Tecnoesis Is The Annual Techno-Managerial Event of NIT Silchar, Promising All Tech Geeks.
        </p>
        <div className='width-[42%] mt-[0.7rem] px-[3rem] sm:pr-[64%] sm:pl-0 sm:pt-[1rem]'>
            <CustomButton text="View Gallery"/>
        </div>
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
