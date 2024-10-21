"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "~/app/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { env } from "~/env";
import { ChevronDown, Check, X } from "lucide-react";
import { toast } from "sonner";

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
    count: number,
    data: teamResponse[],
    token: string
}

interface allProps {
    data: teamResponse[],
    token: string
}

interface TeamInfoAboutEvents {
    teamName: string,
    registrationStatus: string,
    event: {
        name: string,
        venue: string,
        lat: string,
        lng: string,
        module: {
            name: string
        }
    }
}
const Pending = ({ count, data, token }: PendingProps) => {
    const [eventnames, setEventnames] = useState<string[]>([]);;
    const handleAccept = (teamid: string) => {
        async function changeStatus() {
            const response = await axios.patch(`${env.NEXT_PUBLIC_API_URL}/api/team/${teamid}/respond`, {
                status: "REGISTERED"
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log(response);
            return response;
        }
        toast.promise(
            changeStatus(),
            {
                loading: 'Updating status...',
                success: () => {
                    window.location.reload();
                    return 'Invitation Accepted';
                },
                error: () => 'Error updating status. Please try again.'
            }
        );
    };
    useEffect(() => {
        async function fetchEventNames(teams: teamResponse[]) {
            try {
                const fetchedEventNames = await Promise.all(
                    teams.map(async (team) => {
                        const { data } = await axios.get<{ msg: TeamInfoAboutEvents }>(
                            `${env.NEXT_PUBLIC_API_URL}/api/team/${team.team.id}`,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        );
                        return data.msg.event.name;
                    })
                );
                setEventnames(fetchedEventNames);
            } catch (error) {
                console.error("Error fetching event names", error);
            }
        }
        void fetchEventNames(data);
    }, [data]);
    return (
        <div className="text-white eventcard rounded-md">
            <h1 className="text-[1rem] sm:text-[1.5rem] bg-silver-lustre bg-clip-text text-transparent font-outfit font-bold text-center">PENDING REQUESTS (<span className="bg-blue-metall bg-clip-text text-transparent">{count}</span>)</h1>
            <div className="flex flex-col items-center justify-center">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-row items-center justify-between w-[100%] p-[2rem] border border-[#fefdfd68] m-1 rounded-[10px]">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="bg-golden-lustre bg-clip-text text-transparent font-outfit font-bold text[1rem sm:text-[1.2rem]">{eventnames[index]}</h2>
                            <h4 className="text-[#7ea9cb] font-outfit font-bold text[1rem sm:text-[1.2rem]"><span>Team name:</span> {item.team.teamName}</h4>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="border border-[#BCE9FFAB] rounded-full p-4 pt-1 pb-1" onClick={() => handleAccept(item.team.id)}>Accept</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Registered = ({ data, token }: allProps) => {
    const [opened, setOpened] = useState(false);
    const [eventnames, setEventnames] = useState<string[]>([]);
    useEffect(() => {
        async function fetchEventNames(teams: teamResponse[]) {
            try {
                const fetchedEventNames = await Promise.all(
                    teams.map(async (team) => {
                        const { data } = await axios.get<{ msg: TeamInfoAboutEvents }>(
                            `${env.NEXT_PUBLIC_API_URL}/api/team/${team.team.id}`,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        );
                        return data.msg.event.name;
                    })
                );
                setEventnames(fetchedEventNames);
            } catch (error) {
                console.error("Error fetching event names", error);
            }
        }
        void fetchEventNames(data);
    }, [data]);

    const handleOpen = () => {
        setOpened(!opened);
    }
    return (
        <div className="text-white eventcard rounded-md">
            <h1 className="text-[1rem] sm:text-[1.5rem] bg-silver-lustre bg-clip-text text-transparent font-outfit font-bold text-center">EVENTS REGISTERED</h1>
            <div className="flex flex-col items-center justify-center">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-row items-center justify-between w-[100%] p-[2rem] border border-[#fefdfd68] m-1 rounded-[10px]">
                        <div className="flex flex-col w-[100%]">
                            <div className="flex flex-col sm:flex-row items-center justify-between w-[100%]">
                                <div className="flex flex-col items-center justify-between">
                                    <h2 className="bg-golden-lustre bg-clip-text text-transparent font-outfit font-bold text[1rem sm:text-[1.2rem]">{eventnames[index]}</h2>
                                    <h4 className="text-[#7ea9cb] font-outfit font-bold text[1rem sm:text-[1.2rem]"><span>Team name:</span> {item.team.teamName}</h4>
                                </div>
                                <div className="flex items-center justify-center mt-[1rem] sm:mt[0rem]">
                                    <button className="flex-shrink-0 rounded-full border border-[rgba(188,233,255,0.67)] bg-[rgba(56,70,77,0.23)] p-1 font-outfit text-xs font-semibold uppercase leading-5 tracking-[0.06em] text-white transition-all duration-300 hover:bg-[rgba(56,70,77,0.4)] sm:px-3 sm:py-1.5 md:px-4 md:py-2" onClick={handleOpen}>
                                        <div className="flex flex-row"><span style={{ transform: `rotateZ(${!opened ? '0deg' : '180deg'})`, transition: 'ease 100ms' }}><ChevronDown /></span><span>View Team</span></div>
                                    </button>
                                </div>
                            </div>
                            {opened &&
                                <table className="relative w-full table-auto text-xs sm:text-sm right-0 sm:right-0 mt-4 sm:mt-0">
                                    <thead>
                                        <tr className="border-b border-gray-700">
                                            <th className="px-2 py-1 text-left font-semibold text-gray-300 sm:px-3 sm:py-2">
                                                Name
                                            </th>
                                            <th className="px-2 py-1 text-left font-semibold text-gray-300 sm:px-3 sm:py-2">
                                                Username
                                            </th>
                                            <th className="px-2 py-1 text-left font-semibold text-gray-300 sm:px-3 sm:py-2">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.team.members.map((member, index) => (
                                            <tr key={index} className="border-b border-gray-700">
                                                <td className="px-2 py-1 text-gray-300 sm:px-3 sm:py-2">
                                                    {member.user.firstName} {member.user.middleName} {member.user.lastName}
                                                </td>
                                                <td className="px-2 py-1 text-gray-300 sm:px-3 sm:py-2">
                                                    {member.user.username}
                                                </td>
                                                <td className="px-2 py-1 text-gray-300 sm:px-3 sm:py-2">
                                                    {member.registrationStatus === "REGISTERED" ? (
                                                        <Check className="h-4 w-4 text-green-500 sm:h-5 sm:w-5" />
                                                    ) : (
                                                        <X className="h-4 w-4 text-red-500 sm:h-5 sm:w-5" />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            }
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

const EventsInfo = () => {
    const [count, setCount] = useState<number>(0);
    const [_user] = useAuthState(auth);
    const [pendinglist, setPendinglist] = useState<teamResponse[]>([]);
    const [allevents, setAllEvents] = useState<teamResponse[]>([]);
    const [token, setToken] = useState<string | null>(null);
    useEffect(() => {
        async function fetchTeam() {
            try {
                const mytoken = await _user?.getIdToken();
                if(!mytoken) return;
                setToken(mytoken);
                const { data } = await axios.get<{ msg: teamResponse[] }>(`${env.NEXT_PUBLIC_API_URL}/api/user/me/my_teams`, {
                    headers: {
                        Authorization: `Bearer ${mytoken}`
                    }
                });
                const pending = data.msg.filter((item) => {
                    const isCurrentUserPending = item.team.members.some(
                        (member) => member.id === item.id && member.registrationStatus === "PENDING"
                    );
                    return isCurrentUserPending;
                });
                setAllEvents(data.msg);
                setPendinglist(pending);
                setCount(pending.length);
            }
            catch (err) {
                console.log(err);
            }
        }
        void fetchTeam();
    }, [_user]);
    return (
        <div className="flex flex-col items-center justify-center w-[80vw] lg:w-[30vw]">
            {token && < Pending count={count} data={pendinglist} token={token} />}
            {token && <Registered data={allevents} token={token} />}
        </div>
    );
}

export default EventsInfo;
