import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from "usehooks-ts";
import {gsap} from 'gsap';
import Logo from "../../public/Landing/tecnoesisLogo.webp";
import Buildings from "../../public/Landing/buildings.webp";
import glowingBall from "../../public/Landing/glowingBall.gif";
import player from "../../public/Landing/player.webp";
import newWorld from "../../public/Landing/newWorld.webp";

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
            <div className="flex flex-col justify-center items-center pt-[4rem] pb-[4rem] lg:p-0">
                <Image
                src={Logo}
                alt="Tecnoesis Logo"
                className="movable object-cover h-[10rem] z-1 w-[20rem] md:h-[15rem] md:w-[30rem] lg:w-[45rem] lg:h-[25rem]"
                width={1000}
                height={1000}
                data-depth={80}
                />
            </div>
            <div className="w-[100vw] min-h-[100vh] flex items-center justify-end">
                <Image 
                    src={Buildings} 
                    className='movable absolute top-[25%] object-cover left-0 h-[60%] md:h-[80%] md:w-[100%] z-2' 
                    width={1000} 
                    height={1000} 
                    alt="cover"
                    data-depth={75} 
                />
                {/* <Image height={1200} width={1200}
 alt="a new world" src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727705442/tecno-24/newworld_tbupia.png" className='movable absolute left-0 bottom-[4.5rem] z-3' data-depth={50} /> */}
                {/* <Image width={500} height={500} src={newWorld} alt="new world" className='movable absolute bottom-[4.8rem] scale-[1.2] left-0 tablet1:bottom-[-3.5rem] md:bottom-[-4rem] tablet1:left-[4rem] sm:left-[6.6rem] md:left-[8rem] tablet2:left-[12rem] tablet3:left-[20rem] lg:left-[30%]' data-depth={50} />
                <Image width={500} height={500} src={glowingBall} alt="glowing ball" className='movable absolute bottom-[3.6rem] scale-[2] mobile2:scale-[1.5] mobile4:scale-[1.8] lg:scale-[1.6] lg:left-[30%] mobile4:bottom-[3rem] tablet1:bottom-[-6rem] sm:bottom-1rem tablet1:left-[10%] sm:left-[15%] lg:bottom-[-5.6rem] z-4 left-0 mobile4:left-[1.5%] md:left-[15%] tablet2:left-[25%] tablet3:left-[35%] tablet25:left-[22%] tablet4:left-[33%] opacity-75' data-depth={50} />
                <Image width={500} height={500}
                    src={player} 
                    alt="rock" 
                    className="movable absolute bottom-[2.8rem] mobile1:bottom-[2.9rem] mobile1:left-[0.6rem] left-0 scale-[1] mobile2:scale-[1.2] mobile2:bottom-[3rem] mobile4:left-[5%] tablet1:bottom-[2.5rem] sm:left-[25%] mobile4:bottom-[4rem] mobile4:scale-[1.4] md:left-[30%] tablet2:bottom-[3rem] tablet2:scale-[2] lg:left-[30%] lg:scale-[1.4] lg:bottom-[3rem] z-5"
                    data-depth={20}
                /> */}
                <div className='relative bottom-[-1rem] left-0 w-[100%] flex justify-center items-center'>
                    <Image width={500} height={500} src={newWorld} alt="new world" className='movable absolute bottom-0 scale-[1.2]' data-depth={50} />
                    <Image width={500} height={500} src={glowingBall} alt="glowing ball" className='movable absolute bottom-0 scale-[2] mobile2:scale-[1.5] mobile4:scale-[1.8] lg:scale-[1.6] z-4 opacity-75' data-depth={50} />
                    <Image width={500} height={500}
                        src={player} 
                        alt="rock" 
                        className="movable absolute bottom-0 md:bottom-[4rem] tablet4:bottom-[4.3rem] lg:bottom-[6rem] scale-[1] mobile2:scale-[1.2] mobile4:scale-[1.4] tablet2:scale-[2] lg:scale-[1.5] z-5"
                        data-depth={20}
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;
