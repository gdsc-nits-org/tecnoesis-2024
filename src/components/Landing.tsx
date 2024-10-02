import React, { useEffect } from 'react';
import Image from 'next/image';
import { useMediaQuery } from "usehooks-ts";
import { gsap } from 'gsap';
import Logo from "../../public/Landing/tecnoesisLogo.webp";
import Buildings from "../../public/Landing/buildings.webp";
import glowingBall from "../../public/Landing/glowingBall.gif";
import player from "../../public/Landing/player.svg";
import newWorld from "../../public/Landing/newWorld.webp";



const Landing: React.FC = () => {
    const tablet = useMediaQuery("(min-width: 500px)");
    const desktop = useMediaQuery("(min-width: 800px)");

    const tl = gsap.timeline({ ease: "slow", duration: 1 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            gsap.utils.toArray<HTMLElement>(".movable").forEach((layer: HTMLElement) => {
                const depth: number = layer.dataset.depth ? parseFloat(layer.dataset.depth) : 1;
                const moveX = e.pageX - window.innerWidth / 2;
                const moveY = e.pageY - window.innerHeight / 2;
                tl.to(layer, {
                    x: -moveX / depth,
                    y: -moveY / (depth * 4)
                }, 0);
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [tl]);

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
            <div className="w-[100vw] h-[100vh] flex items-end justify-center">
                <Image 
                    src={Buildings} 
                    className='movable absolute top-[25%] object-cover left-0 h-[60%] md:h-[80%] md:w-[100%] z-2' 
                    width={1000} 
                    height={1000} 
                    alt="cover"
                    data-depth={75} 
                />
                <div className='relative bottom-[40px] left-0 w-[100%] flex justify-center items-center scale-1 lg:scale-[1.3]'>
                    <Image 
                        width={500} 
                        height={500} 
                        src={newWorld} 
                        alt="new world" 
                        className='movable absolute scale-[1.2]' 
                        data-depth={50} 
                    />
                    <Image 
                        width={500} 
                        height={500} 
                        src={glowingBall} 
                        alt="glowing ball" 
                        className='movable absolute scale-[2] mobile2:scale-[1.5] mobile4:scale-[1.8] lg:scale-[1.6] z-4 opacity-50' 
                        data-depth={50} 
                    />
                    <Image 
                        width={500} 
                        height={500}
                        src={player} 
                        alt="rock" 
                        className="movable absolute bottom-0 scale-[2] mobile4:scale-[1.4] tablet2:scale-[2] lg:scale-[1.5] z-5"
                        data-depth={20}
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;
