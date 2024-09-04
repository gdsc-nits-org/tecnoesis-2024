import { useEffect, useState } from 'react';
import { Oxanium } from 'next/font/google';
const oxanium = Oxanium({ subsets: ['latin'] });

interface ItimeLeft {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
}

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('October 26, 2024 00:00:00').getTime();
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
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
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
    <div className={`${oxanium.className} text-2xl text-center whitespace-nowrap border p-2 `} style={{ color: 'rgba(184, 70, 39, 1)' }}>
      <div className="inline-flex items-center">
        <span className="text-3xl font-bold">T-</span>
        <div className="flex flex-col items-center mx-2">
          <div>{String(timeLeft.days || 0).padStart(2, '0')}</div>
          <div className="text-sm">Days</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div>{String(timeLeft.hours || 0).padStart(2, '0')}</div>
          <div className="text-sm">Hour</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div>{String(timeLeft.minutes || 0).padStart(2, '0')}</div>
          <div className="text-sm">Mins</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div>{String(timeLeft.seconds || 0).padStart(2, '0')}</div>
          <div className="text-sm">Secs</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
