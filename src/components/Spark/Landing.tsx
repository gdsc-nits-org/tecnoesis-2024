"use client";
import React from 'react';

const Landing: React.FC = () => {
  return (
    <div className="sparkhero text-white w-[100vw] min-h-[50vh] md:min-h-[100vh] bg-[url('/assets/spark/sparklanding.png')] bg-cover bg-center flex flex-col justify-center items-center relative">
      <div className="flex flex-row items-center justify-between">
        <h1 className='font-rp1 text-4xl md:text-8xl text-white sparkHero'>SPARK</h1>
      </div>
    </div>
  );
};

export default Landing;
