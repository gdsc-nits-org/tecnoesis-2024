"use client"
import {useState, useEffect} from "react";
import axios from "axios";
export const runtime="edge";
import data from "../../../../public/data/data.json";
interface GetEventAPIResponse {
  status: string;
  msg: Event;
}
export default function Events(){
    return(
        <>
        <div className="bg-customBluish">
          <div className="flex flex-col">
            {data.map((item)=>(
                <div className="font-rp1" key={item.}>{item.title}</div>
            ))
            }

          </div>
        </div>
        </>
    )
}

useEffect(()=>{
  const fetchEvent=async()=>{
    try{
        const {data}=await axios.get<GetEventAPIResponse>(
          `${env.NEXT_PUBLIC_API_URL}/api/event`,
        );
    }
    catch(e){
      console.error(e);
    }
  }
})