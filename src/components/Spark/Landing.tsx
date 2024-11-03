"use client";
import React from 'react';
import Glitch from './Glitch';
const Landing: React.FC = () => {
  return (
    <div className="sparkheroParent scale-x-[-1] scale-y-[1] text-white w-[100vw] min-h-[50vh] md:min-h-[100vh] bg-[url('/assets/spark/sparklanding.png')] bg-cover bg-center flex flex-col justify-center items-center relative">
      <div className="flex flex-col items-center justify-center -translate-y-10">
        <div className="flex flex-col items-center justify-center h-[100%] w-[100%]">
          {/* <h1 className='font-rp1 text-4xl md:text-8xl text-white sparkHero'>SPARK</h1> */}
          
        </div>
      </div>
    </div>
  );
};

export default Landing;
