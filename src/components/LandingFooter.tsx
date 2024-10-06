import React, { useRef } from 'react';
import { Oxanium } from 'next/font/google';
import Link from 'next/link';
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";


const oxanium = Oxanium({ subsets: ['latin'] });
const Footer = () => {
  const textRef = useRef(null);

  return (
    <nav className="fixed top-4 left-0 w-full p-1 z-10 flex items-center justify-center text-2xl lg:text-3xl">
      <span ref={textRef} className={`${oxanium.className} flex gap-4 text-gray-500  text-center animate-text-glow text-shadow-[0_0_9px_rgba(255,255,255,1),-1px_1px_0_#E123FF,1px_-1px_0_#4D7FFF]`}>
        <Link href={"https://www.instagram.com/tecnoesis.nits/"}>
          <IoLogoInstagram className="hover:text-gray-200"/>
        </Link>
        <Link href={"https://www.facebook.com/tecnoesis.nits"}>
          <IoLogoFacebook className="hover:text-gray-200"/>
        </Link>
      </span>
    </nav>
  );
};

export default Footer;