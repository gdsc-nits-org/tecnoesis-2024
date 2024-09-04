// components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Oxanium } from 'next/font/google';
import gsap from 'gsap';

const oxanium = Oxanium({ subsets: ['latin'] });

const Navbar = () => {
  const title = [
    'Tecnoesis 2024',
    'Coming Soon',
    'Under Development'
  ];
  const [text, setText] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    const animateText = () => {
      tl.to(textRef.current, { opacity: 0, duration: 1 })
        .call(() => {
          setText((prev) => (prev + 1) % title.length);
        })
        .fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    };

    animateText();

    const interval = setInterval(() => {
      animateText();
    }, 6000);

    return () => clearInterval(interval);
  }, [title.length]);

  return (
    <nav className="fixed top-4 left-0 w-full p-1 z-10 flex items-center justify-center text-2xl lg:text-4xl">
      <span ref={textRef} className={`${oxanium.className} text-white text-center animate-text-glow text-shadow-[0_0_9px_rgba(255,255,255,1),-1px_1px_0_#E123FF,1px_-1px_0_#4D7FFF]`}>
        {title[text]}
      </span>
    </nav>
  );
};

export default Navbar;
