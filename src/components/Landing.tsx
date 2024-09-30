import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from "usehooks-ts";
import {gsap} from 'gsap';

const Landing = () => {
    const tablet = useMediaQuery("(min-width: 500px)"); // Use camelCase for variable names
    const desktop = useMediaQuery("(min-width: 800px)");

    const tl = gsap.timeline({ease: "slow", duration: 1});


    document.addEventListener("mousemove", (e: MouseEvent) => {
        gsap.utils.toArray<HTMLElement>(".movable").forEach((layer: HTMLElement) => {
          const depth: number = layer.dataset.depth ? parseFloat(layer.dataset.depth) : 1;
          const moveX = ((e.pageX)-(window.innerWidth/2));
          const moveY = ((e.pageY)-(window.innerHeight/2));
          tl.to(layer, {
            x: -moveX/depth,
            y: -moveY/(depth*4)
          }, 0);
        });
      });

    return (
        <div className="relative h-[100vh] flex flex-col items-center justify-around text-[#ffffff] overflow-hidden">
            <div className="flex flex-col justify-center items-center p-[4rem] lg:p-0">
                <Image
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727623666/tecno-24/3_l3upkw.png"
                alt="Tecnoesis Logo"
                className="movable h-[10rem] z-1 w-[20rem] md:h-[15rem] md:w-[30rem] lg:w-[45rem] lg:h-[25rem]"
                width={1000}
                height={1000}
                data-depth={80}
                />
            </div>
            <div className="mt-[10rem] w-[100vw] min-h-[100vh] bg-cover bg-center">
                <Image 
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727601952/tecno-24/dsf1-ezgif.com-png-to-webp-converter_bge52x.webp" 
                    className='movable absolute top-[25%] left-0 h-[60%] md:h-[80%] md:w-[100%] z-2' 
                    width={1000} 
                    height={1000} 
                    alt="cover"
                    data-depth={75} 
                />
                {/* <Image height={1200} width={1200}
 alt="a new world" src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727705442/tecno-24/newworld_tbupia.png" className='movable absolute left-0 bottom-[4.5rem] z-3' data-depth={50} /> */}
                <img src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727705467/tecno-24/glowing-ball-unscreen_isib6t.gif" alt="glowing ball" className='movable absolute bottom-[3.6rem] scale-[2] mobile2:scale-[1.5] mobile4:scale-[1.8] lg:scale-[2.2] lg:left-[35%] mobile4:bottom-[3rem] tablet1:bottom-[2.2rem] sm:bottom-1rem tablet1:left-[10%] sm:left-[15%] lg:bottom-[1rem] z-4 left-0 mobile4:left-[3.5%] md:left-[25%] opacity-75' data-depth={50} />
                <img 
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727624423/tecno-24/Layer_1_qxjn7z.png" 
                    alt="rock" 
                    className="movable absolute bottom-0 left-0 scale-[1] mobile2:scale-[0.8] mobile2:bottom-[-4.2rem] mobile4:left-[20%] sm:left-[25%] mobile4:bottom-[-4rem] md:left-[30%] lg:left-[33%] lg:scale-[1.4] lg:bottom-[0.8rem] z-5"
                    data-depth={20}
                />
            </div>
        </div>
    );
};

export default Landing;
