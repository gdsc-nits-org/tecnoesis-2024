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
        <div className="h-[100vh] flex flex-col items-center justify-around text-[#ffffff] overflow-hidden">
            <div className="flex flex-col justify-center items-center p-[4rem] lg:p-0">
                <Image
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727623666/tecno-24/3_l3upkw.png"
                alt="Tecnoesis Logo"
                className="h-[10rem] z-1 w-[20rem] md:h-[15rem] md:w-[30rem] lg:w-[45rem] lg:h-[25rem]"
                width={1000}
                height={1000}
                />
            </div>
            <div className="overflow-hidden mt-[10rem] min-h-[100vh] bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dhry5xscm/image/upload/v1727622996/tecno-24/Layer_4-removebg-preview_dqkln1.png')" }}>
                <Image 
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727601952/tecno-24/dsf1-ezgif.com-png-to-webp-converter_bge52x.webp" 
                    className='absolute z-0 top-[25%] left-0 h-[60%] md:w-[100%]' 
                    width={1000} 
                    height={1000} 
                    alt="cover" 
                />
                <img 
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1727624423/tecno-24/Layer_1_qxjn7z.png" 
                    alt="rock" 
                    className="absolute bottom-0 left-0 mobile4:left-[12%] md:left-[22%] lg:left-[28%] w-full mobile4:w-[60%] md:w-[45%] lg:w-[40%] z-3"
                />
            </div>

        </div>
    );
};

export default Landing;
