/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { BiSolidVolumeMute, BiSolidVolumeFull } from "react-icons/bi";

interface NavigatorExtended extends Navigator {
  deviceMemory?: number;
}
const Navbar = () => {
  const title = ["Tecnoesis", "Coming Soon"];
  const [text, setText] = useState(0);
  const textRef = useRef(null);
  const [ram, setRam] = useState<number | undefined>();

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

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    const nav = navigator as NavigatorExtended;
    console.log("Nav mem", nav.deviceMemory);
    setRam(nav.deviceMemory);
  });

  return (
    <nav className="fixed bottom-4 left-0 z-10 flex w-full items-center justify-center p-1 font-rp1 text-2xl lg:text-4xl">
      <div className="text-shadow-[0_0_9px_rgba(255,255,255,1),-1px_1px_0_#E123FF,1px_-1px_0_#4D7FFF] fixed left-6 animate-text-glow text-center font-mono text-white">
        {ram}GB
      </div>
      <span
        ref={textRef}
        className={`text-shadow-[0_0_9px_rgba(255,255,255,1),-1px_1px_0_#E123FF,1px_-1px_0_#4D7FFF] animate-text-glow text-center text-white`}
      >
        {title[text]}
      </span>
      <div
        onClick={togglePlayPause}
        className="text-shadow-[0_0_9px_rgba(255,255,255,1),-1px_1px_0_#E123FF,1px_-1px_0_#4D7FFF] fixed right-6 animate-text-glow text-center text-white"
      >
        {isPlaying ? <BiSolidVolumeFull /> : <BiSolidVolumeMute />}
      </div>
      <audio ref={audioRef} src="/rp1bgm.mp3" preload="metadata" loop />
    </nav>
  );
};

export default Navbar;
