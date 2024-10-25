"use client";

import { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import data from "../../public/data/data.json";

gsap.registerPlugin(ScrollTrigger);

interface DataItem {
  image: string;
  title: string;
  year: string;
}

const SkeletonLoader: React.FC = () => (
  <div>
  <div className="flex w-full justify-center mx-auto md:pl-[5.5rem] pl-0">
    <div className="p-4 rounded-lg shadow-2xl md:w-[50%] w-[80%] max-w-[500px]">
      <div className="relative h-60 mb-5 flex justify-center items-center rounded-lg bg-gray-300 animate-pulse">
        <svg
          className="w-10 h-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18.5c-4.6 0-8.5-3.9-8.5-8.5S5.4 1.5 10 1.5s8.5 3.9 8.5 8.5-3.9 8.5-8.5 8.5z" />
        </svg>
      </div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-300 rounded-full mb-3 animate-pulse w-[30%]"></div>
        <div className="h-4 bg-gray-300 rounded-full mb-3 animate-pulse w-[10%]"></div>
      </div>
    </div>
    <div className="flex-1 md:flex w-[50%] justify-center items-center hidden sm:visible"></div>
  </div>
  <div className="flex w-full justify-center mx-auto md:pl-[5.5rem] pl-0 md:hidden">
    <div className="p-4 rounded-lg shadow-2xl md:w-[50%] w-[80%] max-w-[500px]">
      <div className="relative h-60 mb-5 flex justify-center items-center rounded-lg bg-gray-300 animate-pulse">
        <svg
          className="w-10 h-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18.5c-4.6 0-8.5-3.9-8.5-8.5S5.4 1.5 10 1.5s8.5 3.9 8.5 8.5-3.9 8.5-8.5 8.5z" />
        </svg>
      </div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-300 rounded-full mb-3 animate-pulse w-[30%]"></div>
        <div className="h-4 bg-gray-300 rounded-full mb-3 animate-pulse w-[10%]"></div>
      </div>
    </div>
    <div className="flex-1 md:flex w-[50%] justify-center items-center hidden md:visible"></div>
  </div>
  </div>
);

const Gallery: React.FC = () => {
  const [loading, setLoading] = useState(true); 
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  useLayoutEffect(() => {
    if (!loading) { 
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
            {
              y: 20,
              opacity: 0,
            },
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
    }
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  const setImageRef = (el: HTMLImageElement | null, index: number) => {
    imagesRef.current[index] = el;
  };

  const setTextRef = (el: HTMLParagraphElement | null, index: number) => {
    textRefs.current[index] = el;
  };

  return (
    <div className="gallerypage relative min-h-screen overflow-hidden">
      <div
        className="z-10000 fixed inset-0 opacity-45"
        dangerouslySetInnerHTML={{
          __html: `<spline-viewer url="https://prod.spline.design/csAC-rSJnjVQZbBi/scene.splinecode" style="width: 100%; height: 100%;"></spline-viewer>`,
        }}
      ></div>

      <div className="relative z-10 pt-[9.4rem] text-white">
        {loading ? ( 
          <SkeletonLoader />
        ) : (
          <div className="flex w-full flex-col gap-24">
            {data.map((item: DataItem, index: number) => (
              <div
                className="flex h-[45vh] w-full"
                key={index}
                id={`row${index + 1}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="flex h-full flex-1 justify-center md:justify-end">
                      <div className="img-container right flex h-full w-3/4 flex-col justify-between">
                        <Image
                          ref={(el) => setImageRef(el, index)}
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full border-[8px] border-[#B8B8B840] object-cover backdrop-blur-[7.6rem]"
                          unoptimized
                          width={500}
                          height={500}
                        />
                        <div className="my-6 flex items-center justify-start text-lg lg:text-xl 2xl:text-3xl 3xl:text-6xl">
                          <p
                            ref={(el) => setTextRef(el, index * 2)}
                            className="pr-9 font-outfit text-white"
                          >
                            {item.year}
                          </p>
                          <p
                            ref={(el) => setTextRef(el, index * 2 + 1)}
                            className="font-rp1 text-white"
                          >
                            {item.title}
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
                        <Image
                          ref={(el) => setImageRef(el, index)}
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full border-[7px] border-[#B8B8B840] object-cover backdrop-blur-[121.58px]"
                          unoptimized
                          width={500}
                          height={500}
                        />
                        <div className="my-6 flex items-center justify-start text-lg lg:text-xl 2xl:text-3xl 3xl:text-6xl">
                          <p
                            ref={(el) => setTextRef(el, index * 2)}
                            className="pr-9 font-outfit text-white"
                          >
                            {item.year}
                          </p>
                          <p
                            ref={(el) => setTextRef(el, index * 2 + 1)}
                            className="font-rp1 text-white"
                          >
                            {item.title}
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
        )}
      </div>
    </div>
  );
};

export default Gallery;
