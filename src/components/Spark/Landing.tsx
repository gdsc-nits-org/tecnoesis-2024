"use client";
import React, { useEffect, useState } from 'react';

const Landing: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
        
    }, []);

    return (
        <div className="sparkheroParent scale-x-[-1] text-white w-[100vw] min-h-[50vh] md:min-h-[100vh] bg-[url('/assets/spark/sparklanding.png')] bg-cover bg-center flex flex-col justify-center items-center relative">
            <div
                style={{
                    position: 'absolute',
                    left: position.x,
                    top: position.y,
                    width: '32px',
                    height: '32px',
                    background: 'url(/assets/spark/custom-cursor.png) no-repeat center center',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)', // Center the cursor image
                }}
            />
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center h-[100%] w-[100%]">
                    {/* <h1 className='font-rp1 text-4xl md:text-8xl text-white sparkHero'>SPARK</h1> */}
                    <img 
                        src="/assets/spark/wheel.gif" 
                        className='mobile1:scale-x-[-0.65] mobile1:scale-y-[0.65] sm:scale-x-[-0.5] sm:scale-y-[0.5] xl:scale-x-[-0.55] xl:scale-y-[0.55] scale-x-[-1] scale-y-[1] -translate-y-10 mobile1:-translate-y-15 md:-translate-y-20' 
                        alt='wheel' 
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;
