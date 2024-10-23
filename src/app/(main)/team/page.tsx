"use client"

import Card, { MemberCard } from '~/components/Card';
import CoreData from "../../../../public/data/core.json"
import TechData from "../../../../public/data/tech.json"
import Marquee from 'react-fast-marquee';
import { useState,useEffect } from 'react';
export const runtime = "edge";
export default function Team() {
    const [team, setTeam] = useState<1 | 2 | 3>(1);
    const [isDesktop, setIsDesktop] = useState(true);
    const [hovers, setHovers] = useState(true);
    const techLeads = TechData.filter((item) => { return item.name.split(" ")[1] === "Lead" });
    const devs = TechData.filter((item) => { return item.name.split(" ")[1] !== "Lead" });
    useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 750);
        };
    
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    return (
        <div className='w-full min-h-screen'>
            <div className="bg-dotted w-full min-h-screen">
                <div className="w-full flex justify-center items-center">
                    <h1 className="font-rp1 text-center text-4xl lg:text-6xl text-customBlue mt-24 lg:mt-48 mb-12">MEET OUR TEAM </h1>
                </div>
                {!isDesktop?
                <div className='flex justify-center mb-12 text-white text-xl gap-0 border-1 border-white'>
                    <button style={team == 1 ? { backgroundColor: "#59CAFA",border:'0 solid transparent',borderTopLeftRadius:'1rem',borderBottomLeftRadius:'1rem' } : {border:'0 solid transparent',borderTopLeftRadius:'1rem',borderBottomLeftRadius:'1rem'}} onClick={() => {
                        setTeam(1);
                    }} className='bg-[#fff1] flex items-center justify-between px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]'>
                        <p className="font-outfit  group-hover:scale-90 duration-300">Core Team</p>
                    </button>
                    <button style={team == 2 ? { backgroundColor: "#59CAFA" } : {}} onClick={() => {
                        setTeam(2);
                    }} className='bg-[#fff1] flex items-center justify-between px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5`),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]'>
                        <p className="font-outfit  group-hover:scale-90 duration-300">Tech Team</p>
                    </button>
                    <button style={team == 3 ? { backgroundColor: "#59CAFA",border:'0 solid transparent',borderTopRightRadius:'1rem',borderBottomRightRadius:'1rem'} : {border:'0 solid transparent',borderTopRightRadius:'1rem',borderBottomRightRadius:'1rem'}} onClick={() => {
                        setTeam(3);
                    }} className='bg-[#fff1] flex items-center justify-between px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]'>
                        <p className="font-outfit  group-hover:scale-90 duration-300">Module Heads</p>
                    </button>
                </div>:
                <div className='flex justify-center mb-12 text-white text-xl gap-8'>
                    <button style={team == 1 ? { backgroundColor: "#59CAFA" } : {}} onClick={() => {
                        setTeam(1);
                    }} className='group bg-[#fff1] flex items-center justify-between rounded-full px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]'>
                        <p className="font-outfit  group-hover:scale-90 duration-300">Core Team</p>
                    </button>
                    <button style={team == 2 ? { backgroundColor: "#59CAFA" } : {}} onClick={() => {
                        setTeam(2);
                    }} className='group bg-[#fff1] flex items-center justify-between rounded-full px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]'>
                        <p className="font-outfit  group-hover:scale-90 duration-300">Tech Team</p>
                    </button>
                    <button style={team == 3 ? { backgroundColor: "#59CAFA" } : {}} onClick={() => {
                        setTeam(3);
                    }} className='group bg-[#fff1] flex items-center justify-between rounded-full px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]'>
                        <p className="font-outfit  group-hover:scale-90 duration-300">Module Heads</p>
                    </button>
                </div>
                }
                <div className='flex flex-col justify-center items-center text-yellow-50'>
                    {team === 1 &&
                        CoreData.map((item, index) => (
                            <div className='w-full mb-20 mt-12' key={index}>
                                <h1 className='font-rp1 text-center text-4xl mb-12'>{item.name}</h1>
                                <div className=' flex justify-center items-center flex-wrap gap-16'>
                                    {
                                        item.heads.map((member, idx) => (
                                            <div key={idx} className='flex w-max flex-row justify-center items-center'>
                                                <Card name={member.name} designation={member.designation} photo={member.photo} main={item.id} id={String(idx)} facebook={member.facebook ?? ""} instagram={member.instagram ?? ""} linkedin={member.linkedin ?? ""} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }

                    {team === 2 && techLeads.map((item, index) => (
                        <div className='w-full mb-20 mt-12' key={index}>
                            <h1 className='font-rp1 text-center text-4xl mb-12'>{item.name}</h1>
                            <div className=' flex justify-center items-center flex-wrap gap-16'>
                                {
                                    item.heads.map((member, idx) => (
                                        <div key={idx} className='flex w-max flex-row justify-center items-center'>
                                            <Card name={member.name} designation={member.designation} photo={member.photo} main={item.id} id={String(idx)} facebook={member.facebook ?? ""} instagram={member.instagram ?? ""} linkedin={member.linkedin ?? ""} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                    }
                    {team === 2 && (
                        <>
                            <h1 className='font-rp1 text-center text-4xl mb-12'>TEAM MEMBERS</h1>
                            <Marquee
                                speed={70}
                                direction={"left"}
                                play={hovers}
                            >
                                <div className='flex h-[40rem]'>
                                    {
                                        devs.map((item) => (
                                            item.heads.filter((person) => { return person.year === "3rd" }).map((member, idx) => (
                                                <MemberCard key={idx} name={member.name} designation={member.designation} photo={member.photo} index={idx} facebook={member.facebook ?? ""} instagram={member.instagram ?? ""} linkedin={member.linkedin ?? ""} hoversetter={setHovers} />
                                            ))
                                        ))
                                    }
                                </div>
                            </Marquee>
                        </>
                    )}
                    {team === 2 && (
                        <>
                            <Marquee
                                speed={70}
                                direction={"right"}
                                play={hovers}
                            >
                                <div className='flex h-[40rem]'>
                                    {
                                        devs.map((item) => (
                                            item.heads.filter((person) => { return person.year === "2nd" }).map((member, idx) => (
                                                <MemberCard key={idx} name={member.name} designation={member.designation} photo={member.photo} index={idx} facebook={member.facebook ?? ""} instagram={member.instagram ?? ""} linkedin={member.linkedin ?? ""} hoversetter={setHovers} />
                                            ))
                                        ))
                                    }
                                </div>
                            </Marquee>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}