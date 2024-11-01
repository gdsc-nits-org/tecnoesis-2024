'use client';
import React from 'react';
import Image from 'next/image';

const backgroundImg = '/past-sponsor-logos/sponsorRect.webp';

const imageSets = [
  [
    {
      src: "/sponsors/jrny.webp",
      alt: "Amul",
      width: 150,
      height: 150,
    }
  ]
];

const SponsorHome: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center p-0 md:p-4 gap-6 md:gap-20 sm:p-3" id='sponsors'>
      {(imageSets[0] ?? []).map((image, index) => (
        <div key={index} className="p-2 w-[120px] h-[120px] md:h-[230px] md:w-[230px] sm:w-[180px] sm:h-[180px]">
          <div className="relative w-full h-full shadow-md rounded-lg overflow-hidden">
            <Image
              src={backgroundImg}
              alt="Sponsor Background"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
            <div className="flex items-center justify-center h-full relative z-10">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                style={{ objectFit: 'contain' }}
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
