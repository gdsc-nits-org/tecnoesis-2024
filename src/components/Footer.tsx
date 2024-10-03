import React, { useRef, useEffect, useCallback, useState } from "react";
import { Oxanium } from "next/font/google";
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

const oxanium = Oxanium({ subsets: ["latin"] });

const Footer = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${e.pageX - 50}px, ${e.pageY - 50}px)`;
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
    <footer className="relative w-full flex flex-col items-center justify-end bg-black">
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
              value: "#ffffff00",
            },
            links: {
              color: "#ffffff00",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: isMobile ? 40 : 80,
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
        className="absolute left-0 top-0 z-0 h-full w-full"
      />
      <div ref={glowRef} className="glow z-10"></div>
      <div className="back-cover z-20 flex w-full flex-col items-center justify-end">
        <div className="tecno-big-img"></div>
        <button className="campus-ambassador-button">
          Become Our Campus Ambassador
        </button>
        <div className="bottom-content mb-8 flex flex-col items-center">
          <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-white">CONTACT US</h2>
          <span className="social-links mb-4 flex space-x-4 sm:space-x-6">
            <Link
              href={"https://www.instagram.com/tecnoesis.nits/"}
              aria-label="Instagram"
            >
              <IoLogoInstagram className="text-2xl sm:text-3xl text-white hover:text-gray-200" />
            </Link>
            <Link
              href={"https://www.facebook.com/tecnoesis.nits"}
              aria-label="Facebook"
            >
              <IoLogoFacebook className="text-2xl sm:text-3xl text-white hover:text-gray-200" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/tecnoesis-nits"}
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin className="text-2xl sm:text-3xl text-white hover:text-gray-200" />
            </Link>
            <Link
              href={"https://twitter.com/tecnoesis_nits"}
              aria-label="Twitter"
            >
              <FaXTwitter className="text-2xl sm:text-3xl text-white hover:text-gray-200" />
            </Link>
          </span>
          <div className="text-center text-sm sm:text-base text-white">
            Designed in collaboration with GDG Silchar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;