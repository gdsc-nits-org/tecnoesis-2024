"use client";
import { useState } from "react";

interface PendingProps {
    count: number;
    data: { team: string; event: string }[]; // Specify the type of data for Pending
}

interface CompletedProps {
    data: { team: string; event: string; teamId: string }[]; // Specify the type of data for Completed
}

const Pending = ({ count, data }: PendingProps) => {
    return (
        <div className="text-white eventcard rounded-md">
            <h1 className="text-[2rem] bg-silver-lustre bg-clip-text text-transparent font-outfit font-bold">PENDING REQUESTS (<span className="bg-blue-metall bg-clip-text text-transparent">{count}</span>)</h1>
            <div className="flex flex-col items-center justify-center">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-row items-center justify-between w-[100%] p-[2rem] border border-[#fefdfd68] m-1"> 
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="bg-golden-lustre bg-clip-text text-transparent font-outfit font-bold text-[1rem]">{item.event}</h2>
                            <h4 className="text-[#7ea9cb]"><span>Team name:</span> {item.team}</h4>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="border border-[#BCE9FFAB] rounded-full p-4 pt-1 pb-1">Accept</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Completed = ({ data }: CompletedProps) => {
    return (
        <div className="text-white eventcard rounded-md">
            <h1 className="text-[2rem] bg-silver-lustre bg-clip-text text-transparent font-outfit font-bold">Completed Requests</h1>
            <div className="flex flex-col items-center justify-center">
                {data.map((item, index) => ( // Add index as the second parameter for map
                    <div key={index} className="flex flex-row items-center justify-between w-[100%] p-[2rem] border border-[#fefdfd68] m-1"> {/* Add a unique key */}
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="bg-golden-lustre bg-clip-text text-transparent font-outfit font-bold text-[1rem]">{item.event}</h2>
                            <h4 className="text-[#7ea9cb]"><span>Team name:</span> {item.team}</h4>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="border border-[#BCE9FFAB] rounded-full p-4 pt-1 pb-1">Accept</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Registered = () => {
    return (
        <div className="text-white  eventcard">
            <h1 className="text-[2rem]">Registered Requests</h1>
        </div>
    );
}

const EventsInfo = () => {
    const [count, setCount] = useState<number>(0);
    const [pendinglist, setPendinglist] = useState([
        {
            team: "Team1",
            event: "Event1"
        },
        {
            team: "Team2",
            event: "Event2"
        },
        {
            team: "Team3",
            event: "Event3"
        }
    ]);
    
    const [completedlist, setCompletedList] = useState([
        {
            team: "Team1",
            event: "Event1",
            teamId: "123456"
        },
        {
            team: "Team2",
            event: "Event2",
            teamId: "123455"
        },
        {
            team: "Team3",
            event: "Event3",
            teamId: "123454"
        }
    ]);
    return (
        <div className="flex flex-col items-center justify-center">
            <Pending count={count} data={pendinglist} />
            <Completed data={completedlist} />
            <Registered />
        </div>
    );
}

export default EventsInfo;
