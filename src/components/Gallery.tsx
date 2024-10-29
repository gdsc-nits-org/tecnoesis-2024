"use client";

import { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import data from "../../public/data/gallery.json";

gsap.registerPlugin(ScrollTrigger);

interface DataItem {
  image: string;
  title: string;
  year: string;
}

const SkeletonLoader: React.FC = () => (
  <div className="relative z-10 pt-[6.9rem] text-white">
    <div className="flex w-full flex-col gap-24">
      {[1, 2].map((_, index) => (
        <div className="flex h-[45vh] w-full" key={index}>
          <div className="flex h-full flex-1 justify-center">
            <div className="img-container right flex h-full w-3/4 flex-col justify-between">
              <div className="relative h-full w-full bg-gray-800 rounded-xl animate-pulse"></div>
              <div className="my-6 flex items-center rounded-xl">
                <p className="pr-9 bg-gray-700 h-4 w-24 animate-pulse rounded-xl"></p>
              </div>
            </div>
          </div>
          <div className="hidden flex-1 md:flex"></div>
        </div>
      ))}
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
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js";
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
                start: "top 95%",
                end: "bottom 85%",
                scrub: true,
                markers: false,
              },
            }
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
                start: "top 100%",
                toggleActions: "play none none reverse",
              },
            }
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
    <div className="gallerypage relative min-h-screen overflow-hidden bg-none">
      <div
        className="z-10000 fixed inset-0 opacity-45"
        dangerouslySetInnerHTML={{
          __html: `<spline-viewer url="https://prod.spline.design/csAC-rSJnjVQZbBi/scene.splinecode" style="width: 100%; height: 100%;"></spline-viewer>`,
        }}
      ></div>
      <div className="relative z-10">
        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className="flex w-full flex-col gap-24 pt-[7.7rem]">
            {data.map((item: DataItem, index: number) => (
              <div className="flex h-[45vh] w-full" key={index} id={`row${index + 1}`}>
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
                          <p ref={(el) => setTextRef(el, index * 2)} className="pr-9 font-outfit text-white">
                            {item.year}
                          </p>
                          <p ref={(el) => setTextRef(el, index * 2 + 1)} className="font-rp1 text-white">
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
                          <p ref={(el) => setTextRef(el, index * 2)} className="pr-9 font-outfit text-white">
                            {item.year}
                          </p>
                          <p ref={(el) => setTextRef(el, index * 2 + 1)} className="font-rp1 text-white">
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
