"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import CustomButton from "../components/CustomButton";
import Link from "next/link";

const About = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const image2WrapperRef = useRef<HTMLImageElement | null>(null);
  const image1Ref = useRef<HTMLImageElement | null>(null);
  const image2Ref = useRef<HTMLImageElement | null>(null);
  const image3Ref = useRef<HTMLImageElement | null>(null);
  const class1DivRef = useRef<HTMLDivElement | null>(null);
  const imageARef = useRef<HTMLImageElement | null>(null);
  const imageCRef = useRef<HTMLImageElement | null>(null);
  const imageDRef = useRef<HTMLImageElement | null>(null);
  const imageERef = useRef<HTMLImageElement | null>(null);
  const imageFRef = useRef<HTMLImageElement | null>(null);
  const imageGRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    if (image2WrapperRef.current) {
      gsap.to(image2WrapperRef.current, {
        rotate: 360,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      const resetPositions = () => {
        const resetProps = {
          // x: "0%",
          // y: "0%",
          duration: 0.6,
          ease: "power3.out",
          transformOrigin: "center center",
        };

        if (imageARef.current) gsap.to(imageARef.current, resetProps);
        if (image2WrapperRef.current)
          gsap.to(image2WrapperRef.current, resetProps);
        if (imageCRef.current) gsap.to(imageCRef.current, resetProps);
        if (imageDRef.current) gsap.to(imageDRef.current, resetProps);
        if (imageERef.current) gsap.to(imageERef.current, resetProps);
        if (imageFRef.current) gsap.to(imageFRef.current, resetProps);
        if (imageGRef.current) gsap.to(imageGRef.current, resetProps);
        if (image1Ref.current) gsap.to(image1Ref.current, resetProps);
        if (image2Ref.current) gsap.to(image2Ref.current, resetProps);
        if (image3Ref.current) gsap.to(image3Ref.current, resetProps);
        if (class1DivRef.current) gsap.to(class1DivRef.current, resetProps);
      };

      resetPositions();
      return;
    }
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      if (imageARef.current) {
        gsap.to(imageARef.current, {
          x: (mouseX - window.innerWidth / 2) * 0.1,
          y: (mouseY - window.innerHeight / 2) * 0.1,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      if (image2WrapperRef.current) {
        gsap.to(image2WrapperRef.current, {
          x: (mouseX - window.innerWidth / 2) * 0.09,
          y: (mouseY - window.innerHeight / 2) * 0.09,
          duration: 0.6,
          ease: "power3.out",
        });
      }
      if (imageCRef.current) {
        gsap.to(imageCRef.current, {
          x: (mouseX - window.innerWidth / 2) * 0.07,
          y: (mouseY - window.innerHeight / 2) * 0.07,
          duration: 0.6,
          ease: "power3.out",
        });
      }
      if (imageDRef.current) {
        gsap.to(imageDRef.current, {
          x: (mouseX - window.innerWidth / 2) * 0.065,
          y: (mouseY - window.innerHeight / 2) * 0.065,
          duration: 0.6,
          ease: "power3.out",
        });
      }
      if (imageERef.current) {
        gsap.to(imageERef.current, {
          x: (mouseX - window.innerWidth / 2) * 0.06,
          y: (mouseY - window.innerHeight / 2) * 0.06,
          duration: 0.6,
          ease: "power3.out",
        });
      }
      if (imageFRef.current) {
        gsap.to(imageFRef.current, {
          x: (mouseX - window.innerWidth / 2) * 0.06,
          y: (mouseY - window.innerHeight / 2) * 0.06,
          duration: 0.6,
          ease: "power3.out",
        });
      }
      if (imageGRef.current) {
        gsap.to(imageGRef.current, {
          x: (mouseX - window.innerWidth / 2) * 0.05,
          y: (mouseY - window.innerHeight / 2) * 0.05,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      if (image1Ref.current) {
        gsap.to(image1Ref.current, {
          x: (mouseX - window.innerWidth / 2) * 0.05,
          y: (mouseY - window.innerHeight / 2) * 0.05,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      if (image2Ref.current) {
        gsap.to(image2Ref.current, {
          x: (mouseX - window.innerWidth / 2) * 0.08,
          y: (mouseY - window.innerHeight / 2) * 0.08,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      if (image3Ref.current) {
        gsap.to(image3Ref.current, {
          x: (mouseX - window.innerWidth / 2) * 0.1,
          y: (mouseY - window.innerHeight / 2) * 0.1,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      if (class1DivRef.current) {
        gsap.to(class1DivRef.current, {
          x: (mouseX - window.innerWidth / 2) * 0.05,
          y: (mouseY - window.innerHeight / 2) * 0.05,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

  return (
    <div className="flex w-screen flex-col overflow-x-hidden" id="about">
      <div className="flex flex-col items-center justify-center md:px-12 lg:h-[60vh] lg:flex-row">
        <div className="upper w-full md:h-[30vh] lg:h-auto lg:w-1/3">
          <div className="titleText text-gradient-blue l p-10 text-center font-rp1 font-bold lg:text-left">
            ABOUT NIT SILCHAR
          </div>
          <div className="normalText px-7 pb-4 text-justify font-outfit text-[#B5D8EABF] md:text-center lg:text-left">
            Welcome to NIT Silchar, the launchpad for tomorrow’s innovators!
            Established in 1967 and now proudly ranked 92 in NIRF, we’ve been
            pushing boundaries and redefining the tech landscape for decades.
            Here, creativity converges with cutting-edge research, allowing
            students to explore new dimensions of knowledge. With a vibrant
            atmosphere fostering collaboration and bold ideas, NIT Silchar is
            where the future of technology and innovation takes shape.
          </div>
        </div>
        <div className="lower flex h-[40vh] w-full items-center justify-center lg:w-1/3">
          <div className="first-animation relative h-[250px] w-[250px] overflow-visible lg:h-[300px] lg:w-[300px] desktop1:h-[350px] desktop1:w-[350px] desktop2:h-[400px] desktop2:w-[400px] tv1:h-[700px] tv1:w-[700px]">
            <img
              ref={imageARef}
              src="/assets/about/1.png"
              alt="Image a"
              className="z-7 absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 transform"
              style={{ objectFit: "cover" }}
            />
            <img
              ref={image2WrapperRef}
              src="/assets/about/2.png"
              alt="Image b"
              className="z-6 absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 transform lg:h-[60%] lg:w-[60%]"
              style={{ objectFit: "cover" }}
            />
            <img
              ref={imageCRef}
              src="/assets/about/flow 7.gif "
              alt="Image c"
              className="z-5 absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 transform"
            />
            <img
              ref={imageDRef}
              src="/assets/about/dotted ring.png"
              alt="Image d"
              className="z-4 absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 transform"
            />
            <img
              ref={imageERef}
              src="/assets/about/static ring.png"
              alt="Image e"
              className="z-3 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.35] transform object-contain"
            />
            <img
              ref={imageFRef}
              src="/assets/about/Flow 6.gif"
              alt="Image f"
              className="z-2 absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 transform"
            />
            <img
              ref={imageGRef}
              src="/assets/about/outer ring.png"
              alt="Image g"
              className="z-1 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.5] transform object-contain"
            />
          </div>
        </div>
        <div className="h-1/2 w-full lg:h-auto lg:w-1/3">
          <div className="text-gradient-blue titleText p-7 text-center font-rp1 font-bold md:m-0 lg:text-right">
            ABOUT US
          </div>
          <div className="normalText px-7 pb-4 text-justify font-outfit text-[#B5D8EABF] md:text-center lg:text-right">
            Tecnoesis isn’t just a fest—it’s your gateway to uncharted
            dimensions of tech, innovation, and discovery! With mind-bending
            challenges, futuristic workshops, and immersive experiences, this is
            where reality shifts, creativity leads, and boundaries fade. Step in
            and explore worlds where the impossible becomes possible, pushing
            the limits of what you can achieve. Whether you’re coding,
            designing, or collaborating, Tecnoesis is where bold ideas thrive.
            Ready to unlock endless possibilities? Dive in!
          </div>
        </div>
      </div>
      <div className="flex h-auto items-center justify-center p-8 text-center">
        <div
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1-OEXRWETQVTWnFarzeD4QBurcTC2GV36/view?usp=drivesdk",
            )
          }
          className="h-3 w-[85%] font-outfit text-xs md:w-1/2 lg:w-1/5"
        >
          <CustomButton
            text="Download Brochure"
            className="text-base font-semibold hover:text-[0.95] lg:text-lg lg:hover:text-[1.1rem] 2xl:text-2xl 2xl:hover:text-[1.45rem] 3xl:text-5xl 3xl:hover:text-[2.95rem]"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center px-7 md:mb-20 md:flex-row md:items-center md:justify-center md:px-16">
        <div className="flex h-[40vh] w-full flex-col justify-center overflow-visible md:h-[100%]">
          <div className="text-gradient-blue titleText p-10 text-center font-rp1 font-bold md:p-7 md:text-left">
            MODULES
          </div>
          <div className="normalText pb-4 text-justify font-outfit text-[#B5D8EABF] md:px-7 md:text-justify">
            Tecnoesis is the annual techno-managerial event of NIT Silchar,
            promising all tech geeks the ideal niche of fascinating events,
            workshops, competitions and interactions worth a lifetime.{" "}
          </div>
          <div className="flex items-center justify-center text-center md:justify-start md:pl-7">
            <Link href="/modules">
              <div className="text-base font-semibold hover:text-[0.95] lg:text-lg lg:hover:text-[1.1rem] 2xl:text-2xl 2xl:hover:text-[1.45rem] 3xl:text-5xl 3xl:hover:text-[2.95rem]">
                <CustomButton
                  text="View All Modules"
                  className="text-base lg:text-lg 2xl:text-2xl 3xl:text-5xl"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex h-[60vh] w-full flex-col justify-center overflow-hidden md:h-[100%]">
          <div className="second-animation relative top-[-60px] h-[300px] w-full md:h-[500px]">
            <div
              ref={class1DivRef}
              className="class1 z-3 absolute inset-0 left-1/2 top-1/2 flex h-1/2 w-[320px] -translate-x-1/2 transform items-center justify-center rounded-3xl bg-[url('/assets/about/gradient.gif')] bg-cover bg-center opacity-50 md:w-[440px]"
            ></div>

            <div className="relative h-full w-full">
              <img
                ref={image1Ref}
                src="/assets/about/DFAS.png"
                alt="Image 1"
                className="class1 absolute left-1/2 top-[50%] z-10 h-1/2 w-[320px] -translate-x-1/2 transform object-cover md:w-[440px]"
              />

              <img
                ref={image2Ref}
                src="/assets/about/ONLI.png"
                alt="Image 2"
                className="class1 absolute left-1/2 top-[18%] z-20 h-auto w-36 -translate-x-1/2 transform object-cover md:top-[20%] md:w-56"
              />

              <img
                ref={image3Ref}
                src="/assets/about/fireball.gif"
                alt="Image 3"
                className="class1 absolute left-1/2 top-[65%] z-30 h-auto w-[160px] -translate-x-1/2 transform object-cover md:w-[260px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
