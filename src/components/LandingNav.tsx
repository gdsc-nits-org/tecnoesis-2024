/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BiSolidVolumeMute, BiSolidVolumeFull } from "react-icons/bi";


const Navbar = () => {
  const title = [
    'Tecnoesis',
    'Coming Soon',
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

  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <nav className="fixed bottom-4 left-0 w-full p-1 z-10 flex items-center justify-center text-2xl lg:text-4xl font-rp1">
      <span ref={textRef} className={`text-white text-center animate-text-glow text-shadow-[0_0_9px_rgba(255,255,255,1),-1px_1px_0_#E123FF,1px_-1px_0_#4D7FFF]`}>
        {title[text]}
      </span>
      <div onClick={togglePlayPause} className='fixed right-6 text-white text-center animate-text-glow text-shadow-[0_0_9px_rgba(255,255,255,1),-1px_1px_0_#E123FF,1px_-1px_0_#4D7FFF]'>
        {isPlaying ? <BiSolidVolumeFull /> : <BiSolidVolumeMute />}
      </div>
      <audio ref={audioRef} src="/rp1bgm.mp3" preload='metadata' loop/>
    </nav>
  );
};

export default Navbar;
