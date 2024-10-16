"use client";

import { Outfit } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";
import Login from "../GoogleAuth";
import { usePathname } from "next/navigation";

const outin = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const currentPage = usePathname();

  useEffect(() => {
    const links = document.querySelectorAll<HTMLElement>(".navOpt");
    const animation = document.querySelector<HTMLElement>(".animation");

    if (animation && links.length > 0) {
      const linkPositions = Array.from(links).map((link) => {
        const { width, left } = link.getBoundingClientRect();
        return { width, left };
      });
      const reqheight = links.item(0)?.clientHeight || 0;

      const navMap = new Map<string, number>([
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
      const handlerMap = new Map<
        HTMLElement,
        { mouseEnter: () => void; mouseLeave: () => void }
      >();

      const handleMouseEnter = (link: HTMLElement, index: number) => {
        gsap.to(link, {
          color: "#01A3F5",
        });
        links.forEach((ink) => {
          if (ink !== link) {
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
      };

      const handleMouseLeave = (link: HTMLElement) => {
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
      };

      links.forEach((link, index) => {
        const mouseEnterHandler = () => handleMouseEnter(link, index);
        const mouseLeaveHandler = () => handleMouseLeave(link);
        link.addEventListener("mouseenter", mouseEnterHandler);
        link.addEventListener("mouseleave", mouseLeaveHandler);

        handlerMap.set(link, {
          mouseEnter: mouseEnterHandler,
          mouseLeave: mouseLeaveHandler,
        });
      });

      // Cleanup function to remove event listeners
      return () => {
        handlerMap.forEach((handlers, link) => {
          link.removeEventListener("mouseenter", handlers.mouseEnter);
          link.removeEventListener("mouseleave", handlers.mouseLeave);
        });
      };
    }
  }, [currentPage]);

  return (
    <nav
      className={
        outin.className +
        " sticky top-0 z-50 w-screen bg-nav-gradient to-transparent pt-[3vh]"
      }
    >
      <div className="sticky top-0 flex items-center justify-between px-[2vw] text-center text-[1.5vw] text-white">
        <Link href="/">
          <Image
            src="/assets/NavbarMobile/tecnoLogo.png"
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
