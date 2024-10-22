"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { gsap } from "gsap";
import EnterButton from "./enterButton";
import Link from "next/link";
import Progress from "./Progress";

const Landing: React.FC = () => {
  const tl = gsap.timeline({ ease: "slow", duration: 1 });
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const imageUrls = 5;

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsLoading(() => false);
      }, 500);
    }
  }, [progress]);

  const handleImageLoad = () => {
    setProgress((prev) => {
      return prev + 100 / imageUrls;
    });
  };

  useEffect(() => {
    if (isLoading) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== "undefined") {
        gsap.utils
          .toArray<HTMLElement>(".movable")
          .forEach((layer: HTMLElement) => {
            const depth: number = layer.dataset.depth
              ? parseFloat(layer.dataset.depth)
              : 1;
            const moveX = e.pageX - window.innerWidth / 2;
            const moveY = e.pageY - window.innerHeight / 2;
            tl.to(
              layer,
              {
                x: -moveX / depth,
                y: -moveY / (depth * 4),
              },
              0,
            );
          });
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLoading, tl]);

  return (
    <div>
      {isLoading && <Progress progress={progress} />}
      <div
        className={`relative flex h-[100vh] flex-col items-center justify-around overflow-hidden text-[#ffffff] ${isLoading ? "hidden" : null} `}
      >
        <div className="3xl:ml-[20rem] absolute z-10 ml-[10rem] scale-[0.5] sm:ml-[12rem] sm:mt-[4rem] sm:scale-[0.8] lg:ml-[16rem]">
          <Link href={"/home"}>
            <EnterButton />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center pb-[4rem] pt-[4rem] lg:p-0">
          <Image
            src="/assets/Landing/tecnoesisLogo.webp"
            alt="Tecnoesis Logo"
            className="movable z-1 4xl:scale-[2] h-[10rem] w-[20rem] object-cover md:h-[15rem] md:w-[30rem] lg:h-[25rem] lg:w-[45rem]"
            width={1000}
            height={1000}
            data-depth={80}
            priority={true}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="flex h-[100vh] w-[100vw] items-end justify-center">
          <Image
            src="/assets/Landing/buildings.svg"
            className="movable z-2 absolute left-0 top-[20%] h-[60%] object-cover md:h-[80%] md:w-[100%]"
            width={1000}
            height={1000}
            alt="cover"
            data-depth={75}
            priority={true}
            onLoad={handleImageLoad}
          />
          <div className="scale-1 tv1:scale-[1.5] tv2:scale-[1.6] relative bottom-[40px] left-0 flex w-[100%] items-center justify-center">
            <Image
              width={500}
              height={500}
              src="/assets/Landing/newworld.png"
              alt="new world"
              className="movable absolute bottom-0 left-1/2 ml-[2rem] -translate-x-1/2 scale-[1.5] 2xl:bottom-[5rem] 2xl:scale-[2]"
              data-depth={50}
              priority={true}
              onLoad={handleImageLoad}
            />
            <Image
              width={500}
              height={500}
              src="/assets/Landing/glowingBall.gif"
              alt="glowing ball"
              className="movable z-4 absolute bottom-[-5.1rem] left-1/2 -translate-x-1/2 scale-[2] transform opacity-50 mobile1:bottom-[-6.5rem] mobile2:bottom-[-9rem] 2xl:bottom-[-7.5rem] 2xl:scale-[2.5]"
              data-depth={50}
              priority={true}
              onLoad={handleImageLoad}
            />
            <img
              src="/assets/Landing/hiker.png"
              alt="rock"
              className="movable z-5 desktop1:bottom-[-500px] desktop2:bottom-[-550px] desktop3:bottom-[-700px] tv1:scale-[0.25] tv1:bottom-[-850px] tv3:bottom-[-1000px] 6xl:bottom-[-1200px] 7xl:bottom-[-1300px] absolute bottom-[-100px] mobile4:bottom-[-150px] mobile4:scale-[0.8] md:bottom-[-300px] md:scale-[0.5] tablet4:bottom-[-400px] tablet4:scale-[0.4]"
              data-depth={20}
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MainLanding() {
  return (
    <Suspense fallback={<Progress progress={0} />}>
      <Landing />
    </Suspense>
  );
}