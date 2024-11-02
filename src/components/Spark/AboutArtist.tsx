'use client'
import Image from "next/image";
const AboutArtist = () => {
    return (
        <div className="w-full md:h-[60rem] bg-contain lg:bg-[length:80%] bg-center bg-no-repeat bg-[url('/assets/spark/sparkmobbg.png')] lg:bg-[url('/assets/spark/meettheartist.png')] flex flex-col">
            <div className="h-fit w-full flex items-center justify-center translate-x-4  lg:translate-y-80 z-40 ">
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
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="h-[10rem] md:h-[12rem] lg:h-[15rem] w-[18rem] md:w-[25rem] glassmorphism z-50 
            translate-y-16  lg:-translate-x-72 lg:-translate-y-8 xl:-translate-y-0 md:translate-y-[26rem] flex flex-col items-center justify-center" >
                    <p className="text-white font-rp1 font-semibold text-center tracking-widest text-xl mb-2">Nikhil D Souza</p>
                    <p className="text-white font-outfit text-justify text-sm w-[90%] xl:text-md">Nikhil D Souza is an Indian singer-songwriter known for his soulful voice and heartfelt lyrics, blending pop, indie, and folk. With hits like Silver and Gold, he’s popular in India and internationally.</p>
                </div>
            </div>
            <div className="h-[2rem] lg:h-[3rem] w-full bg-[#04B5C4] relative z-10 overflow-hidden flex items-center justify-start translate-y-20 md:translate-y-[28rem] lg:translate-y-0 xl:translate-y-8">
                <div className="relative h-[2.5rem] w-[200%] animate-slide-left flex gap-4">
                    <Image
                        src="/assets/spark/songinfinite.png"
                        alt="nikhildsouza"
                        className="object-contain w-[100vw]"
                        width={800}
                        height={120}
                    />
                    <Image
                        src="/assets/spark/songinfinite.png"
                        alt="nikhildsouza"
                        className="object-contain w-[100vw]"
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