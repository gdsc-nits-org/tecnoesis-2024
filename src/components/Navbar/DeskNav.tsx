"use client"

import { Outfit } from "next/font/google";
import Image from "next/image";
import gsap from 'gsap';
import Link from "next/link";
import { useLayoutEffect } from "react";
import Login from "../GoogleAuth";

const outin = Outfit({
    subsets: ["latin"],
    weight: ["400"],
});

const Navbar = () => {
    useLayoutEffect(() => {
        let currentPage = "sdhf";
        if (window) {
            currentPage = window.location.pathname;
        }
        const links = document.querySelectorAll(".navOpt");
        const animation = document.querySelector(".animation");

        if (animation && links.length > 0) {
            const linkPositions = Array.from(links).map((link) => {
                const { width, left } = (link as HTMLElement).getBoundingClientRect();
                return { width, left };
            });

            const navMap = new Map([
                ["/home", 0],
                ["/modules", 3],
                ["/team", 4],
            ]);
            const curr = navMap.get(currentPage);
            let finalLeft = 4;
            if (curr !== undefined) {
                if(linkPositions[curr] && linkPositions[0])finalLeft = linkPositions[curr]?.left-linkPositions[0]?.left + 8;
                gsap.set(animation, { width: linkPositions[curr]?.width, left: finalLeft });
                if (links[curr]) gsap.to(links[curr], {
                    color: "#01A3F5"
                })
            }

            links.forEach((link, index) => {
                link.addEventListener("mouseenter", () => {
                    gsap.to(link, {
                        color: "#01A3F5"
                    })
                    links.forEach((ink, index) => {
                        if (ink != link) {
                            gsap.to(ink, {
                                color: "white"
                            })
                        }
                    })
                    let pickleft = 0;
                    if (linkPositions[index] && linkPositions[0]) pickleft = linkPositions[index]?.left - linkPositions[0]?.left + 8;
                    gsap.to(animation, {
                        width: linkPositions[index]?.width,
                        left: pickleft,
                        duration: 0.7,
                        ease: "expo.out",
                    });
                });
            });
        }
    }, []);

    return (
        <nav className={outin.className + " absolute top-0 z-20 bg-nav-gradient to-transparent w-screen"}>
            <div className="text-center text-white flex justify-between items-center px-3 lg:pr-8 lg:pl-0 tv1:pr-[4vw] tv1:pl-[2.5vw] tv2:pr-[5vw] tv2:pl-[3vw] w-screen sticky top-0 text-md min-[1350px]:text-2xl tv1:text-4xl tv2:text-6xl">
                <Link href="/">
                    <Image src="/Landing/tecnoesisLogo.webp" width={300} height={80} alt="Tecno 24 logo"
                        className="min-[1350px]:w-auto h-auto w-[150px] lg:w-[200px] tv1:w-[400px] tv2:w-[600px]"
                    />
                </Link>
                <section className=" flex backdrop-blur-md
           shadow-[inset_0_2.5px_2.5px_rgba(255,255,255,0.3),inset_0_-2.5px_2.5px_rgba(255,255,255,0.3)]
         bg-[#5252522a] rounded-full h-max px-2 py-2 tv2:pl-8 tv2:pr-0 tv2:py-8">
                    <div className="animation absolute hidden lg:block -z-10 h-[3rem] tv1:h-[3.5rem] tv2:h-[7rem] tv2:ml-2 tv2:-mt-4 rounded-full bg-gradient-to-t from-[#00507957] to-[#01A3F557] text-[#01A3F5]"></div>
                    <Link href="/home" className="navOpt py-1 lg:py-2 px-4 tv2:px-16 lg:px-8 rounded-full cursor-pointer">Home</Link>
                    <Link href="/home#about" className="navOpt py-1 lg:py-2 px-4 tv2:px-16 lg:px-8 rounded-full cursor-pointer hover:text-[#01A3F5]">About</Link>
                    <Link href="/home#sponsors" className="navOpt py-1 lg:py-2 px-4 tv2:px-16 lg:px-8 rounded-full cursor-pointer hover:text-[#01A3F5]">Sponsors</Link>
                    <Link href="/modules" className="navOpt py-1 lg:py-2 px-4 tv2:px-16 lg:px-8 rounded-full cursor-pointer hover:text-[#01A3F5]">Modules</Link>
                    <Link href="/team" className="navOpt py-1 lg:py-2 px-4 tv2:px-16 lg:px-8 rounded-full cursor-pointer">Team</Link>
                </section>
                <section className=" backdrop-blur-lg tv2:w-[20rem]">
                    <Login />
                </section>
            </div>
        </nav>
    );
};


export default Navbar;