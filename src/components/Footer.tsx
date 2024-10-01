import Image from "next/image";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="min-w-full min-h-fit bg-customDark overflow-hidden">
            <div className="flex flex-row ">
                <div >
                    star 1
                </div>
                <div>
                    star 2
                </div>
                <div>
                    star 3
                </div>
            </div>
            <div className="flex flex-row " >
                <div >
                    star 1
                </div>
                <div>
                    logo
                </div>
                <div>
                    star 2
                </div>
            </div>
            <div className="w-full flex items-center justify-around mt-10 md:translate-x-28">
                <button
                    type="submit"
                    className="flex flex-row items-center justify-center gap-5 w-60 lg:w-80 h-15 p-2 bg-transparent origin-top-left rounded-full border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#01A3F5] hover:via-[#0AEFF6] hover:to-[#2F629C] hover:border-none"
                >
                    <div className="flex items-center justify-center gap-5 w-full h- full ">
                        <Image
                            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1727622715/Tecno/tabler_planet_wffzgp.svg"
                            alt="logo"
                            width={25}
                            height={25}
                        />
                        <div className="font-outfit text-lg lg:text-xl text-white">
                            BECOME OUR CAMPUS AMBASSADOR
                        </div>
                    </div>
                </button>
            </div>
            <div className="bg-black">
                <div className="flex flex-col w-full items-center justify-center">
                    <div>
                        contact us
                    </div>
                    <div className="flex flex-row items-center justify-center w-full">
                        <IoLogoInstagram />
                        <IoLogoLinkedin />
                        <IoLogoFacebook />
                        <IoLogoTwitter />

                    </div>
                    <div>
                        DESIGNED IN COLLABORATION WITH GDG NIT SILCHAR
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Footer;