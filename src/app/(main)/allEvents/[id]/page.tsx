"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { env } from "~/env";
import EventCard from "~/components/EventCard";
import { set, string } from "zod";


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
}
interface EventDesc {
  "id": number;
  "name": string;
  "description": string;
  "iconImage": string;
  "coverImage": string;
  "thirdPartyUrl": string;
}

interface EventParams {
  id: string;
}
export const runtime = "edge";

const AllEvents = ({ params }: { params: EventParams }) => {
  const [events, setEvents] = useState<Eventresponse[]>([])
  const [moduleName, setModuleName] = useState<string>()
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get<{ msg: Eventresponse[] }>(`${env.NEXT_PUBLIC_API_URL}/api/module/${params.id}/event`)
        setEvents(data.msg)
      }
      catch (e) {
        console.log(e);
      }
    }
    void fetchEvent();
  }, [params])

  useEffect(() => {
    const fetchEventDec = async () => {
      try {
        const { data } = await axios.get<{ msg: EventDesc }>(`${env.NEXT_PUBLIC_API_URL}/api/module/${params.id}`)
        setModuleName(data.msg.name)
      }
      catch (e) {
        console.log(e);
      }
    }
    void fetchEventDec();
  }, [params])
  return (
    <>
      <div className="bg-dotted pt-15 flex min-h-[100vh] flex-col items-center justify-center gap-10 overflow-hidden">
        <div className="bg-blue-metall bg-clip-text text-center font-rp1 text-2xl font-normal uppercase tracking-widest text-transparent lg:text-5xl">
          {moduleName}
        </div>
        <div>
          {
            events.map((event, ind) => (
              <EventCard key={ind} eventID={event.id} eventPoster={event.posterImage} eventname={event.name} modulename={moduleName ?? "Loading module name ...."} />
            )
            )
          }
        </div>
      </div>
    </>
  )
}

export default AllEvents;