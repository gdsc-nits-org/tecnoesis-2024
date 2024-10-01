"use client";
import { useEffect, useState } from "react";
import { Oxanium } from "next/font/google";
const oxanium = Oxanium({ subsets: ["latin"] });

interface ItimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(
      "November 7, 2024 00:00:00 GMT+05:30",
    ).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft: ItimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`${oxanium.className} select-none whitespace-nowrap border border-[#607D8B] bg-[#1E1E1E] p-2 text-center text-2xl text-[#E3F2FD]`}
    >
      <div className="inline-flex items-center">
        <span className="font-rp1 text-3xl font-bold text-[#FF6F61] 2xl:text-4xl">
          ETA
        </span>
        <div
          className="mx-2 flex flex-col items-center drop-shadow-md lg:text-6xl 2xl:text-8xl"
          style={{ textShadow: "0 0 10px #E3F2FD" }}
        >
          <div>{String(timeLeft.days || 0).padStart(2, "0")}:</div>
          <div className="font-rp1 text-sm">Days</div>
        </div>
        <div
          className="mx-2 flex flex-col items-center drop-shadow-md lg:text-6xl 2xl:text-8xl"
          style={{ textShadow: "0 0 10px #E3F2FD" }}
        >
          <div>{String(timeLeft.hours || 0).padStart(2, "0")}:</div>
          <div className="font-rp1 text-sm">Hours</div>
        </div>
        <div
          className="mx-2 flex flex-col items-center drop-shadow-md lg:text-6xl 2xl:text-8xl"
          style={{ textShadow: "0 0 10px #E3F2FD" }}
        >
          <div>{String(timeLeft.minutes || 0).padStart(2, "0")}:</div>
          <div className="font-rp1 text-sm">Mins</div>
        </div>
        <div
          className="mx-2 flex flex-col items-center drop-shadow-md lg:text-6xl 2xl:text-8xl"
          style={{ textShadow: "0 0 10px #E3F2FD" }}
        >
          <div>{String(timeLeft.seconds || 0).padStart(2, "0")}</div>
          <div className="font-rp1 text-sm">Secs</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
