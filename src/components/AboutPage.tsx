"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CustomButton from '../components/CustomButton'





const About = () => {

    const image2WrapperRef = useRef<HTMLDivElement | null>(null);
    const image1Ref = useRef<HTMLImageElement | null>(null);
    const image2Ref = useRef<HTMLImageElement | null>(null);
    const image3Ref = useRef<HTMLImageElement | null>(null);
    const class1DivRef = useRef<HTMLDivElement | null>(null);


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
        const handleMouseMove = (event: MouseEvent) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
    
            // Animate Image 1
            if (image1Ref.current) {
                gsap.to(image1Ref.current, {
                    x: (mouseX - window.innerWidth / 2) * 0.05, // slight movement
                    y: (mouseY - window.innerHeight / 2) * 0.05,
                    duration: 0.6,
                    ease: "power3.out",
                });
            }
    
            // Animate Image 2
            if (image2Ref.current) {
                gsap.to(image2Ref.current, {
                    x: (mouseX - window.innerWidth / 2) * 0.08, // more movement
                    y: (mouseY - window.innerHeight / 2) * 0.08,
                    duration: 0.6,
                    ease: "power3.out",
                });
            }
    
            // Animate Image 3
            if (image3Ref.current) {
                gsap.to(image3Ref.current, {
                    x: (mouseX - window.innerWidth / 2) * 0.1, // more movement
                    y: (mouseY - window.innerHeight / 2) * 0.1,
                    duration: 0.6,
                    ease: "power3.out",
                });
            }
    
            // Animate class1 div
            if (class1DivRef.current) {
                gsap.to(class1DivRef.current, {
                    x: (mouseX - window.innerWidth / 2) * 0.05, // strongest magnetic effect
                    y: (mouseY - window.innerHeight / 2) * 0.05,
                    duration: 0.6,
                    ease: "power3.out",
                });
            }
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    
    
    
    return (
        <div className="flex flex-col w-screen overflow-x-hidden" >
            <div className="flex flex-col lg:flex-row items-center justify-center lg:h-[80vh] md:px-12">
                <div className="w-full h-[50vh] md:h-[30vh]  lg:w-1/3 lg:h-auto">
                    <div className=" text-gradient-blue p-10 font-rp1 text-2xl font-bold md:text-5xl text-center lg:text-left ">ABOUT NIT SILCHAR</div>
                    <div className="px-7 text-[#B5D8EABF] text-xl text-justify pb-4 font-outfit lg:text-left md:text-center md:text-3xl lg:text-xl">Tecnoesis is the annual techno-managerial event of NIT Silchar, promising all tech geeks the ideal niche of fascinating events, workshops, competitions and interactions worth a lifetime. This mega event has left its mark as of the most prominent techfests across the country. presenting the chance to let their minds run wild with ideas, fostering the inventors of the future.</div>
                </div>
                <div className="w-full h-[40vh] flex justify-center items-center lg:w-1/3 ">
                    <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-visible ">
                        <Image
                            src="https://res.cloudinary.com/dxafdfvui/image/upload/v1728465500/1_oztzxp.webp"
                            alt="Image 1"
                            className="absolute top-1/2 left-1/2 w-[30%] h-[30%] transform -translate-x-1/2 -translate-y-1/2 z-7"
                            width={250}
                            height={250}
                            objectFit="cover"
                        />
                        <div ref={image2WrapperRef} className="absolute top-1/2 left-1/2 w-[80%] h-[80%] lg:w-[60%] lg:h-[60%] transform -translate-x-1/2 -translate-y-1/2 z-6">
                            <Image
                                src="https://res.cloudinary.com/dxafdfvui/image/upload/v1728465506/2_fb0wb7.webp"
                                alt="Image 2"
                                width={250}
                                height={250}
                                objectFit="cover"
                            />
                        </div>

                        <Image
                            src="https://res.cloudinary.com/dxafdfvui/image/upload/v1728465506/Flow_7_n6z8tt.webp"
                            alt="Image 3"
                            className="absolute top-1/2 left-1/2 w-[65%] h-[65%] transform -translate-x-1/2 -translate-y-1/2 z-5"
                            width={250}
                            height={250}
                            objectFit="cover"
                        />
                        <Image
                            src="https://res.cloudinary.com/dxafdfvui/image/upload/v1728465500/dotted_ring_tcdt3j.webp"
                            alt="Image 4"
                            className="absolute top-1/2 left-1/2 w-[70%] h-[70%] transform -translate-x-1/2 -translate-y-1/2 z-4"
                            width={250}
                            height={250}
                            objectFit="cover"
                        />
                        <Image
                            src="https://res.cloudinary.com/dxafdfvui/image/upload/v1728465506/static_ring_ehsm66.webp"
                            alt="Image 5"
                            className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 z-3 object-contain scale-[1.35]"
                            width={250}
                            height={250}
                        />
                        <Image
                            src="https://res.cloudinary.com/dxafdfvui/image/upload/v1728465501/Flow_6_1_ladpab.webp"
                            alt="Image 6"
                            className="absolute top-1/2 left-1/2 w-[100%] h-[100%] transform -translate-x-1/2 -translate-y-1/2 z-2"
                            width={250}
                            height={250}
                            objectFit="cover"
                        />
                        <Image
                            src="https://res.cloudinary.com/dxafdfvui/image/upload/v1728465507/outer_ring_amzrc1.webp"
                            alt="Image 7"
                            className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 z-1 scale-[1.5] object-contain"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
                <div className="w-full h-1/2 lg:w-1/3 lg:h-auto">
                    <div className="p-7 text-gradient-blue m-10 font-rp1 text-2xl font-bold md:text-5xl text-center lg:text-right md:m-0">ABOUT US</div>
                    <div className="px-7 text-xl text-justify font-outfit text-[#B5D8EABF] pb-4 lg:text-right lg:text-xl md:text-center md:text-3xl">Tecnoesis is the annual techno-managerial event of NIT Silchar, promising all tech geeks the ideal niche of fascinating events, workshops, competitions and interactions worth a lifetime. This mega event has left its mark as of the most prominent techfests across the country. The cauldron of enthusiasm and knowledge attracts various students, presenting the chance to let their minds run wild with ideas, fostering the inventors of the future.</div>
                </div>
            </div>
            <div className="text-center p-8 flex items-center justify-center md:h-[20vh]">
                <div className="w-3/4 
               h-3 text-xs lg:w-1/5  md:w-1/2 font-outfit">
                    <CustomButton text="Download Brochure" />

                </div>

            </div>
            <div className="flex flex-col md:flex-row md:items-center 
            justify-center px-7 md:px-16 md:mb-20">
                <div className="w-full h-[40vh] overflow-visible md:h-screen flex flex-col justify-center  ">
                    <div className=" text-gradient-blue p-10 font-rp1 text-2xl font-bold md:text-5xl text-center md:text-left md:p-7 ">MODULES</div>
                    <div className="md:px-7 text-[#B5D8EABF] text-xl text-justify  pb-4 font-outfit md:text-left md:w-3/4 md:text-2xl">Tecnoesis is the annual techno-managerial event of NIT Silchar, promising all tech geeks the ideal niche of fascinating events, workshops, competitions and interactions worth a lifetime. </div>
                    <div className="text-center flex items-center md:justify-start justify-center md:pl-7">
                        <div className="w-3/4 
               h-3 text-xs lg:w-1/2 md:w-3/4 font-outfit">
                            <CustomButton text="VIew All Modules" />

                        </div>
                    </div>

                </div>
                <div className="w-full h-[50vh]  md:h-[100%]  overflow-hidden flex flex-col justify-center ">
                    <div className="relative w-full h-[300px] md:h-[500px]  top-[-60px] ">

                        <div ref={class1DivRef} className="class1 absolute top-1/2 w-[320px] md:w-[440px] left-1/2 transform -translate-x-1/2 h-1/2 flex items-center justify-center inset-0 bg-[url('https://res.cloudinary.com/dxafdfvui/image/upload/v1728624347/a33f887a52eced78d356c06b600b05c8_chf68q.webp')] bg-cover bg-center opacity-50 z-3">
                        </div>


                        <div className="relative w-full h-full">

                            <img ref={image1Ref}
                                src="https://res.cloudinary.com/dxafdfvui/image/upload/v1728624289/DFAS_ksi64o.webp"
                                alt="Image 1"
                                className="class1 absolute top-[50%] left-1/2 transform -translate-x-1/2 w-[320px] md:w-[440px] h-1/2 object-cover z-10"
                            />

                            <img ref={image2Ref}
                                src="https://res.cloudinary.com/dxafdfvui/image/upload/v1728624313/ONLI_q2feli.webp"
                                alt="Image 2"
                                className="class1 absolute top-[18%]  md:top-[20%] left-1/2 transform -translate-x-1/2 w-36 md:w-56 h-auto object-cover z-20"
                            />


                            <img ref={image3Ref}
                                src="https://res.cloudinary.com/dxafdfvui/image/upload/v1728629253/ezgif-2-181eaf98db_t96qn5.webp"
                                alt="Image 3"
                                className="class1 absolute top-[65%]  left-1/2 transform -translate-x-1/2 
                               w-[160px] md:w-[260px] h-auto object-cover z-30"
                            />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default About;