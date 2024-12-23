"use client";

import { Outfit } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import Login from "../GoogleAuth";
import { usePathname, useRouter } from "next/navigation";

const outin = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const currentPage = usePathname();
  const [isResize, setIsResize] = useState(false);
  window.addEventListener("resize", () => setIsResize(!isResize));
  const router = useRouter();
  const [section, setSection] = useState<"" | "sponsors" | "about">("");

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
        ["/gallery", 1],
        ["/spark", 2],
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
        links.forEach((link) => {
          if (link !== links[curr]) {
            gsap.to(link, {
              color: "white",
            });
          }
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

        handlerMap.set(link, {
          mouseEnter: mouseEnterHandler,
          mouseLeave: mouseLeaveHandler,
        });
      });

      return () => {
        handlerMap.forEach((handlers, link) => {
          link.removeEventListener("mouseenter", handlers.mouseEnter);
          link.removeEventListener("mouseleave", handlers.mouseLeave);
        });
      };
    }
  }, [currentPage, isResize]);

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
        links.forEach((link) => {
          if (link !== links[curr]) {
            gsap.to(link, {
              color: "white",
            });
          }
        });
        if (links[curr])
          gsap.to(links[curr], {
            color: "#01A3F5",
          });
      }
    }
  }, [currentPage]);

  useEffect(() => {
    const elempos = document
      .getElementById(section)
      ?.getBoundingClientRect().top;
    if (elempos)
      window.scrollTo({
        top: elempos + window.scrollY - 240,
        behavior: "smooth",
      });
  }, [currentPage]);
  const [audio] = useState(new Audio("/assets/Landing/outro.mp3"));
  const handleMoveOut = () => {
    return (audio.volume = 0.5), audio.play();
  };
  return (
    <nav
      className={
        outin.className +
        " sticky top-0 z-50 w-screen bg-nav-gradient to-transparent"
      }
    >
      <div className="flex items-center justify-between px-[5vw] text-center text-[1.3vw] text-white">
        <Link href="/" onClick={handleMoveOut}>
          <Image
            src="/assets/Landing/tecnoesisLogo.webp"
            width={300}
            height={80}
            alt="Tecno 24 logo"
            className="h-auto w-[18vw]"
          />
        </Link>
        <section className="flex h-max items-center rounded-full bg-[#5252522a] px-[0.25vw] py-[0.27vw] shadow-[inset_0_2.5px_2.5px_rgba(255,255,255,0.3),inset_0_-2.5px_2.5px_rgba(255,255,255,0.3)] backdrop-blur-md">
          <div className="animation absolute -z-10 -ml-1 hidden rounded-full bg-gradient-to-t from-[#00507957] to-[#01A3F557] text-base text-[#01A3F5] lg:block tv1:ml-1"></div>
          <Link
            href="/home"
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw] text-base lg:text-xl 2xl:text-2xl 3xl:text-6xl"
          >
            Home
          </Link>
          {/* <button
            onClick={() => {
              if (currentPage != "/home") router.push("/home");
              setSection("about");
              const elempos = document
                .getElementById("about")
                ?.getBoundingClientRect().top;
              if (elempos)
                window.scrollTo({
                  top: elempos + window.scrollY - 210,
                  behavior: "smooth",
                });
            }}
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw] text-base hover:text-[#01A3F5] lg:text-xl 2xl:text-2xl 3xl:text-6xl"
          >
            About
          </button> */}
          <Link
            href="/gallery"
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw] text-base hover:text-[#01A3F5] lg:text-xl 2xl:text-2xl 3xl:text-6xl"
          >
            Gallery
          </Link>
          <Link
            href="/spark"
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw] text-base hover:text-[#01A3F5] lg:text-xl 2xl:text-2xl 3xl:text-6xl"
          >
            Spark
          </Link>
          <Link
            href="/modules"
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw] text-base hover:text-[#01A3F5] lg:text-xl 2xl:text-2xl 3xl:text-6xl"
          >
            Modules
          </Link>
          <Link
            href="/team"
            className="navOpt cursor-pointer rounded-full px-[2vw] py-[0.54vw] text-base lg:text-xl 2xl:text-2xl 3xl:text-6xl"
          >
            Team
          </Link>
        </section>
        <section className="mr-[-1vw] flex min-w-[18vw] justify-center pr-2">
          <Login />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
