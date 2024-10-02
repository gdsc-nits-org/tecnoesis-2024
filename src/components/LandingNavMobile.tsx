"use client";
import { Oxanium } from 'next/font/google';
import CountdownTimer from './CountdownTimer';

const oxanium = Oxanium({ subsets: ['latin'] });

const NavbarMobile = () => {
  return (
    <nav className="fixed top-4 left-0 w-full p-1 z-10 flex items-center justify-center text-2xl lg:text-4xl">
      <span className={`${oxanium.className} text-white text-center text-shadow-[0_0_9px_rgba(255,255,255,1),-1px_1px_0_#E123FF,1px_-1px_0_#4D7FFF]`}>
        <CountdownTimer />
      </span>
    </nav>
  );
};

export default NavbarMobile;
