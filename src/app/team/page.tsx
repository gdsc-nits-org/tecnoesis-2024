"use client";

import Card, { MemberCard } from "~/components/Card";
import data from "../../../public/team.json";
import Marquee from "react-fast-marquee";
import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen">
      <div className="bg-customBluish min-h-screen">
        <div className="flex w-full items-center justify-center">
          <h1 className="text-customBlue mb-12 mt-24 text-center font-rp1 text-4xl lg:mt-48 lg:text-6xl">
            MEET OUR TEAM{" "}
          </h1>
        </div>
        <div className="mb-12 flex justify-center gap-8 text-xl text-white">
          <button
            style={team == 1 ? { backgroundColor: "#59CAFA" } : {}}
            onClick={() => {
              setTeam(1);
            }}
            className="group flex items-center justify-between rounded-full bg-[#fff1] px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]"
          >
            <p className="group-hover:text-customBlue font-outfit duration-300 group-hover:scale-90">
              Tech Team
            </p>
          </button>
          <button
            style={team == 2 ? { backgroundColor: "#59CAFA" } : {}}
            onClick={() => {
              setTeam(2);
            }}
            className="group flex items-center justify-between rounded-full bg-[#fff1] px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]"
          >
            <p className="group-hover:text-customBlue font-outfit duration-300 group-hover:scale-90">
              Other Team
            </p>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-yellow-50">
          {data.map((item) => (
            <div className="mb-20 mt-12 w-full" key={item.id}>
              <h1 className="mb-12 text-center font-rp1 text-4xl">
                {item.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-16">
                {item.heads.map((member) => (
                  <div
                    key={member.id}
                    className="flex w-max flex-row items-center justify-center"
                  >
                    <Card
                      name={member.name}
                      designation={member.designation}
                      photo={member.photo}
                      main={item.id}
                      id={member.id}
                      facebook={member.facebook ?? ""}
                      instagram={member.instagram ?? ""}
                      linkedin={member.linkedin ?? ""}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <h1 className="mb-12 text-center font-rp1 text-4xl">TEAM MEMBERS</h1>
          <Marquee speed={70} direction={"left"} pauseOnClick={true}>
            <div className="flex h-[40rem]">
              {data.map((item) =>
                item.members.map((member) => (
                  <MemberCard
                    key={member.id}
                    name={member.name}
                    designation={member.designation}
                    photo={member.photo}
                    index={parseInt(member.id)}
                    facebook={member.facebook}
                    instagram={member.instagram}
                    linkedin={member.linkedin}
                  />
                )),
              )}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
