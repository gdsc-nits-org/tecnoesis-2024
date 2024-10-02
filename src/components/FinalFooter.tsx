"use client";
import React, { useRef, useEffect, useCallback, useState } from "react";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import CustomButton from "./CustomButton";

const LandingFooter = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mouseInsideFooter, setMouseInsideFooter] = useState(false);

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
      glowRef.current.style.transform = `translate(${e.layerX - 150}px, ${e.layerY - 150}px)`;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particlesArray: Particle[] = [];
    const mouse = { x: 0, y: 0 };
    const numParticles = 100;
    canvas.width = window.innerWidth;
    canvas.height = 300;

    class Particle {
      x: number;
      y: number;
      size: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
      }

      draw() {
        if (ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fillStyle = "rgba(144,168,180,0.75)";
          ctx.fill();
        }
      }
    }

    function initParticles() {
      particlesArray.length = 0;
      for (let i = 0; i < numParticles; i++) {
        if (canvas) {
          const x: number = Math.random() * canvas.width;
          const y: number = Math.random() * canvas.height;
          particlesArray.push(new Particle(x, y));
        }
      }
    }

    function connectParticles() {
      for (let a = 0; a < particlesArray.length; a++) {
        const particleA = particlesArray[a];
        if (particleA) {
          const dx = mouse.x - particleA.x;
          const dy = mouse.y - particleA.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            for (let b = a + 1; b < particlesArray.length; b++) {
              const particleB = particlesArray[b];
              if (particleB) {
                const dxB = particleB.x - particleA.x;
                const dyB = particleB.y - particleA.y;
                const distanceB = Math.sqrt(dxB * dxB + dyB * dyB);

                if (distanceB < 80 && ctx) {
                  if (isMobile) ctx.strokeStyle = "rgba(144,168,180,0)";
                  else ctx.strokeStyle = "rgba(144,168,180,0.75)";
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(particleA.x, particleA.y);
                  ctx.lineTo(particleB.x, particleB.y);
                  ctx.stroke();
                }
              }
            }
          }
        }
      }
    }

    function animateParticles() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      for (const particle of particlesArray) {
        if (particle) {
          particle.draw();
        }
      }
      connectParticles();
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
      initParticles();
    });

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.layerX;
      mouse.y = event.layerY - canvas.offsetTop;
    });

    const footerElement = document.querySelector("footer");
    if (footerElement) {
      footerElement.addEventListener("mouseenter", () =>
        setMouseInsideFooter(true),
      );
      footerElement.addEventListener("mouseleave", () =>
        setMouseInsideFooter(false),
      );
    }
  }, [isMobile]);

  return (
    <>
      <footer className="relative flex min-h-[50vh] w-full flex-col overflow-hidden bg-black">
        <div
          className="bg-[linear-gradient(black, #000000)] z-50 mb-[-150px] h-[180px] w-full"
          style={{
            background:
              "linear-gradient(#000000, #0000009e, rgb(0 0 0 / 33%), #00000000)",
          }}
        ></div>
        <div className="inset-0 z-0 w-full">
          <canvas
            ref={canvasRef}
            style={{
              display: "block",
              background: "#000",
              position: "absolute",
              zIndex: "-2",
            }}
          ></canvas>
        </div>

        {mouseInsideFooter && !isMobile ? (
          <div
            ref={glowRef}
            className="glow duration-[50ms] pointer-events-none absolute left-0 top-0 z-30 h-[300px] w-[300px] scale-[2] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.212),_rgba(255,255,255,0.203),_rgba(255,255,255,0.112),_rgba(255,255,255,0.057),_rgba(255,255,255,0.018),_rgba(255,255,255,0),_rgba(255,255,255,0))] bg-scroll opacity-50 bg-blend-difference shadow-[0_0_15px_10px_rgba(255,255,255,0.016)] transition-transform ease-linear"
          ></div>
        ) : (
          ""
        )}

        <div className="back-cover z-20 flex h-full w-full flex-grow flex-col items-center justify-between bg-[url('/assets/footer/imgs/minimal-globe-technology-business-background_53876-117190%201.webp')] bg-cover bg-bottom pt-[5vh]">
          <div className="flex h-full w-full flex-col items-center justify-between">
            <div className="tecno-big-img mb-0 mt-[150px] flex h-4/6 h-[40vh] h-[50vh] w-9/12 w-full flex-col items-center justify-center bg-[url('/assets/footer/imgs/tecno.webp')] bg-contain bg-center bg-no-repeat sm:h-[30vh] sm:w-[120%] md:h-[35vh] md:w-[110%] lg:h-[50vh] lg:w-full"></div>
            <div className="mt-[-30px] h-[150px] w-[70%] bg-red-600">
              <CustomButton text="Become Our Campus Ambassador" />
            </div>
          </div>

          <div className="mt-auto flex min-h-[50vh] w-full flex-col items-center justify-end py-8">
            <h2 className="lg:text-4x mb-4 flex items-center bg-gradient-to-b from-[#E9F8FF] to-[rgba(144,168,180,0.75)] bg-clip-text text-center font-['readyplayer',sans-serif] text-[24px] text-[28px] text-xl font-[500] leading-[1.5] tracking-[0.35em] text-transparent text-white sm:text-2xl sm:text-[28px] sm:tracking-[0.35em] md:text-3xl md:text-[32px] md:tracking-[0.4em] lg:text-[36px] lg:tracking-[0.45em]">
              CONTACT US
            </h2>
            <span className="mb-6 flex justify-center gap-x-3.5">
              <Link
                href={"https://www.instagram.com/tecnoesis.nits/"}
                aria-label="Instagram"
              >
                <IoLogoInstagram className="text-2xl text-[1.5rem] text-white hover:text-gray-200 sm:text-3xl md:text-4xl md:text-[1.5rem] lg:text-5xl lg:text-[1.5rem] xl:text-[1.5rem]" />
              </Link>
              <Link
                href={"https://www.facebook.com/tecnoesis.nits"}
                aria-label="Facebook"
              >
                <IoLogoFacebook className="text-2xl text-[1.5rem] text-white hover:text-gray-200 sm:text-3xl md:text-4xl md:text-[1.5rem] lg:text-5xl lg:text-[1.5rem] xl:text-[1.5rem]" />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/tecnoesis-nit-silchar/"}
                aria-label="LinkedIn"
              >
                <IoLogoLinkedin className="text-2xl text-[1.5rem] text-white hover:text-gray-200 sm:text-3xl md:text-4xl md:text-[1.5rem] lg:text-5xl lg:text-[1.5rem] xl:text-[1.5rem]" />
              </Link>
              <Link href={"https://x.com/tecnoesis_nits"} aria-label="Twitter">
                <FaXTwitter className="text-2xl text-[1.5rem] text-white hover:text-gray-200 sm:text-3xl md:text-4xl md:text-[1.5rem] lg:text-5xl lg:text-[1.5rem] xl:text-[1.5rem]" />
              </Link>
            </span>
            <div className="flex items-center text-center w-auto pl-[20px] pr-[20px] !text-[1rem] text-[0.875rem] text-sm font-medium leading-[1.5] tracking-[0.15em] tracking-[0.2em] text-white sm:text-base sm:tracking-[0.25em] md:text-lg md:tracking-[0.25em] lg:text-xl lg:tracking-[0.3em] xl:tracking-[0.35em]">
              Designed in collaboration with GDG Silchar
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingFooter;
