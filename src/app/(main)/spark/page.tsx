'use client'
import { useEffect, useState } from "react";
import Landing from "~/components/Spark/Landing";
import About from "~/components/Spark/About";
import Gallery from "~/components/Spark/Gallery";
import FinalFooter from "~/components/FinalFooter";
import AboutArtist from "~/components/Spark/AboutArtist";
export const runtime = "edge";

const Spark = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {

      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-dotted flex min-h-screen w-full flex-col items-center justify-center overflow-hidden xl:cursor-none "
    >
      <div className="hidden xl:flex"
        style={{
          position: "fixed",
          top: cursorPosition.y,
          left: cursorPosition.x,
          width: "10rem",
          height: "10rem",
          pointerEvents: "none",
          backgroundImage: "url('/assets/spark/custom-cursor.gif')",
          backgroundSize: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />

      <div className="h-fit">
        <Landing />
      </div>

      <div className="mb-[4rem] h-fit lg:mt-[4rem]">
        <About />
      </div>
      <div className="mb-[6rem]">
        <AboutArtist />
      </div>
      <div className="w-[90vw]">
        <Gallery />
      </div>
      <FinalFooter />
    </div>
  );
};

export default Spark;
