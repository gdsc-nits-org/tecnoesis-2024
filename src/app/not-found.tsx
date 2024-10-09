'use client'
import Image from "next/image"
import Link from "next/link";

export const runtime = "edge";
const notFound = () => {
    return (
        <>
            <div className="bg-dotted flex flex-col w-full min-h-[100vh] items-center justify-center pt-8 overflow-hidden gap-0">
                <div className="relative max-h-1/2 w-full flex items-center justify-center">
                    <Image
                        src="/Images/404.svg"
                        alt="image"
                        width={1500}
                        height={1500}
                        className="w-full h-full md:w-2/3 md:h-1/3"
                    />

                    <Image
                        src="/Images/404-unscreen.gif"
                        alt="gif"
                        width={200}
                        height={200}
                        className="absolute h-1/4 w-1/4 -translate-y-5 lg:-translate-y-8"
                    />
                </div>
                <div className="w-full flex flex-col justify-center items-center sm:-translate-y-15 md:-translate-y-20 lg:-translate-y-24">
                    <div className="w-full flex items-center justify-center">
                        <p className="text-white text-center font-outfit w-[80vw] text-wrap font-medium text-xl :text-3xl"> We don&#39;t know how you made it here, but</p>
                    </div>
                    <Link href="/home" >
                        <div className="w-full flex items-center justify-around mt-10">
                            <button
                                type="submit"
                                className="flex flex-row items-center justify-center gap-5 w-60 lg:w-80 h-15 p-2 bg-transparent origin-top-left rounded-full border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#01A3F5] hover:via-[#0AEFF6] hover:to-[#2F629C] hover:border-none"
                            >
                                <div className="flex items-center justify-center gap-5 w-full">
                                    <Image
                                        src='/Images/tabler_planet.svg'
                                        alt="logo"
                                        width={25}
                                        height={25}
                                    />
                                    <div className="font-outfit text-md lg:text-xl text-white">
                                        BACK TO HOME
                                    </div>
                                </div>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default notFound;