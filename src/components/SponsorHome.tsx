'use client';
import React from 'react';
import Image from 'next/image';

const backgroundImg = '/past-sponsor-logos/sponsorRect.webp';

const imageSets = [
  [
    {
      src: "/past-sponsor-logos/amul-logo.webp",
      alt: "Amul",
      width: 150,
      height: 150,
    },
    {
      src: "/past-sponsor-logos/hackerearth-logo.webp",
      alt: "HackerEarth",
      width: 150,
      height: 150,
    },
    {
      src: "/past-sponsor-logos/gplus-logo.webp",
      alt: "G Plus",
      width: 200,
      height: 100,
    },
    {
      src: "/past-sponsor-logos/cocacola-logo.webp",
      alt: "Coca Cola",
      width: 150,
      height: 150,
    },
    {
      src: "/past-sponsor-logos/zebronics-logo-white.webp",
      alt: "Zebronics",
      width: 150,
      height: 150,
    },
    {
      src: "/past-sponsor-logos/MTV-logo.webp",
      alt: "MTV",
      width: 200,
      height: 200,
    },
  ],
];

const SponsorHome: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center p-0 md:p-4 gap-6 md:gap-20 sm:p-3">
      {(imageSets[0] ?? []).map((image, index) => (
        <div key={index} className="p-2 w-[120px] h-[120px] md:h-[230px] md:w-[230px] sm:w-[180px] sm:h-[180px]">
          <div className="relative w-full h-full shadow-md rounded-lg overflow-hidden">
            <Image
              src={backgroundImg}
              alt="Sponsor Background"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="flex items-center justify-center h-full relative z-10">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                layout="intrinsic"
                objectFit="contain"
                className="w-[65%] h-[65%]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsorHome;
