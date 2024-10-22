'use client';

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

  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const { data } = await axios.get<{ msg: Module[] }>(`${process.env.NEXT_PUBLIC_API_URL}/api/module`);
        setModules(data.msg); 
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    void fetchModules();
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js';
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
          }
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
          }
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
        className="fixed inset-0 z-10000"
        dangerouslySetInnerHTML={{
          __html: `<spline-viewer url="https://prod.spline.design/NPelTris6eEVQkKp/scene.splinecode" style="width: 100%; height: 100%;"></spline-viewer>`,
        }}
      ></div>

      <div className="relative z-10 text-white pt-[9.4rem]">
        <div className="w-full flex flex-col gap-24">
          {modules.map((module, index) => (
            <div className="flex w-full h-[45vh]" key={module.id} id={`row${index + 1}`}>
              {index % 2 === 0 ? (
                <>
                  <div className="flex-1 flex md:justify-end justify-center h-full">
                    <div className="img-container right w-3/4 h-full flex flex-col justify-between">
                      <Link href={`/allEvents/${module.id}`} className="block w-full h-full">
                        <div className="relative w-full h-full">
                          <Image
                            ref={(el) => setImageRef(el, index)}
                            src={module.coverImage}
                            alt={module.name}
                            className="object-cover w-full h-full border-[8px] border-[#B8B8B840] backdrop-blur-[7.6rem] cursor-pointer" // Ensures that the image takes the entire space
                            unoptimized
                            fill
                          />
                        </div>
                      </Link>
                      <div className="flex justify-start items-center my-6 cursor-pointer">
                        <p ref={(el) => setTextRef(el, index * 2)} className="text-white pr-9 font-outfit">
                          {module.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:flex"></div>
                </>
              ) : (
                <>
                  <div className="flex-1 hidden md:flex"></div>
                  <div className="flex-1 flex md:justify-start justify-center h-full">
                    <div className="img-container left w-3/4 h-full flex flex-col justify-between">
                      <Link href={`/allEvents/${module.id}`} className="block w-full h-full">
                        <div className="relative w-full h-full">
                          <Image
                            ref={(el) => setImageRef(el, index)}
                            src={module.coverImage}
                            alt={module.name}
                            className="object-cover w-full h-full border-[7px] border-[#B8B8B840] backdrop-blur-[121.58px] cursor-pointer" // Ensures that the image takes the entire space
                            unoptimized
                            fill
                          />
                        </div>
                      </Link>
                      <div className="flex justify-start items-center my-6 cursor-pointer">
                        <p ref={(el) => setTextRef(el, index * 2)} className="text-white pr-9 font-outfit">
                          {module.name}
                        </p>
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

export default Modules;
