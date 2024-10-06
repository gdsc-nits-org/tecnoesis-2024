"use client";

import { Outfit } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
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
        if (linkPositions[curr] && linkPositions[0])
          finalLeft = linkPositions[curr]?.left - linkPositions[0]?.left + 8;
        gsap.set(animation, {
          width: linkPositions[curr]?.width,
          left: finalLeft,
        });
        if (links[curr])
          gsap.to(links[curr], {
            color: "#01A3F5",
          });
      }

      links.forEach((link, index) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            color: "#01A3F5",
          });
          links.forEach((ink, index) => {
            if (ink != link) {
              gsap.to(ink, {
                color: "white",
              });
            }
          });
          let pickleft = 0;
          if (linkPositions[index] && linkPositions[0])
            pickleft = linkPositions[index]?.left - linkPositions[0]?.left + 8;
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
    <nav
      className={
        outin.className +
        " absolute top-0 z-20 w-screen bg-nav-gradient to-transparent"
      }
    >
      <div className="text-md sticky top-0 flex w-screen items-center justify-between px-3 text-center text-white lg:pl-0 lg:pr-8 min-[1350px]:text-2xl tv1:pl-[2.5vw] tv1:pr-[4vw] tv1:text-4xl tv2:pl-[3vw] tv2:pr-[5vw] tv2:text-6xl">
        <Link href="/">
          <Image
            src="/Landing/tecnoesisLogo.webp"
            width={300}
            height={80}
            alt="Tecno 24 logo"
            className="h-auto w-[150px] lg:w-[200px] min-[1350px]:w-auto tv1:w-[400px] tv2:w-[600px]"
          />
        </Link>
        <section className="flex h-max rounded-full bg-[#5252522a] px-2 py-2 shadow-[inset_0_2.5px_2.5px_rgba(255,255,255,0.3),inset_0_-2.5px_2.5px_rgba(255,255,255,0.3)] backdrop-blur-md tv2:py-8 tv2:pl-8 tv2:pr-0">
          <div className="animation absolute -z-10 hidden h-[3rem] rounded-full bg-gradient-to-t from-[#00507957] to-[#01A3F557] text-[#01A3F5] lg:block tv1:h-[3.5rem] tv2:-mt-4 tv2:ml-2 tv2:h-[7rem]"></div>
          <Link
            href="/home"
            className="navOpt cursor-pointer rounded-full px-4 py-1 lg:px-8 lg:py-2 tv2:px-16"
          >
            Home
          </Link>
          <Link
            href="/home#about"
            className="navOpt cursor-pointer rounded-full px-4 py-1 hover:text-[#01A3F5] lg:px-8 lg:py-2 tv2:px-16"
          >
            About
          </Link>
          <Link
            href="/home#sponsors"
            className="navOpt cursor-pointer rounded-full px-4 py-1 hover:text-[#01A3F5] lg:px-8 lg:py-2 tv2:px-16"
          >
            Sponsors
          </Link>
          <Link
            href="/modules"
            className="navOpt cursor-pointer rounded-full px-4 py-1 hover:text-[#01A3F5] lg:px-8 lg:py-2 tv2:px-16"
          >
            Modules
          </Link>
          <Link
            href="/team"
            className="navOpt cursor-pointer rounded-full px-4 py-1 lg:px-8 lg:py-2 tv2:px-16"
          >
            Team
          </Link>
        </section>
        <section className="backdrop-blur-lg tv2:w-[20rem]">
          <Login />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
