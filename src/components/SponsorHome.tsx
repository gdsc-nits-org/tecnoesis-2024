"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const backgroundImg = "/past-sponsor-logos/sponsorRect.webp";

const imageSets = [
  [
    {
      src: "/sponsors/jrny.webp",
      alt: "Amul",
      width: 150,
      height: 150,
      url: "https://jrnyentertainment.com/",
    },
    {
      src: "/sponsors/krafton.webp",
      alt: "Amul",
      width: 150,
      height: 150,
      url: "https://krafton.com/en/",
    },
  ],
];

const SponsorHome: React.FC = () => {
  return (
    <div
      className="flex flex-wrap justify-center gap-6 p-0 sm:p-3 md:gap-20 md:p-4"
      id="sponsors"
    >
      {(imageSets[0] ?? []).map((image, index) => (
        <Link key={index} href={image.url}>
          <div className="h-[120px] w-[120px] p-2 sm:h-[180px] sm:w-[180px] md:h-[230px] md:w-[230px]">
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={backgroundImg}
                alt="Sponsor Background"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
              <div className="relative z-10 flex h-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  style={{ objectFit: "contain" }}
                  className="h-[65%] w-[65%]"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SponsorHome;
