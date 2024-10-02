import React, { useRef } from "react";
import { Oxanium } from "next/font/google";
import Link from "next/link";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";

const oxanium = Oxanium({ subsets: ["latin"] });
const Footer = () => {
  const textRef = useRef(null);
  

  return (
    <footer className="fixed left-0 top-4 z-10 flex w-full items-center justify-center p-1 text-2xl lg:text-3xl">
      <span
        ref={textRef}
        className={`${oxanium.className} text-shadow-[0_0_9px_rgba(255,255,255,1),-1px_1px_0_#E123FF,1px_-1px_0_#4D7FFF] flex animate-text-glow gap-4 text-center text-gray-500`}
      >

        <Link href={"https://www.instagram.com/tecnoesis.nits/"}>
          <IoLogoInstagram className="hover:text-gray-200" />
        </Link>
        <Link href={"https://www.facebook.com/tecnoesis.nits"}>
          <IoLogoFacebook className="hover:text-gray-200" />
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
