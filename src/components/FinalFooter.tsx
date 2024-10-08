"use client";
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

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particlesArray: Particle[] = [];
    let mouse = { x: 0, y: 0 };
    const numParticles = 100;
    canvas.width = window.innerWidth;
    canvas.height = 300; // Adjust the height as needed

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
          let x: number = Math.random() * canvas.width;
          let y: number = Math.random() * canvas.height;
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
                  ctx.strokeStyle = "rgba(144,168,180,0.75)";
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
      ctx && canvas ? ctx.clearRect(0, 0, canvas.width, canvas.height) : "";
      for (let i = 0; i < particlesArray.length; i++) {
        const particle = particlesArray[i];
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
      canvas.height = 300; // Adjust height again on resize
      initParticles();
    });

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y - canvas.offsetTop; // Adjust according to canvas position
    });
  }, []);

  return (
    <footer className="relative flex min-h-[50vh] w-full flex-col overflow-hidden bg-black">
      <div className="inset-0 z-0 w-full">
        <canvas ref={canvasRef} style={{ display: 'block', background: '#000', position: 'absolute', zIndex: '-2'}}></canvas>
      </div>

      <div ref={glowRef} className="glow z-10"></div>

      <div className="back-cover z-20 flex h-full w-full flex-grow flex-col items-center justify-between bg-[url('/assets/footer/imgs/minimal-globe-technology-business-background_53876-117190%201.webp')] bg-cover bg-bottom pt-[5vh]">
        <div className="flex h-full w-full flex-col items-center justify-between">
          <div className="tecno-big-img flex h-4/6 w-9/12 flex-col items-center justify-center bg-contain"></div>

          <button className="campus-ambassador-button">
            Become Our Campus Ambassador
          </button>
        </div>

        <div className="bottom-content-container mt-auto flex w-full flex-col items-center justify-end py-8">
          <h2 className="footer-middle-text lg:text-4x mb-4 flex items-center bg-gradient-to-b from-[#E9F8FF] to-[rgba(144,168,180,0.75)] bg-clip-text text-center font-['ReadyPlayerOne',sans-serif] text-[24px] text-xl font-[500] leading-[1.5] tracking-[0.3em] text-transparent text-white sm:text-2xl md:text-3xl">
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
