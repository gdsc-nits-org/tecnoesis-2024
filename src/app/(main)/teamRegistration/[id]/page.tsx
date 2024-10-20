"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/app/utils/firebase";
import { env } from "~/env";
import { z } from "zod";
import { toast } from "sonner";
import CustomButton from "~/components/CustomButton";
import { Command } from "cmdk";

export const runtime = "edge";

const CommandMenu = ({
  allUsers,
  value,
  setValue,
  index,
}: {
  allUsers: UserResponse[];
  value: string[];
  setValue: (username: string, index: number) => void;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 500);
  };
  const handleChange = (username: string) => {
    setValue(username, index + 1);
  };
  return (
    <div className={`relative w-full`}>
      <Command
        className="text-white"
        label="Command Menu"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            setIsOpen(false);
          }
        }}
      >
        <Command.Input
          className="h-10 w-full origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value[index + 1]}
          onValueChange={handleChange}
          onClick={handleFocus}
        />
        {isOpen && (
          <Command.List
            className="animate-borderNeon absolute left-0 top-full mt-2 w-full rounded-lg border-[1px] border-transparent bg-black bg-opacity-60 text-center shadow-lg backdrop-blur-md"
            style={{ zIndex: 10 }}
          >
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group>
              {allUsers.map((user, idx) => (
                <Command.Item
                  key={idx}
                  onSelect={() => {
                    setValue(user.username, index + 1);
                  }}
                  className="cursor-pointer px-6 py-2 hover:bg-sky-500"
                >
                  {user.firstName} {user.lastName} - {user.username} (
                  {user.registrationId})
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        )}
      </Command>
    </div>
  );
};

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

  const fetchAllUsers = async (token: string) => {
    try {
      const { data } = await axios.get<{ msg: UserResponse[] }>(
        `${env.NEXT_PUBLIC_API_URL}/api/user/`,
        {
          headers: {
            Authorization: 1000000,
          },
        },
      );
      return data.msg;
    } catch (e) {
      console.error(e);
      return [];
    }
  };
  const fetchUser = async (token: string) => {
    try {
      const { data } = await axios.get<{ msg: UserResponse }>(
        `${env.NEXT_PUBLIC_API_URL}/api/user/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
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
          `${env.NEXT_PUBLIC_API_URL}/api/event/${params.id}`,
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

  const [members, setMembers] = useState<string[]>([]);
  const handleMemberSelect = (username: string, index: number) => {
    setMembers((prev) => {
      const updated = [...prev];
      updated[0] = teamLeader;
      updated[index] = username;
      console.log(updated);
      return updated;
    });
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        members: members,
      };
      newData.members[0] = teamLeader;
      console.log(newData);
      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    toast.promise(
      (async () => {
        try {
          if (!user) throw new Error("User not authenticated");
          const validatedData = userDataSchema.parse(formData);
          const filteredMembers = validatedData.members.filter(
            (member) => member !== teamLeader
          );
          const token =  await user?.getIdToken();
          await axios.post(
            `${env.NEXT_PUBLIC_API_URL}/api/team/event/${params.id}/add`,
            {
              name : validatedData.teamName,
              members: filteredMembers,
              extraInformation:
                "This team specialises in AI and machine learning projects",
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
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
              {} as Record<string, string>,
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
      },
    );
  };

  if (loading || !event) {
    return (
      <div className="flex h-screen w-screen items-center justify-center gap-3">
        Loading....
      </div>
    );
  }

  return (
    <div className="bg-dotted pt-15 flex min-h-[100vh] flex-col items-center justify-center gap-10 overflow-hidden">
      <div className="bg-blue-metall bg-clip-text text-center font-rp1 text-2xl font-normal tracking-widest text-transparent lg:text-5xl">
        {isSoloEvent ? "Solo Registration" : "Group Registration"}
      </div>
      <form onSubmit={handleSubmit} className="gap-15 flex flex-col">
        <div className="flex min-w-[90vw] flex-col items-center justify-center gap-7 lg:min-w-[60vw]">
          <div className="inline-flex w-full items-center justify-between lg:gap-7">
            <label
              htmlFor="teamName"
              className="w-3/10 font-outfit text-sm font-normal text-white md:text-xl lg:text-2xl"
            >
              Team Name:
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]"
              required
            />
          </div>

          <div className="inline-flex w-full items-center justify-between lg:gap-7">
            <label
              htmlFor="teamLeader"
              className="w-3/10 font-outfit text-sm font-normal text-white md:text-xl lg:text-2xl"
            >
              Leader&apos;s Username:
            </label>
            <div className="relative flex w-1/2 items-center">
              <input
                type="text"
                id="teamLeader"
                name="teamLeader"
                value={teamLeader}
                className="h-10 w-full origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]"
                readOnly
              />
            </div>
          </div>

          {!isSoloEvent &&
            Array.from({ length: event?.maxTeamSize - 1 }).map((_, idx) => (
              <div
                key={idx}
                className="inline-flex w-full items-center justify-between lg:gap-7"
              >
                <label
                  htmlFor={`member${idx + 1}`}
                  className="w-3/10 font-outfit text-sm font-normal text-white md:text-xl lg:text-2xl"
                >
                  Member {idx + 2} Username:
                </label>
                <div className="relative flex w-1/2 items-center">
                  <CommandMenu
                    allUsers={allUsers}
                    value={members}
                    setValue={handleMemberSelect}
                    index={idx}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="mt-10 flex w-full items-center justify-around">
        <div className="lg:translate-x-25 mt-10 flex w-full items-center justify-around">
          <button type="submit" className="w-[60vw] lg:w-[30vw] xl:w-[20vw]"><CustomButton text="REGISTER" /></button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterTeam;
