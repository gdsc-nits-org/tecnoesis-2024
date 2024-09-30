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
        src: "/past-sponsor-logos/amul-logo.webp",
        alt: "Amul",
        width: 200,
        height: 200,
        divWidths: "w-[150px] sm:w-[200px] md:w-[300px] lg:w-[300px]",
      },

      {
        src: "/past-sponsor-logos/hackerearth-logo.webp",
        alt: "HackerEarth",
        width: 200,
        height: 200,
        divWidths: "w-[100px] sm:w-[150px] md:w-[200px] lg:w-[200px]",
      },
      {
        src: "/past-sponsor-logos/gplus-logo.webp",
        alt: "G Plus",
        width: 300,
        height: 100,
        divWidths: "w-[200px] sm:w-[250px] md:w-[300px] lg:w-[300px]",
      },
      {
        src: "/past-sponsor-logos/cocacola-logo.webp",
        alt: "Coca Cola",
        width: 200,
        height: 200,
        divWidths: "w-[100px] sm:w-[150px] md:w-[200px] lg:w-[200px]",
      },
      {
        src: "/past-sponsor-logos/zebronics-logo-white.webp",
        alt: "Zebronics",
        width: 200,
        height: 200,
        divWidths: "w-[100px] sm:w-[150px] md:w-[200px] lg:w-[200px]",
      },
      {
        src: "/past-sponsor-logos/MTV-logo.webp",
        alt: "MTV",
        width: 300,
        height: 300,
        divWidths: "w-[150px] sm:w-[250px] md:w-[250px] lg:w-[300px]",
      },
    ],
    [
      {
        src: "/past-sponsor-logos/IEEE-logo.webp",
        alt: "IEEE",
        width: 400,
        height: 200,
        divWidths: "w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]",
      },
      {
        src: "/past-sponsor-logos/cogg-logo.webp",
        alt: "COGG",
        width: 300,
        height: 100,
        divWidths: "w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]",
      },
      {
        src: "/past-sponsor-logos/ed-times-logo.webp",
        alt: "ED Times",
        width: 200,
        height: 100,
        divWidths: "w-[120px] sm:w-[150px] md:w-[200px] lg:w-[200px]",
      },
      {
        src: "/past-sponsor-logos/unacademy-logo.webp",
        alt: "Unacademy",
        width: 400,
        height: 100,
        divWidths: "w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]",
      },
      {
        src: "/past-sponsor-logos/yesbank-logo.webp",
        alt: "Yes Bank",
        width: 400,
        height: 100,
        divWidths: "w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]",
      },
      {
        src: "/past-sponsor-logos/unstop-logo.webp",
        alt: "Unstop",
        width: 400,
        height: 100,
        divWidths: "w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]",
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
