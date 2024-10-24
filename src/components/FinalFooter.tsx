"use client";
import React, { useRef, useEffect, useCallback, useState } from "react";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

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
          className="bg-[linear-gradient(black, #000000)] z-40 mb-[-150px] h-[160px] w-full"
          style={{
            background:
              "linear-gradient(#000000, #0000009e, rgb(0 0 0 / 33%), #00000000)",
          }}
        ></div>
        <div className="inset-0 z-0 w-auto">
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
        <div className="z-20 flex h-fit w-full flex-grow flex-col items-center justify-between bg-[url('/assets/footer/imgs/globe.png')] bg-cover bg-center">
          <div className="flex w-full flex-col items-center justify-between">
            <div className="mb-0 mt-[150px] flex h-[30vh] w-[90vw] flex-col items-center justify-center bg-[url('/assets/footer/imgs/tecno.webp')] bg-contain bg-center bg-no-repeat sm:h-[30vh] sm:w-[80%] md:h-[35vh] md:w-[80%] lg:h-[40vh] lg:w-[80%] mb-[-20px]"></div>
          </div>

          <div className="mt-auto flex w-full flex-col items-center justify-end py-8 mb-0 sm:mb-[-10px]">
            <span className="flex justify-center gap-x-6 mb-0 sm:mb-[-10px] lg:gap-x-4 xl:gap-x-5">

              <Link
                href={"https://www.instagram.com/tecnoesis.nits/"}
                aria-label="Instagram"
                target="_blank"
              >
                <IoLogoInstagram className="text-2xl text-white hover:text-gray-200 sm:text-3xl md:text-4xl md:text-[1.5rem] lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl" />
              </Link>
              <Link
                href={"https://www.facebook.com/tecnoesis.nits"}
                aria-label="Facebook"
                target="_blank"
              >
                <IoLogoFacebook className="text-2xl text-white hover:text-gray-200 sm:text-3xl md:text-4xl md:text-[1.5rem] lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl" />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/tecnoesis-nit-silchar/"}
                aria-label="LinkedIn"
                target="_blank"
              >
                <IoLogoLinkedin className="text-2xl text-white hover:text-gray-200 sm:text-3xl md:text-4xl md:text-[1.5rem] lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl" />
              </Link>
              <Link href={"https://x.com/tecnoesis_nits"} aria-label="Twitter" target="_blank">
                <FaXTwitter className="text-2xl text-white hover:text-gray-200 sm:text-3xl md:text-4xl md:text-[1.5rem] lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl" />
              </Link>
            </span>
            <div className="flex items-center text-center w-auto pl-[20px] pr-[20px] mt-2 font-medium leading-[1.5] tracking-[0.2em] text-white !text-[0.8rem] sm:!text-base sm:!tracking-[0.25em] md:!text-base md:tracking-[0.25em] lg:!text-[1rem] lg:tracking-[0.3em] xl:tracking-[0.35em] mb-[-30px] flex-col sm:flex-row font-outfit 2xl:!text-[1rem] 3xl:text-[1.6rem] 4xl:!text-[2rem]">
              Designed in collaboration with GDGC NIT Silchar
              <Link href={"https://gdscnits.in/"} aria-label="GDGC NITS" target="_blank">
                <Image src="/assets/footer/imgs/gdgc_logo_animated.gif" alt="gdgc_logo" height={60} width={55} className="h-[60px]" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingFooter;
