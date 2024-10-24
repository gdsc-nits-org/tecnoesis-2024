"use client";

import Card, { MemberCard } from "~/components/Card";
import CoreData from "../../../../public/data/core.json";
import TechData from "../../../../public/data/tech.json";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import FinalFooter from "~/components/FinalFooter";
export const runtime = "edge";
export default function Team() {
  const [team, setTeam] = useState<1 | 2 | 3>(1);
  const [isDesktop, setIsDesktop] = useState(true);
  const [hovers, setHovers] = useState(true);
  const techLeads = TechData.filter((item) => {
    return item.name.split(" ")[1] === "Lead";
  });
  const devs = TechData.filter((item) => {
    return item.name.split(" ")[1] !== "Lead";
  });
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
    <div className="min-h-screen w-full">
      <div className="bg-dotted min-h-screen w-full">
        <div className="flex w-full items-center justify-center">
          <h1 className="mb-12 mt-24 text-center font-rp1 text-4xl text-customBlue lg:mt-48 lg:text-6xl">
            MEET OUR TEAM{" "}
          </h1>
        </div>
        {!isDesktop ? (
          <div className="border-1 mb-12 flex justify-center gap-0 border-white text-xl text-white ">
            <button
              style={
                team == 1
                  ? {
                      backgroundColor: "#59CAFA",
                      border: "0 solid transparent",
                      borderTopLeftRadius: "1rem",
                      borderBottomLeftRadius: "1rem",
                    }
                  : {
                      border: "0 solid transparent",
                      borderTopLeftRadius: "1rem",
                      borderBottomLeftRadius: "1rem",
                    }
              }
              onClick={() => {
                setTeam(1);
              }}
              className="flex items-center justify-between bg-[#fff1] px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]"
            >
              <p className="font-outfit duration-300 group-hover:scale-90">
                Core Team
              </p>
            </button>
            <button
              style={team == 2 ? { backgroundColor: "#59CAFA" } : {}}
              onClick={() => {
                setTeam(2);
              }}
              className="hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5`),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)] flex items-center justify-between bg-[#fff1] px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000"
            >
              <p className="font-outfit duration-300 group-hover:scale-90">
                Tech Team
              </p>
            </button>
            <button
              style={
                team == 3
                  ? {
                      backgroundColor: "#59CAFA",
                      border: "0 solid transparent",
                      borderTopRightRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }
                  : {
                      border: "0 solid transparent",
                      borderTopRightRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }
              }
              onClick={() => {
                setTeam(3);
              }}
              className="flex items-center justify-between bg-[#fff1] px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]"
            >
              <p className="font-outfit duration-300 group-hover:scale-90">
                Module Heads
              </p>
            </button>
          </div>
        ) : (
          <div className="mb-12 flex justify-center gap-8 text-xl text-white">
            <button
              style={team == 1 ? { backgroundColor: "#59CAFA" } : {}}
              onClick={() => {
                setTeam(1);
              }}
              className="group flex items-center justify-between rounded-full bg-[#fff1] px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]"
            >
              <p className="font-outfit duration-300 group-hover:scale-90">
                Core Team
              </p>
            </button>
            <button
              style={team == 2 ? { backgroundColor: "#59CAFA" } : {}}
              onClick={() => {
                setTeam(2);
              }}
              className="group flex items-center justify-between rounded-full bg-[#fff1] px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]"
            >
              <p className="font-outfit duration-300 group-hover:scale-90">
                Tech Team
              </p>
            </button>
            <button
              style={team == 3 ? { backgroundColor: "#59CAFA" } : {}}
              onClick={() => {
                setTeam(3);
              }}
              className="group flex items-center justify-between rounded-full bg-[#fff1] px-[2vw] py-[0.75vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]"
            >
              <p className="font-outfit duration-300 group-hover:scale-90">
                Module Heads
              </p>
            </button>
          </div>
        )}
        <div className="flex flex-col items-center justify-center text-yellow-50">
          {team === 1 &&
            CoreData.map((item, index) => (
              <div className="mb-20 mt-12 w-full" key={index}>
                <h1 className="mb-12 text-center font-rp1 text-4xl">
                  {item.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-16">
                  {item.heads.map((member, idx) => (
                    <div
                      key={idx}
                      className="flex w-max flex-row items-center justify-center"
                    >
                      <Card
                        name={member.name}
                        designation={member.designation}
                        photo={member.photo}
                        main={item.id}
                        id={String(idx)}
                        facebook={member.facebook ?? ""}
                        instagram={member.instagram ?? ""}
                        linkedin={member.linkedin ?? ""}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

          {team === 2 &&
            techLeads.map((item, index) => (
              <div className="mb-20 mt-12 w-full" key={index}>
                <h1 className="mb-12 text-center font-rp1 text-4xl">
                  {item.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-16">
                  {item.heads.map((member, idx) => (
                    <div
                      key={idx}
                      className="flex w-max flex-row items-center justify-center"
                    >
                      <Card
                        name={member.name}
                        designation={member.designation}
                        photo={member.photo}
                        main={item.id}
                        id={String(idx)}
                        facebook={member.facebook ?? ""}
                        instagram={member.instagram ?? ""}
                        linkedin={member.linkedin ?? ""}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          {team === 2 && (
            <>
              <h1 className="mb-12 text-center font-rp1 text-4xl">
                TEAM MEMBERS
              </h1>
              <Marquee speed={70} direction={"left"} play={hovers}>
                <div className="flex h-[40rem]">
                  {devs.map((item) =>
                    item.heads
                      .filter((person) => {
                        return person.year === "3rd";
                      })
                      .map((member, idx) => (
                        <MemberCard
                          key={idx}
                          name={member.name}
                          designation={member.designation}
                          photo={member.photo}
                          index={idx}
                          facebook={member.facebook ?? ""}
                          instagram={member.instagram ?? ""}
                          linkedin={member.linkedin ?? ""}
                          hoversetter={setHovers}
                        />
                      )),
                  )}
                </div>
              </Marquee>
            </>
          )}
          {team === 2 && (
            <>
              <Marquee speed={70} direction={"right"} play={hovers}>
                <div className="flex h-[40rem]">
                  {devs.map((item) =>
                    item.heads
                      .filter((person) => {
                        return person.year === "2nd";
                      })
                      .map((member, idx) => (
                        <MemberCard
                          key={idx}
                          name={member.name}
                          designation={member.designation}
                          photo={member.photo}
                          index={idx}
                          facebook={member.facebook ?? ""}
                          instagram={member.instagram ?? ""}
                          linkedin={member.linkedin ?? ""}
                          hoversetter={setHovers}
                        />
                      )),
                  )}
                </div>
              </Marquee>
            </>
          )}
        </div>
      </div>
    <FinalFooter />
    </div>
  );
}
