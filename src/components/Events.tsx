'use client';

import { useState, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

interface Event {
  id: string;
  name: string;
  posterImage: string;
}

interface ApiResponse {
  status: number;
  msg: Event[];
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/event`);
        if (response.data.status === 200) {
          setEvents(response.data.msg);
        }
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };

    void fetchEvents();
    
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
  }, [events]);

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

      <div className="relative z-10 text-white pt-[9.4rem]">
        <div className="w-full flex flex-col gap-[10rem]">
          {Array.from({ length: Math.ceil(events.length / 3) }).map((_, rowIndex) => (
            <div className="flex w-full h-[45vh] justify-center gap-[7rem]" key={rowIndex}>
              {events.slice(rowIndex * 3, rowIndex * 3 + 3).map((item: Event, index: number) => (
                <div className="w-[22.2%] h-full" key={item.id}>
                  <Image
                    ref={(el) => setImageRef(el, rowIndex * 3 + index)}
                    src={item.posterImage}
                    alt={item.name}
                    className="object-cover w-full h-full border-[8px] border-[#B8B8B840] backdrop-blur-[7.6rem]"
                    unoptimized
                    width={442}
                    height={572}
                  />
                  <div className="flex justify-start items-center my-6"> 
                    <p ref={(el) => setTextRef(el, rowIndex * 6 + index * 2)} className="text-white pr-9 font-outfit">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="w-full h-72"></div>
        </div>
      </div>
    </div>
  );
};

export default Events;
