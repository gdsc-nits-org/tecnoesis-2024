'use client';

import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import data from '../../public/data/data.json';

gsap.registerPlugin(ScrollTrigger);

interface DataItem {
  image: string;
  title: string;
  year: string;
}

const Gallery: React.FC = () => {
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);

  useLayoutEffect(() => {
    const images = imagesRef.current;
    const texts = textRefs.current;

    images.forEach((img) => {
      if (img) {
        gsap.fromTo(
          img,
          { 
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            scale: 0.8,
            opacity: 0
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
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const setImageRef = (el: HTMLImageElement | null, index: number) => {
    imagesRef.current[index] = el;
  };

  const setTextRef = (el: HTMLParagraphElement | null, index: number) => {
    textRefs.current[index] = el;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="fixed inset-0 z-10000"
        dangerouslySetInnerHTML={{
          __html: `<spline-viewer url="https://prod.spline.design/csAC-rSJnjVQZbBi/scene.splinecode" style="width: 100%; height: 100%;"></spline-viewer>`,
        }}
      ></div>

      <div className="relative z-10 text-white pt-[16.3rem]">
        <div className="w-full flex flex-col gap-24">
          {data.map((item: DataItem, index: number) => (
            <div className="flex w-full h-[45vh]" key={index} id={`row${index + 1}`}>
              {index % 2 === 0 ? (
                <>
                  <div className="flex-1 flex justify-end h-full">
                    <div className="img-container right w-3/4 h-full flex flex-col justify-between">
                      <Image
                        ref={(el) => setImageRef(el, index)}
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full border-[8px] border-[#B8B8B840] backdrop-blur-[7.6rem]"
                        unoptimized
                        width={500}
                        height={500}
                      />
                      <div className="flex justify-start items-center my-6"> 
                        <p ref={(el) => setTextRef(el, index * 2)} className="text-white pr-9 font-outfit">{item.year}</p>
                        <p ref={(el) => setTextRef(el, index * 2 + 1)} className="text-white font-rp1">{item.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </>
              ) : (
                <>
                  <div className="flex-1"></div>
                  <div className="flex-1 flex justify-start h-full">
                    <div className="img-container left w-3/4 h-full flex flex-col justify-between">
                      <Image
                        ref={(el) => setImageRef(el, index)}
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full border-[7px] border-[#B8B8B840] backdrop-blur-[121.58px]"
                        unoptimized
                        width={500}
                        height={500}
                      />
                      <div className="flex justify-start items-center my-6"> 
                        <p ref={(el) => setTextRef(el, index * 2)} className="text-white pr-9 font-outfit">{item.year}</p>
                        <p ref={(el) => setTextRef(el, index * 2 + 1)} className="text-white font-rp1">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="w-full h-72"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
