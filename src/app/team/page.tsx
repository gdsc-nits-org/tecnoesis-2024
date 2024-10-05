"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Card from '~/components/Card';
import data from "../../../public/team.json";
export default function Team() {
    const [index, setIndex] = useState(0);
    return (
        <div className='min-h-screen'>
            <div className="bg-customBluish min-h-screen">
                <Image
                    src="/team/shooting-stars.960x540 1.png"
                    className="h-0.5vh w-full bg-cover bg-center"
                    width={500}
                    height={500}
                    alt="Space" />
                <div className="w-full h-fit top-[198px] left-[-17px] flex justify-center items-center">
                    <h1 className="font-rp1 text-3xl text-customBlue">MEET OUR TEAM </h1>
                </div>
                {/* <div className="flex flex-wrap justify-center bg-red-500">
                    {teams[index]!.members.map((member, id) => (
                        <Card
                            key={id}
                            name={member.name}
                            designation={member.designation}
                            photo={member.photo}
                        />
                    )
                    )}
                </div> */}
                <div className='flex flex-col justify-center items-center text-yellow-50'>
                    {
                        data.map((item) => (
                            <div className='w-full' key={item.id}>
                                <h1 className='font-rp1 flex justify-center items-center'>{item.name}</h1>
                                {
                                    item.members.map((member) => (
                                        <div key={member.id} className='flex flex-row justify-center items-center'>
                                            <Card name={member.name} designation={member.designation} photo={member.photo} />
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}