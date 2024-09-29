import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from "usehooks-ts";

const Landing = () => {
    const tablet = useMediaQuery("(min-width: 500px)"); // Use camelCase for variable names
    const desktop = useMediaQuery("(min-width: 800px)");

    const backgroundImages = [
        {
            src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1727601952/tecno-24/dsf1-ezgif.com-png-to-webp-converter_bge52x.webp",
            alt: "Background Environment",
            className: "absolute bottom-0 z-0 h-[10rem]"
        },
        {
            src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1727601952/tecno-24/fsd1-ezgif.com-png-to-webp-converter_leymjj.webp",
            alt: "Background Environment",
            className: "absolute bottom-0 z-1 h-[10rem]"
        },
        // ... add other image objects here
    ];

    const foregroundImages = [
        {
            src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1727601951/tecno-24/1e89fdb62cf7812a3b1e57ead4143e4d1-ezgif.com-png-to-webp-converter_swbu67.webp",
            alt: "Sphere Glass",
            className: "absolute bottom-[3rem] z-2"
        },
        {
            src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1727601951/tecno-24/doubleglitch_hiker_standing_on_a_cliff_at_the_center_of_the_sho_aa94348b-fe2f-4e72-8adb-391de9ab66c4_0000_Layer-2-ezgif.com-png-to-webp-converter_ktacys.webp",
            alt: "Rock",
            className: "absolute bottom-0 z-3"
        },
        {
            src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1727605344/tecno-24/character1-ezgif.com-webp-to-png-converter_jpopwg.png",
            alt: "Character",
            className: "absolute bottom-[1rem] z-4"
        },
    ];


    return (
        <div className="bg-[#000000] flex flex-col items-center justify-around min-h-screen text-[#ffffff] overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                <Image
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727602017/tecno-24/Tecnoesis_24_matte_png_1_cgjhdi.svg"
                alt="Tecnoesis Logo"
                className="h-[10rem] w-[20rem] md:h-[15rem] md:w-[30rem]"
                width={0}
                height={0}
                />
            </div>
            <div className="overflow-hidden">
                <Image src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727615010/tecno-24/fsd_1_xk5yt7.svg" alt="core" className="absolute bottom-[0%] left-0 w-[100%] h-[50%] z-0" width={0} height={0} />
                <Image src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727616945/tecno-24/doubleglitch_hiker_standing_on_a_cliff_at_the_center_of_the_sho_aa94348b-fe2f-4e72-8adb-391de9ab66c4_0000_Layer-2_qko7ut.svg" alt="rock" className="h-[50%] z-2"
                width={0} height={0}/>
            </div>
        </div>
    );
};

export default Landing;
