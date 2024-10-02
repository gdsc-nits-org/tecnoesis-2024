import React, { useRef } from "react";
import { Oxanium } from "next/font/google";
import Link from "next/link";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import "~/styles/footer.css";

const oxanium = Oxanium({ subsets: ["latin"] });
const Footer = () => {
  const textRef = useRef(null);
  const glow = document.querySelector(".glow") as HTMLElement;

  document.addEventListener("mousemove", (e) => {
    (glow) ? glow.style.transform = `translate(${e.pageX - 50}px, ${e.pageY - 50}px)` : '';
  });

  return (
    <footer className="fixed left-0 top-4 z-10 flex w-full items-center justify-center p-1 text-2xl lg:text-3xl">
      <div className="glow"></div>
      <div className="back-cover">
        <div className="tecno-big-img"></div>
        <div className="bottom-content">
          <span className="social-links">
            <Link href={"https://www.instagram.com/tecnoesis.nits/"}>
              <IoLogoInstagram className="hover:text-gray-200" />
            </Link>
            <Link href={"https://www.facebook.com/tecnoesis.nits"}>
              <IoLogoFacebook className="hover:text-gray-200" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
