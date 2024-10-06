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
      const reqheight = links.item(0).clientHeight;

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
          height: reqheight,
        });
        if (links[curr])
          gsap.to(links[curr], {
            color: "#01A3F5",
          });
      }

      links.forEach((link, index) => {
        link.addEventListener("mouseenter", () => {
          console.log("hovered");
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
        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            color: "white",
          });
          if (curr !== undefined) {
            gsap.to(animation, {
              width: linkPositions[curr]?.width,
              left: finalLeft,
              duration: 0.7,
              ease: "expo.out",
            });
            if (links[curr])
              gsap.to(links[curr], {
                color: "#01A3F5",
              });
          }
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
      <div className="sticky top-0 flex items-center justify-between px-[2vw] text-center text-[1.5vw] text-white">
        <Link href="/">
          <Image
            src="/Landing/tecnoesisLogo.webp"
            width={300}
            height={80}
            alt="Tecno 24 logo"
            className="h-auto w-[20vw]"
          />
        </Link>
        <section className="flex h-max items-center rounded-full bg-[#5252522a] px-[0.27vw] py-[0.27vw] shadow-[inset_0_2.5px_2.5px_rgba(255,255,255,0.3),inset_0_-2.5px_2.5px_rgba(255,255,255,0.3)] backdrop-blur-md">
          <div className="animation absolute -z-10 -ml-1 hidden rounded-full bg-gradient-to-t from-[#00507957] to-[#01A3F557] text-[#01A3F5] lg:block tv1:ml-1"></div>
          <Link
            href="/home"
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw]"
          >
            Home
          </Link>
          <Link
            href="/home#about"
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw] hover:text-[#01A3F5]"
          >
            About
          </Link>
          <Link
            href="/home#sponsors"
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw] hover:text-[#01A3F5]"
          >
            Sponsors
          </Link>
          <Link
            href="/modules"
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw] hover:text-[#01A3F5]"
          >
            Modules
          </Link>
          <Link
            href="/team"
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw]"
          >
            Team
          </Link>
        </section>
        <section className="backdrop-blur-lg">
          <Login />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
