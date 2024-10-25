"use client";
import EventsInfo from "~/components/Dashboard/EventsInfo";
import Profile from "~/components/Dashboard/Profile";
import { Suspense } from "react";
import Loader from "~/components/Loader";

export const runtime = "edge";
const DashBoard = () => {
  return (
    <div className="dashboardpage flex min-h-screen w-[100%] flex-col items-center justify-center overflow-x-hidden">
      <div className="bg-blue-metall bg-clip-text text-center font-rp1 text-3xl font-normal tracking-widest text-transparent lg:text-4xl 2xl:text-6xl 3xl:text-9xl">
        DASHBOARD
      </div>
      <div className="mt-10 flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-row items-center justify-start">
          <Profile />
        </div>
        <div className="w-100vw scrollbar-hide flex flex-col items-center justify-center lg:h-[65vh] lg:items-start lg:justify-start lg:overflow-y-auto">
          <EventsInfo />
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <DashBoard />
    </Suspense>
  );
}
