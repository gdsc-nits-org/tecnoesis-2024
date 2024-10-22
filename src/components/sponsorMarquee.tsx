import Image from "next/image";
import Marquee from "react-fast-marquee";

interface MarqueeComponentProps {
  direction?: "left" | "right";
  set: number;
}

const MarqueeComponent: React.FC<MarqueeComponentProps> = ({
  direction = "left",
  set,
}) => {
  const imageSets = [
    [
      {
        src: "/past-sponsor-logos/ed.webp",
        alt: "Amul",
        width: 200,
        height: 200,
        divWidths: "w-[150px] sm:w-[200px] md:w-[200px] lg:w-[240px]",
      },

      {
        src: "/past-sponsor-logos/hackerearth.webp",
        alt: "HackerEarth",
        width: 200,
        height: 200,
        divWidths: "w-[150px] sm:w-[150px] md:w-[200px] lg:w-[240px]",
      },
      {
        src: "/past-sponsor-logos/gplus.webp",
        alt: "G Plus",
        width: 300,
        height: 100,
        divWidths: "w-[200px] sm:w-[100px] md:w-[190px] lg:w-[240px]",
      },
      {
        src: "/past-sponsor-logos/cocacolaa.webp",
        alt: "Coca Cola",
        width: 200,
        height: 200,
        divWidths: "w-[100px] sm:w-[120px] md:w-[150px] lg:w-[190px]",
      },
      {
        src: "/past-sponsor-logos/unknown.webp",
        alt: "Zebronics",
        width: 200,
        height: 200,
        divWidths: "w-[100px] sm:w-[90px] md:w-[130px] lg:w-[140px]",
      },
      {
        src: "/past-sponsor-logos/mtv.webp",
        alt: "MTV",
        width: 300,
        height: 300,
        divWidths: "w-[150px] sm:w-[150px] md:w-[150px] lg:w-[190px]",
      },
    ],
    [
      {
        src: "/past-sponsor-logos/ieee.webp",
        alt: "IEEE",
        width: 400,
        height: 200,
        divWidths: "w-[200px] sm:w-[200px] md:w-[200px] lg:w-[250px]",
      },
      {
        src: "/past-sponsor-logos/cogg.webp",
        alt: "COGG",
        width: 300,
        height: 100,
        divWidths: "w-[150px] sm:w-[200px] md:w-[200px] lg:w-[240px]",
      },
      {
        src: "/past-sponsor-logos/ed.webp",
        alt: "ED Times",
        width: 200,
        height: 100,
        divWidths: "w-[120px] sm:w-[150px] md:w-[150px] lg:w-[190px]",
      },
      {
        src: "/past-sponsor-logos/unacademy.webp",
        alt: "Unacademy",
        width: 400,
        height: 100,
        divWidths: "w-[200px] sm:w-[250px] md:w-[200px] lg:w-[340px]",
      },
      {
        src: "/past-sponsor-logos/yesbank.webp",
        alt: "Yes Bank",
        width: 400,
        height: 100,
        divWidths: "w-[200px] sm:w-[200px] md:w-[200px] lg:w-[290px]",
      },
      {
        src: "/past-sponsor-logos/unstop.webp",
        alt: "Unstop",
        width: 400,
        height: 100,
        divWidths: "w-[200px] sm:w-[150px] md:w-[150px] lg:w-[190px]",
      },
    ],
  ];

  const imagesToShow = imageSets[set - 1] ?? imageSets[0];

  return (
    <div className="w-full">
      <Marquee
        speed={100}
        direction={direction}
        gradient={true}
        gradientColor="black"
      >
        <div className="lg:gap-x-18 flex gap-x-8 md:gap-x-12">
          {imagesToShow?.map((image, index) => (
            <div
              key={index}
              className={`flex items-center px-4 ${image.divWidths}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
