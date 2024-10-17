"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { env } from "~/env";
import { z } from "zod";
import { toast } from "sonner";
import Image from "next/image";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";

export const runtime = "edge";

interface Team {
    id: string;
    name: string;
    members: string[];
}

interface Event {
    id: string;
    name: string;
    maxTeamSize: number;
    minTeamSize: number;
}

interface UserResponse {
    balance: number;
    collegeName: string;
    email: string;
    firebaseId: string;
    firstName: string;
    id: string;
    imageUrl: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    registrationId: string;
    username: string;
}

interface GetEventAPIResponse {
    status: string;
    msg: Event;
}

const userDataSchema = z.object({
    teamName: z.string().min(1, "Team name is required"),
    members: z.array(z.string()).min(1, "At least one member is required"),
});

interface TeamData {
    teamName: string;
    members: string[];
    extraInformation?: string[];
}

interface EventParams {
    id: string;
}

const RegisterTeam = ({ params }: { params: EventParams }) => {
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    const [formData, setFormData] = useState<TeamData>({
        teamName: "",
        members: [],
        extraInformation: [],
    });
    const [isSoloEvent, setIsSoloEvent] = useState<boolean>(false);
    const [event, setEvent] = useState<Event | null>(null);
    const [allUsers, setAllUsers] = useState<UserResponse[]>([]);
    const [teamLeader, setTeamLeader] = useState<string>("John_Doe");
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [search, setSearch] = useState("");
    const searchButtonRef = useRef<HTMLDivElement | null>(null);

    const fetchAllUsers = async (token: string) => {
        try {
            const { data } = await axios.get<{ msg: UserResponse[] }>(
                `${env.NEXT_PUBLIC_API_URL}/api/user/`,
                {
                    headers: {
                        Authorization: 1000000,
                    },
                }
            );
            console.log(data);
            return data.msg;
        } catch (e) {
            console.error(e);
            return [];
        }
    };
    const fetchUser = async (token: string) => {
        try {
            console.log(token);
            const { data } = await axios.get<{ msg: UserResponse }>(
                `${env.NEXT_PUBLIC_API_URL}/api/user/me`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(data);
            return data.msg.username;
        } catch (e) {
            console.error(e);
            return;
        }
    };

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const { data } = await axios.get<GetEventAPIResponse>(
                    `${env.NEXT_PUBLIC_API_URL}/api/event/${params.id}`
                );
                const eventData = data.msg;
                setEvent(eventData);
                setIsSoloEvent(eventData.maxTeamSize === eventData.minTeamSize);
            } catch (e) {
                console.error(e);
            }
        };
        void fetchEventData();
    }, [params.id]);

    useEffect(() => {
        void (async () => {
            const token = await user?.getIdToken();
            if (!token) return;
            setAllUsers(await fetchAllUsers(token));
        })();
        void (async () => {
            const token = user?.uid;
            if (!token) return;
            const leaderUsername = await fetchUser(token);
            if (leaderUsername) {
                setTeamLeader(leaderUsername);
            }
        })();

    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // const handleTeamMemberSelect = (username: string) => {
    //     if (
    //         !formData.members.includes(username) &&
    //         formData.members.length < (event?.maxTeamSize || Infinity)
    //     ) {
    //         setFormData((prevData) => ({
    //             ...prevData,
    //             members: [...prevData.members, username],
    //         }));
    //     }
    //     setIsOpen(false);
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});

        toast.promise(
            (async () => {
                try {
                    if (!user) throw new Error("User not authenticated");

                    const validatedData = userDataSchema.parse(formData);

                    const token = await user.getIdToken();
                    await axios.post(
                        `${env.NEXT_PUBLIC_API_URL}/api/team/event/${params.id}/add`,
                        {
                            ...validatedData,
                            extraInformation: "This team specialises in AI and machine learning projects",
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    toast.success("Team Created successfully.");
                    setTimeout(() => {
                        router.push("/");
                    }, 200);
                } catch (err) {
                    if (err instanceof z.ZodError) {
                        const zodErrors = err.errors.reduce(
                            (acc, current) => {
                                const key = String(current.path[0]);
                                return {
                                    ...acc,
                                    [key]: current.message,
                                };
                            },
                            {} as Record<string, string>
                        );
                        setFormErrors(zodErrors);
                    } else {
                        toast.error("An error occurred during registration.");
                        console.error(err);
                    }
                }
            })(),
            {
                loading: "Registering...",
                success: "Registration successful!",
                error: "An error occurred during registration.",
            }
        );
    };

    // const filteredUsers = allUsers?.filter(
    //     (user) => !formData.members?.includes(user.username)
    // );

    if (loading || !event) {
        return (
            <div className="flex w-screen h-screen justify-center items-center gap-3">
                Loading....
            </div>
        );
    }

    return (
        <div className="bg-dotted flex flex-col gap-10 min-h-[100vh] items-center justify-center pt-15 overflow-hidden">
            <div className="bg-blue-metall bg-clip-text text-transparent text-center text-2xl lg:text-5xl font-normal font-rp1 tracking-widest">
                {isSoloEvent ? "Solo Registration" : "Group Registration"}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-15">
                <div className="flex flex-col items-center justify-center gap-7 min-w-[90vw] lg:min-w-[60vw]">
                    <div className="inline-flex justify-between items-center lg:gap-7 w-full">
                        <label
                            htmlFor="teamName"
                            className="text-white font-outfit text-sm md:text-xl lg:text-2xl font-normal w-3/10"
                        >
                            Team Name:
                        </label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            className="bg-transparent origin-top-left  rounded-[10.036px] border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] w-1/2 h-10 text-white text-center"
                            required
                        />
                    </div>

                    <div className="inline-flex justify-between items-center lg:gap-7 w-full">
                        <label
                            htmlFor="teamLeader"
                            className="text-white font-outfit text-sm md:text-xl lg:text-2xl font-normal w-3/10"
                        >
                            Leader&apos;s Username:
                        </label>
                        <div className="relative w-1/2 flex items-center">
                            <input
                                type="text"
                                id="teamLeader"
                                name="teamLeader"
                                value={teamLeader}
                                className="bg-transparent origin-top-left  rounded-[10.036px] border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] w-full h-10 text-white text-center"
                                readOnly
                            />
                        </div>
                    </div>

                    {/* {!isSoloEvent &&
                        Array.from({ length: event?.maxTeamSize - 1 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="inline-flex justify-between items-center lg:gap-7 w-full"
                            >
                                <label
                                    htmlFor={`member${idx + 1}`}
                                    className="text-white font-outfit text-sm md:text-xl lg:text-2xl font-normal w-3/10"
                                >
                                    Member {idx + 2} Username:
                                </label>
                                <div className="relative w-1/2 flex items-center">
                                    <input
                                        type="text"
                                        id={`member${idx + 1}`}
                                        value={formData.members[idx + 1] ?? ""}
                                        onChange={(e) =>
                                            handleTeamMemberSelect(e.target.value)
                                        }
                                        className="bg-transparent origin-top-left  rounded-[10.036px] border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] w-full h-10 text-white text-center"
                                    />
                                    <div
                                        onClick={() => setIsOpen(true)}
                                        className="absolute right-0 mr-2 cursor-pointer text-white"
                                    >
                                        🔍
                                    </div>
                                </div>
                            </div>
                        ))} */}
                </div>

                {/* <CommandPalette
                    isOpen={isOpen}
                    onChangeSearch={(value: any) => setSearch(value)}
                    onChangeOpen={(open: any) => setIsOpen(open)}
                    search={search}
                    pages={[
                        {
                            id: 'root',
                            children: filterItems(
                                filteredUsers?.map((user) => ({
                                    id: user.username,
                                    children: user.username,
                                })) ?? [],
                                search
                            ).map((item: any) => (
                                <CommandPalette.ListItem
                                    key={item.id}
                                    index={getItemIndex(item)}
                                    onClick={() => handleTeamMemberSelect(item.id)}
                                >
                                    {item.children}
                                </CommandPalette.ListItem>
                            )),
                        },
                    ]}
                /> */}

                <div className="w-full flex items-center justify-around mt-10 ">
                    <button
                        type="submit"
                        className="flex flex-row items-center justify-center gap-5 w-60 lg:w-80 h-15 p-2 bg-transparent origin-top-left rounded-full border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#01A3F5] hover:via-[#0AEFF6] hover:to-[#2F629C] hover:border-none"
                    >
                        <div className="flex items-center justify-center gap-5 w-full h- full ">
                            <Image
                                src='/Images/tabler_planet.svg'
                                alt="logo"
                                width={25}
                                height={25}
                            />
                            <div className="font-outfit text-lg lg:text-xl text-white">
                                Register
                            </div>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterTeam;
