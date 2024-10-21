"use client";

import EventsInfo from "~/components/Dashboard/EventsInfo";
import Profile from "~/components/Dashboard/Profile";
export const runtime = "edge";
const DashBoard = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-[100%] overflow-x-hidden">
      <div className="bg-blue-metall bg-clip-text text-center font-rp1 text-2xl font-normal tracking-widest text-transparent lg:text-5xl">
        DASHBOARD
      </div>
      <div className="flex flex-col gap-10 lg:flex-row mt-10">
        <div className="flex flex-row justify-start items-center">
          <Profile />
        </div>
        <div className="w-100vw flex flex-col justify-center items-center lg:justify-start lg:items-start lg:h-[65vh] lg:overflow-y-auto scrollbar-hide">
          <EventsInfo />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
