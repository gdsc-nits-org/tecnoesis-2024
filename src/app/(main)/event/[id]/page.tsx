"use client";

import Image from "next/image";
import { ArrowBigLeft } from "lucide-react";
import axios from "axios";
import { env } from "~/env";
import { useEffect, useState } from "react";
import Link from "next/link";
import CustomButton from "~/components/CustomButton";

interface Eventresponse {
  id: string;
  name: string;
  posterImage: string;
  maxTeamSize: number;
  minTeamSize: number;
  attendanceIncentive: number;
  registrationIncentive: number;
  prizeDescription: string;
  stagesDescription: string;
  description: string;
  venue: string;
  lat: number;
  lng: number;
  thirdPartyURL: string;
  registrationStartTime: string;
  registrationEndTime: string;
  extraQuestions: string[];
  module: {
    id: number;
    name: string;
    description: string;
    iconImage: string;
    coverImage: string;
    thirdPartyURL: string;
  };
}
interface EventParams {
  id: "string";
}
export const runtime = "edge";

const EventPage = ({ params }: { params: EventParams }) => {
  const [event, setEvent] = useState<Eventresponse>();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get<{ msg: Eventresponse }>(
          `${env.NEXT_PUBLIC_API_URL}/api/event/${params.id}`,
        );
        setEvent(data.msg);
      } catch (err) {
        console.log(err);
      }
    };
    void fetchEvents();
  }, [params]);

  return (
    <div>
      <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-20 px-16 lg:flex-row">
        <div className="flex flex-col items-start justify-center gap-4 lg:w-[45%]">
          <div className="w-[13rem]">
            <button
              onClick={() => {
                window.history.back();
              }}
              className="mb-[2rem] flex h-[2rem] w-[6rem] flex-row items-center justify-center gap-1 rounded-full border-2 border-white bg-gray-800 text-white"
            >
              <ArrowBigLeft />
              <div className="font-outfit text-xl">Back</div>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-outfit text-4xl text-white lg:text-7xl xl:text-[2.5vw]">
              {event?.name}
            </div>
            <div className="flex h-5 items-center justify-start font-nico text-xl text-white lg:text-2xl xl:text-[1.8vw]">
              <span className="font-outfit font-bold text-cyan-600">
                {" "}
                {event?.module?.name}
              </span>
            </div>
          </div>
          <div className="flex w-[100%] items-center justify-center rounded-3xl border-4 border-solid border-white/20 lg:hidden lg:h-[80vh]">
            {event?.posterImage && (
              <Image
                src={event.posterImage}
                alt="Event poster"
                height={300}
                width={480}
                className="h-full w-full rounded-3xl object-contain"
              />
            )}
          </div>
          <div className="w-full overflow-y-auto text-justify text-white">
            <p
              className="font-outfit text-[1rem] lg:text-[1.3rem] xl:text-[1.7vw]"
              dangerouslySetInnerHTML={{ __html: event?.description! }}
            ></p>

            <p className="font-outfit text-[0.5rem] text-cyan-600 lg:text-[1rem] xl:text-[1.5vw]">
              Venue: {event?.venue}
            </p>
          </div>

          <div className="mt-[2rem] flex w-[100%] items-center justify-center lg:justify-start">
            <Link
              href={event?.thirdPartyURL ?? `/teamRegistration/${event?.id}`}
            >
              <CustomButton text="Register" />
            </Link>
          </div>
        </div>
        <div className="hidden h-max w-[45%] overflow-hidden rounded-3xl border-4 border-white/20 lg:flex xl:w-[38%] xl:self-center">
          {event?.posterImage && (
            <Image
              src={event.posterImage}
              alt="Event poster"
              height={300}
              width={480}
              className="h-full w-full rounded-3xl object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
