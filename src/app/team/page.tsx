"use client"

import { Outfit } from 'next/font/google';
import Card, { MemberCard } from '~/components/Card';
import data from "../../../public/team.json";
import Marquee from 'react-fast-marquee';
import { useState } from 'react';

const outfit = Outfit({
    weight: "400",
    subsets: ["latin"],
})

//I have not added the code to check which team is currently checked.
// I have just added the code to display the team heads and members.
// You can add the code to check which team is currently checked and display the members accordingly.

export default function Team() {

    const [team, setTeam] = useState<1|2>(1);

    return (
        <div className='min-h-screen'>
            <div className="bg-customBluish min-h-screen">
                <div className="w-full flex justify-center items-center">
                    <h1 className="font-rp1 text-center text-4xl lg:text-6xl text-customBlue mt-24 lg:mt-48 mb-12">MEET OUR TEAM </h1>
                </div>
                <div className='flex justify-center mb-12 text-white text-xl gap-8'>
                    <button style={team==1?{backgroundColor:"#59CAFA"}:{}} onClick={()=>{
                        setTeam(1);
                    }} className='group bg-[#fff1] flex items-center justify-between rounded-full px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]'>
                        <p className={outfit.className + " group-hover:text-customBlue group-hover:scale-90 duration-300"}>Tech Team</p>
                    </button>
                    <button style={team==2?{backgroundColor:"#59CAFA"}:{}} onClick={()=>{
                        setTeam(2);
                    }} className='group bg-[#fff1] flex items-center justify-between rounded-full px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]'>
                        <p className={outfit.className + " group-hover:text-customBlue group-hover:scale-90 duration-300"}>Other Team</p>
                    </button>
                </div>
                <div className='flex flex-col justify-center items-center text-yellow-50'>
                    {
                        data.map((item) => (
                            <div className='w-full mb-20 mt-12' key={item.id}>
                                <h1 className='font-rp1 text-center text-4xl mb-12'>{item.name}</h1>
                                <div className=' flex justify-center items-center flex-wrap gap-16'>
                                    {
                                        item.heads.map((member) => (
                                            <div key={member.id} className='flex w-max flex-row justify-center items-center'>
                                                <Card name={member.name} designation={member.designation} photo={member.photo} main={item.id} id={member.id} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <h1 className='font-rp1 text-center text-4xl mb-12'>TEAM MEMBERS</h1>
                    <Marquee
                        speed={70}
                        direction={"left"}
                        pauseOnClick={true}
                    >
                        <div className='flex h-[40rem]'>
                            {
                                data.map((item) => (
                                    item.members.map((member) => (
                                        <MemberCard name={member.name} designation={member.designation} photo={member.photo} index={parseInt(member.id)} />
                                    ))
                                ))
                            }
                        </div> 
                    </Marquee>
                </div>
            </div>
        </div>
    )
}