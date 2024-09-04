// components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Oxanium } from 'next/font/google';
import gsap from 'gsap';

const oxanium = Oxanium({ subsets: ['latin'] });

const Navbar = () => {
  const title = [
    'Tecnoesis 2024',
    'Coming Soon',
    'Beyond the Horizon, Into the Arena'
  ];
  const [text, setText] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "circ.inOut" } });

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
    <nav className="fixed top-0 left-0 w-full bg-black p-3 z-10 flex items-center justify-center text-2xl lg:text-4xl text-white">
      <span ref={textRef} className={`${oxanium.className} text-text-glow`}>
        {title[text]}
      </span>
    </nav>
  );
};

export default Navbar;
