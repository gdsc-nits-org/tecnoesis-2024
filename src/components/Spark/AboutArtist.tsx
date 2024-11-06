'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
const AboutArtist = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio('/spark.mp3');
        audioRef.current.volume = 0.3;
        audioRef.current.loop = true;
        void audioRef.current.play().then(() => setIsPlaying(true)).catch((error) => {
            console.warn("Audio playback was prevented", error);
        });

        return () => {
            audioRef.current?.pause();
        };
    }, []);

    const handleClick = () => {
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
        <div className="w-full md:h-[60rem] bg-contain lg:bg-[length:80%] bg-center bg-no-repeat bg-[url('/assets/spark/sparkmobbg.png')] lg:bg-[url('/assets/spark/meettheartist.png')] flex flex-col">

            <div className="h-fit w-full flex items-center justify-center translate-x-4 lg:translate-x-16 xl:translate-x-36  lg:translate-y-80 z-40">
                <Image
                    src="/assets/spark/NikhilDSouza.png"
                    alt="nikhildsouza"
                    height={900}
                    width={900}
                    className="hidden lg:flex lg:scale-90 xl:scale-100"
                />
                <Image
                    src="/assets/spark/nikhilmob.png"
                    alt="nikhildsouza"
                    height={250}
                    width={250}
                    className="lg:hidden translate-y-40 md:scale-[2] md:translate-y-[24rem]"
                />
                <div className="hidden xl:flex h-[5rem] w-[15rem] rounded-full -translate-x-32 bg-transparent border-white border-[.5px] -translate-y-[27rem]">
                    <div className={`h-full w-full rounded-full bg-[#19DCED] ${isPlaying ? '-translate-y-0' : '-translate-y-1/2'} flex items-center justify-center`}>
                        <div
                            onClick={handleClick}
                            className="h-[3.8rem] w-[3.8rem] rounded-full bg-white cursor-pointer flex items-center justify-center overflow-hidden">
                            {isPlaying ?
                                <div className="h-[30px] w-[30px] text-[#19DCED] font-bold text-center text-2xl -translate-y-1">  | |  </div>
                                : <Image
                                    src="/assets/spark/pause.png"
                                    alt="pause"
                                    height={30}
                                    width={30}
                                />
                            }
                        </div>
                        {isPlaying ? <img src="/assets/spark/playState.gif" alt="play_gif" className="h-[4rem] w-[10rem]" />
                            : <img src="/assets/spark/pauseState.gif" alt="pause_gif" className="h-[4rem] w-[10rem]" />}
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="h-[10rem] md:h-[12rem] lg:h-[15rem] w-[18rem] md:w-[25rem] glassmorphism z-50 
            translate-y-16 lg:-translate-x-40 xl:-translate-x-96 lg:-translate-y-8 xl:-translate-y-0 md:translate-y-[26rem] flex flex-col items-center justify-center" >
                    <p className="text-white font-rp1 font-semibold text-center tracking-widest text-xl mb-2">Nikhil D Souza</p>
                    <p className="text-white font-outfit text-justify text-[0.7rem] md:text-[0.8rem] w-[90%] xl:text-md">Nikhil D Souza is an Indian singer, songwriter, and musician,who has captivated audiences across the subcontinent with his soulful melodies and heartfelt performances. He gained popularity in India for his independent music as well as for playback singing in Bollywood films.
                        <br />
                        <span className="hidden lg:flex"> His success as an indie artist, paired with his Bollywood achievements, showcases his versatility and the broad range of his musical capabilities.</span>
                    </p>
                </div>
            </div>
            <div className="h-[2rem] lg:h-[3rem] w-full bg-[#04B5C4] relative z-10 overflow-hidden flex items-center justify-start translate-y-20 md:translate-y-[28rem] lg:translate-y-0 xl:translate-y-8">
                <div className="relative h-[2.5rem] w-[300%] animate-slide-left flex gap-28 md:gap-4">
                    <Image
                        src="/assets/spark/songinfinite.png"
                        alt="nikhildsouza"
                        className="object-contain w-[100vw] scale-y-125 scale-x-125 md:scale-y-100 md:scale-x-100"
                        width={800}
                        height={120}
                    />
                    <Image
                        src="/assets/spark/songinfinite.png"
                        alt="nikhildsouza"
                        className="object-contain w-[100vw] scale-y-125 scale-x-125 md:scale-y-100 md:scale-x-100"
                        width={800}
                        height={120}
                    />
                </div>
            </div>


            <style jsx>{`
            @keyframes slide-left {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
            .animate-slide-left {
                animation: slide-left 10s linear infinite;
            }
        `}</style>
        </div>
    );
}

export default AboutArtist;