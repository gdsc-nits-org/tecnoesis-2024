"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Module {
  id: string;
  name: string;
  coverImage: string;
}

const Modules: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [isLoading, setIsLoading] = useState(true); 
  const comingSoon = true;

  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const { data } = await axios.get<{ msg: Module[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/module`,
        );
        setModules(data.msg);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching modules:", error);
        setIsLoading(false); 
      }
    };

    void fetchModules();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const images = imagesRef.current;
    const texts = textRefs.current;

    images.forEach((img) => {
      if (img) {
        gsap.fromTo(
          img,
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            scale: 0.8,
            opacity: 0,
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "bottom 70%",
              scrub: true,
            },
          },
        );
      }
    });

    texts.forEach((text) => {
      if (text) {
        gsap.fromTo(
          text,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [modules]);

  const setImageRef = (el: HTMLImageElement | null, index: number) => {
    imagesRef.current[index] = el;
  };

  const setTextRef = (el: HTMLParagraphElement | null, index: number) => {
    textRefs.current[index] = el;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="z-10000 fixed inset-0"
        dangerouslySetInnerHTML={{
          __html: `<spline-viewer url="https://prod.spline.design/NPelTris6eEVQkKp/scene.splinecode" style="width: 100%; height: 100%;"></spline-viewer>`,
        }}
      ></div>
      {isLoading ? (
        <div className="relative z-10 pt-[9.4rem] text-white">
          <div className="flex w-full flex-col gap-24">
            {[1, 2, 3].map((_, index) => (
              <div className="flex h-[45vh] w-full" key={index}>
                <div className="flex h-full flex-1 justify-center">
                  <div className="img-container right flex h-full w-3/4 flex-col justify-between">
                    <div className="relative h-full w-full bg-gray-800 animate-pulse"></div>
                    <div className="my-6 flex items-center">
                      <p className="pr-9 bg-gray-700 h-4 w-24 animate-pulse"></p>
                    </div>
                  </div>
                </div>
                <div className="hidden flex-1 md:flex"></div>
              </div>
            ))}
          </div>
        </div>
      ) : !comingSoon ? (
        <div className="relative z-10 pt-[9.4rem] text-white">
          <div className="flex w-full flex-col gap-24">
            {modules.map((module, index) => (
              <div
                className="flex h-[45vh] w-full"
                key={module.id}
                id={`row${index + 1}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="flex h-full flex-1 justify-center md:justify-end">
                      <div className="img-container right flex h-full w-3/4 flex-col justify-between">
                        <Link
                          href={`/allEvents/${module.id}`}
                          className="block h-full w-full"
                        >
                          <div className="relative h-full w-full">
                            <Image
                              ref={(el) => setImageRef(el, index)}
                              src={module.coverImage}
                              alt={module.name}
                              className="h-full w-full cursor-pointer border-[8px] border-[#B8B8B840] object-cover backdrop-blur-[7.6rem]" 
                              unoptimized
                              fill
                            />
                          </div>
                        </Link>
                        <div className="my-6 flex cursor-pointer items-center justify-start">
                          <p
                            ref={(el) => setTextRef(el, index * 2)}
                            className="pr-9 font-outfit text-white"
                          >
                            [Coming Soon]
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-1 md:flex"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden flex-1 md:flex"></div>
                    <div className="flex h-full flex-1 justify-center md:justify-start">
                      <div className="img-container left flex h-full w-3/4 flex-col justify-between">
                        <Link
                          href={`/allEvents/${module.id}`}
                          className="block h-full w-full"
                        >
                          <div className="relative h-full w-full">
                            <Image
                              ref={(el) => setImageRef(el, index)}
                              src={module.coverImage}
                              alt={module.name}
                              className="h-full w-full cursor-pointer border-[7px] border-[#B8B8B840] object-cover backdrop-blur-[121.58px]"
                              unoptimized
                              fill
                            />
                          </div>
                        </Link>
                        <div className="my-6 flex cursor-pointer items-center justify-start">
                          <p
                            ref={(el) => setTextRef(el, index * 2)}
                            className="3xl:text-6xl pr-9 font-outfit text-lg text-white lg:text-xl 2xl:text-3xl"
                          >
                            {module.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
            <div className="h-72 w-full"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modules;
