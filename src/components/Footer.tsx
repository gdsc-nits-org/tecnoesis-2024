import React, { useRef, useEffect } from "react";
import { Oxanium } from "next/font/google";
import Link from "next/link";
import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import "~/styles/footer.css";

const oxanium = Oxanium({ subsets: ["latin"] });

const Footer = () => {
  const textRef = useRef(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.pageX - 50}px, ${e.pageY - 50}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className="fixed left-0 bottom-0 z-10 w-full flex flex-col items-center justify-end p-4">
      <div ref={glowRef} className="glow"></div>
      <div className="back-cover w-full flex flex-col items-center justify-center">
        <div className="tecno-big-img"></div>
        <button className="campus-ambassador-button">
          Become Our Campus Ambassador
        </button>
        <div className="bottom-content flex flex-col items-center mb-4">
          <h2 className="text-white text-xl font-semibold mb-4">CONTACT US</h2>
          <span className="social-links flex space-x-4 mb-2">
            <Link href={"https://www.instagram.com/tecnoesis.nits/"}>
              <IoLogoInstagram className="text-white hover:text-gray-200 text-2xl" />
            </Link>
            <Link href={"https://www.facebook.com/tecnoesis.nits"}>
              <IoLogoFacebook className="text-white hover:text-gray-200 text-2xl" />
            </Link>
            <Link href={"https://www.linkedin.com/company/tecnoesis-nits"}>
              <IoLogoLinkedin className="text-white hover:text-gray-200 text-2xl" />
            </Link>
            <Link href={"https://twitter.com/tecnoesis_nits"}>
              <FaXTwitter className="text-white hover:text-gray-200 text-2xl" />
            </Link>
          </span>
          <div className="text-center text-sm text-white">
            Designed in collaboration with GDG Silchar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;