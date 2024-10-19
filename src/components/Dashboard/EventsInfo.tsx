"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "~/app/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { env } from "~/env";

interface CompletedProps {
    data: { team: string; event: string; teamId: string }[];
}

interface teamResponse {
    id: string,
    role: string,
    registrationStatus: string,
    team: {
        id: string,
        registrationStatus: string,
        teamName: string,
        extraInformation: string[],
        members: [
            {
                id: string,
                registrationStatus: string,
                role: string,
                user: {
                    id: string,
                    username: string,
                    firstName: string,
                    middleName: string,
                    lastName: string,
                    imageUrl: string
                }
            }
        ]
    }
}

interface PendingProps {
    count: number;
    data: teamResponse[],
    token: string | null
}
const Pending = ({ count, data, token }: PendingProps) => {
    const handleAccept=(teamid:string)=>{
        async function changeStatus(){
            try{
                const upd = await axios.patch(`${env.NEXT_PUBLIC_API_URL}/api/teams/${teamid}/respond`,{
                        status: "REGISTERED"
                    },
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    }
                );
                console.log(upd);
            }
            catch{
                console.log("Error");
            }      
        }
        void changeStatus();
    }
    return (
        <div className="text-white eventcard rounded-md">
            <h1 className="text-[2rem] bg-silver-lustre bg-clip-text text-transparent font-outfit font-bold text-center">PENDING REQUESTS (<span className="bg-blue-metall bg-clip-text text-transparent">{count}</span>)</h1>
            <div className="flex flex-col items-center justify-center">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-row items-center justify-between w-[100%] p-[2rem] border border-[#fefdfd68] m-1 rounded-[10px]">
                        <div className="flex flex-col items-center justify-center">
                            {/* <h2 className="bg-golden-lustre bg-clip-text text-transparent font-outfit font-bold text-[1rem]">{item.event}</h2> */}
                            <h4 className="text-[#7ea9cb]"><span>Team name:</span> {item.team.teamName}</h4>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="border border-[#BCE9FFAB] rounded-full p-4 pt-1 pb-1" onClick={()=>handleAccept(item.team.id)}>Accept</button>
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
            <h1 className="text-[2rem] bg-silver-lustre bg-clip-text text-transparent font-outfit font-bold text-center">Completed</h1>
            <div className="flex flex-col items-center justify-center">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-row items-center justify-between w-[100%] p-[2rem] border border-[#fefdfd68] m-1 rounded-[10px]">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="bg-golden-lustre bg-clip-text text-transparent font-outfit font-bold text-[1rem]">{item.event}</h2>
                            <h4 className="text-[#7ea9cb]"><span>Team name:</span> {item.team}</h4>
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
            <h1 className="text-[2rem]">Registered Events</h1>
        </div>
    );
}

const EventsInfo = () => {
    const [count, setCount] = useState<number>(0);
    const [_user] = useAuthState(auth);
    const [pendinglist, setPendinglist] = useState<teamResponse[]>([]);
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
    const token = _user ? _user.uid : null;
    useEffect(() => {
        async function fetchTeam() {
            try {
                const { data } = await axios.get<{ msg: teamResponse[] }>(`${env.NEXT_PUBLIC_API_URL}/api/user/me/my_teams`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const pending = data.msg.filter((item) => {
                    const isCurrentUserPending = item.team.members.some(
                        (member) => member.id === item.id && member.registrationStatus === "PENDING"
                    );
                    return isCurrentUserPending;
                });
                setPendinglist(pending);
                setCount(pending.length);
            }
            catch (err) {
                console.log(err);
            }
        }
        void fetchTeam();
    });
    return (
        <div className="flex flex-col items-center justify-center">
            <Pending count={count} data={pendinglist} token={token} />
            <Completed data={completedlist} />
            <Registered />
        </div>
    );
}

export default EventsInfo;
