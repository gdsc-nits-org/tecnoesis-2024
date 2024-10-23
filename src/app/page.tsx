'use client'
import { useRef, useState } from "react";
import { BiSolidVolumeFull, BiSolidVolumeMute } from "react-icons/bi";
import Landing from "~/components/Landing";

export const runtime = "edge";

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
       void audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-[url('/assets/Landing/stars-bg.avif')]">
      <Landing />
      <div
        onClick={togglePlayPause}
        className="text-shadow-[0_0_9px_rgba(255,255,255,1),-1px_1px_0_#E123FF,1px_-1px_0_#4D7FFF] fixed top-[93%] right-12 animate-text-glow text-center text-white cursor-pointer z-20 text-3xl"
      >
        {isPlaying ? <BiSolidVolumeFull /> : <BiSolidVolumeMute />}
      </div>
      <audio ref={audioRef} src="/rp1bgm.mp3" preload="metadata" loop />
    </div>
  );
}
