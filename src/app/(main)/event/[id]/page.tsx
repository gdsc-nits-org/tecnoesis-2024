"use client";

import Image from 'next/image';
import { ArrowBigLeft } from 'lucide-react';
import axios from 'axios';
import { env } from '~/env';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Eventresponse {
  "id": string,
  "name": string,
  "posterImage": string,
  "maxTeamSize": number,
  "minTeamSize": number,
  "attendanceIncentive": number,
  "registrationIncentive": number,
  "prizeDescription": string,
  "stagesDescription": string,
  "description": string,
  "venue": string,
  "lat": number,
  "lng": number,
  "registrationStartTime": string,
  "registrationEndTime": string,
  "extraQuestions": string[]
  "module": {
    "id": number,
    "name": string,
    "description": string,
    "iconImage": string,
    "coverImage": string,
    "thirdPartyURL": string
  }
}
interface EventParams {
  "id": "string"
}

const EventPage = ({ params }: { params: EventParams }) => {
  const [event, setEvent] = useState<Eventresponse>();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get<{ msg: Eventresponse }>(`${env.NEXT_PUBLIC_API_URL}/api/event/${params.id}`);
        setEvent(data.msg);
      }
      catch (err) {
        console.log(err)
      }
    }
    void fetchEvents();
  }, [params])

  return (
    <div>
      <div className="flex flex-col justify-center gap-20 lg:flex-row w-screen  min-h-screen px-16 items-center">
        <div className="flex flex-col items-start justify-center gap-4 lg:w-[45%]">
          <div className="w-[13rem]">
            <button onClick={() => { window.history.back() }} className="h-[2rem] w-[6rem] rounded-full bg-gray-800  border-white border-2 text-white flex flex-row items-center justify-center gap-1 mb-[2rem]">
              <ArrowBigLeft />
              <div className="font-outfit text-xl">Back</div>
            </button>
          </div>
          <div className='flex flex-col gap-2'><div className="font-rp1 text-white  text-4xl lg:text-7xl xl:text-[2.5vw]">
            {event?.name}
          </div>
            <div className="h-5  text-xl lg:text-2xl flex items-center font-nico justify-start text-white xl:text-[1.8vw]">
              <span className='text-green-200 '> MODULE: </span>
              <span className="font-bold"> {event?.module?.name}</span>
            </div></div>
          <div className="flex items-center justify-center lg:h-[80vh] w-[100%] lg:hidden rounded-3xl border-4 border-solid border-white/20">
            {event?.posterImage && (
              <Image
                src={event.posterImage}
                alt="Event poster"
                height={300}
                width={480}
                className="object-contain w-full h-full rounded-3xl"
              />
            )}
          </div>
          <div className="w-full  text-justify text-white overflow-y-auto">
            <p className='text-[1.2rem]  lg:text-[1.3rem]  xl:text-[1.7vw]'>
              {event?.description}
            </p>
          </div>


          <div className="w-[100%] mt-[2rem] flex items-center justify-center lg:justify-start">
            <Link href={`/teamRegistration/${event?.id}`}>
              <button className="h-[2rem] w-[12rem] rounded-full bg-transparent border-[#01A3F5] border-[1.4px] flex flex-row items-center justify-center text-xl font-outfit p-4 text-[#01A3F5]">Register</button>
            </Link>
          </div>
        </div>
        <div className="hidden  lg:flex h-max w-[45%] rounded-3xl border-4 border-white/20 overflow-hidden xl:w-[38%] xl:self-center">
          {event?.posterImage && (
            <Image
              src={event.posterImage}
              alt="Event poster"
              height={300}
              width={480}
              className="object-contain w-full h-full rounded-3xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default EventPage;
