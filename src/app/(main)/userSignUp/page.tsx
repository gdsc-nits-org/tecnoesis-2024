"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { env } from "~/env";
import Image from "next/image";
import { User } from "firebase/auth";
import { z } from "zod";
import { toast } from "sonner";

export const runtime = "edge";
const userDataSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  collegeName: z.string().min(1, "College name is required"),
  registrationId: z.string().min(1, "Registration ID is required"),
  balance: z.number().min(0, "Balance cannot be negative"),
});
interface UserData {
  firstName: string;
  middleName?: string;
  lastName: string;
  phoneNumber: string;
  username: string;
  collegeName: string;
  registrationId: string;
  balance: number;
}

async function createUser(data: UserData, user: User) {
  const payload = {
    email: user.email,
    firebaseId: user.uid,
    imageUrl: user.photoURL,
    ...data,
  };
  const token = await user.getIdToken();
  const response = await axios.post(
    `${env.NEXT_PUBLIC_API_URL}/api/auth/signup`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response;
}

const CompleteProfile = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    username: "",
    collegeName: "",
    registrationId: "",
    balance: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setError(null);

    toast.promise(
      (async () => {
        try {
          const validatedData = userDataSchema.parse(formData);

          if (user) {
            await createUser(validatedData, user);
            setTimeout(() => {
              router.push("/");
            }, 200);
          }
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
            throw err;
          }
        }
      })(),
      {
        loading: "Creating user...",
        success: "User created successfully!",
        error: (err) => {
          if (err instanceof z.ZodError) {
            return "Validation errors occurred.";
          } else {
            return "An error occurred while creating the user.";
          }
        },
      },
    );
  };

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center gap-3">
        Loading....
      </div>
    );
  }

  return (
    <div className="bg-dotted pt-15 flex min-h-[100vh] flex-col items-center justify-center gap-10 overflow-hidden">
      <div className="bg-blue-metall bg-clip-text text-center font-rp1 text-2xl font-normal tracking-widest text-transparent lg:text-5xl">
        USER LOGIN
      </div>
      <form onSubmit={handleSubmit} className="gap-15 flex flex-col">
        <div className="flex min-w-[90vw] flex-col items-center justify-center gap-7 lg:min-w-[60vw]">
          <div className="inline-flex w-full items-center justify-between lg:gap-7">
            <label
              htmlFor="firstName"
              className="w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl"
            >
              FIRST NAME:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]"
            />
          </div>
          <div className="inline-flex w-full items-center justify-between lg:gap-7">
            <label
              htmlFor="middleName"
              className="w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl"
            >
              MIDDLE NAME:
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]"
            />
          </div>
          <div className="inline-flex w-full items-center justify-between lg:gap-7">
            <label
              htmlFor="lastName"
              className="w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl"
            >
              LAST NAME:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]"
            />
          </div>
          <div className="inline-flex w-full justify-between lg:gap-7">
            <label
              htmlFor="phoneNumber"
              className="font-outfittext-sm w-3/10 text-wrap font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl"
            >
              PHONE NUMBER:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]"
            />
          </div>
          <div className="inline-flex w-full justify-between lg:gap-7">
            <label
              htmlFor="username"
              className="w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl"
            >
              USERNAME:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]"
            />
          </div>
          <div className="inline-flex w-full justify-between lg:gap-7">
            <label
              htmlFor="collegeName"
              className="w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl"
            >
              COLLEGE NAME:
            </label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              required
              className="h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]"
            />
          </div>
          <div className="inline-flex w-full justify-between lg:gap-7">
            <label
              htmlFor="registrationId"
              className="w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl"
            >
              REGISTRATION ID:
            </label>
            <input
              type="text"
              id="registrationId"
              name="registrationId"
              value={formData.registrationId}
              onChange={handleChange}
              required
              className="h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]"
            />
          </div>
        </div>
        <div className="lg:translate-x-25 mt-10 flex w-full items-center justify-around">
          <button
            type="submit"
            className="h-15 flex w-60 origin-top-left flex-row items-center justify-center gap-5 rounded-full border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent p-2 backdrop-blur-[9.878px] transition-all duration-300 hover:border-none hover:bg-gradient-to-r hover:from-[#01A3F5] hover:via-[#0AEFF6] hover:to-[#2F629C] lg:w-80"
          >
            <div className="h- full flex w-full items-center justify-center gap-5">
              <Image
                src="/Images/tabler_planet.svg"
                alt="logo"
                width={25}
                height={25}
              />
              <div className="font-outfit text-lg text-white lg:text-xl">
                SIGN UP
              </div>
            </div>
          </button>
        </div>
        <div className="m-auto w-[100%] mobile3:w-[50%]">
        </div>
      </form>
    </div>
  );
};

export default CompleteProfile;
