import React, { useRef, useEffect, useCallback, useState } from "react";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import "~/styles/footer.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const LandingFooter = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      // Make it relative to client (inside viewport)
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <footer className="relative flex min-h-[50vh] w-full flex-col overflow-hidden bg-black">
      {/* Fixing Particles to footer area */}
      <div className="inset-0 z-0 h-full w-full">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "connect",
                },
              },
              modes: {
                connect: {
                  distance: 100,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 120,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff", // Adjust the color to ensure visibility
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: false, // Disable particle movement
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: isMobile ? 40 : 80, // Adjust number of particles for mobile
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0 h-full w-full"
        />
      </div>

      {/* Glow Effect */}
      <div ref={glowRef} className="glow z-10"></div>

      {/* Footer Content */}
      <div className="back-cover z-20 flex h-full w-full flex-grow flex-col items-center justify-between bg-[url('/assets/footer/imgs/minimal-globe-technology-business-background_53876-117190%201.webp')] bg-cover bg-bottom pt-[5vh]">
        <div className="flex h-full w-full flex-col items-center justify-between">
          <div className="tecno-big-img flex h-4/6 w-9/12 flex-col items-center justify-center bg-contain"></div>

          <button className="campus-ambassador-button">
            Become Our Campus Ambassador
          </button>
        </div>

        <div className="bottom-content-container mt-auto flex w-full flex-col items-center justify-end py-8">
          <h2 className="footer-middle-text mb-4 mb-6 flex items-center bg-gradient-to-b from-[#E9F8FF] to-[rgba(144,168,180,0.75)] bg-clip-text text-center font-['ReadyPlayerOne',sans-serif] text-[24px] text-xl font-[500] leading-[1.5] tracking-[0.3em] text-transparent text-white sm:text-2xl md:text-3xl lg:text-4x">
            CONTACT US
          </h2>
          <span className="mb-6 flex justify-center gap-x-3.5">
            <Link
              href={"https://www.instagram.com/tecnoesis.nits/"}
              aria-label="Instagram"
            >
              <IoLogoInstagram className="footer-icons text-2xl text-white hover:text-gray-200 sm:text-3xl md:text-4xl lg:text-5xl" />
            </Link>
            <Link
              href={"https://www.facebook.com/tecnoesis.nits"}
              aria-label="Facebook"
            >
              <IoLogoFacebook className="footer-icons text-2xl text-white hover:text-gray-200 sm:text-3xl md:text-4xl lg:text-5xl" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/tecnoesis-nit-silchar/"}
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin className="footer-icons text-2xl text-white hover:text-gray-200 sm:text-3xl md:text-4xl lg:text-5xl" />
            </Link>
            <Link href={"https://x.com/tecnoesis_nits"} aria-label="Twitter">
              <FaXTwitter className="footer-icons text-2xl text-white hover:text-gray-200 sm:text-3xl md:text-4xl lg:text-5xl" />
            </Link>
          </span>
          <div className="footer-below-text flex items-center text-center text-[1rem] text-sm font-normal leading-[1.5] tracking-[0.2em] text-white sm:text-base md:text-lg lg:text-xl">
            Designed in collaboration with GDG Silchar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
