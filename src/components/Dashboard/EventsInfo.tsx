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
        <div className="text-white">
            <h1>Pending Requests <span>{count}</span></h1>
            <div className="flex flex-col items-center justify-center">
                {data.map((item, index) => ( // Add index as the second parameter for map
                    <div key={index} className="flex flex-row items-center justify-between"> {/* Add a unique key */}
                        <div className="flex flex-col items-center justify-center">
                            <h2>{item.event}</h2>
                            <h4><span>Team name:</span> {item.team}</h4>
                        </div>
                        <div className="flex items-center justify-center">
                            <button>Accept</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Completed = ({ data }: CompletedProps) => {
    return (
        <div className="text-white">
            <h1>Completed Requests</h1>
            <div className="flex flex-col items-center justify-center">
                {data.map((item, index) => ( // Add index as the second parameter for map
                    <div key={index} className="flex flex-row items-center justify-between"> {/* Add a unique key */}
                        <div className="flex flex-col items-center justify-center">
                            <h2>{item.event}</h2>
                            <h4><span>Team name:</span> {item.team}</h4>
                        </div>
                        <div className="flex items-center justify-center">
                            <button>Accept</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Registered = () => {
    return (
        <div className="text-white">
            <h1>Registered Requests</h1>
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
