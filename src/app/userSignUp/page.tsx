"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { env } from "~/env";
import Image from "next/image";
import { User } from "firebase/auth";
import { z } from "zod";

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
    const response = await axios.post(`${env.NEXT_PUBLIC_API_URL}/api/auth/signup`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
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
        try {
            const validatedData = userDataSchema.parse(formData);

            if (user) {
                await createUser(validatedData, user);
                alert("User Created Successfully");
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
                    {} as Record<string, string>
                );
                setFormErrors(zodErrors);
            } else if (err instanceof AxiosError) {
                setError(err.response?.data.msg ?? "An error occurred");
                alert(error ?? "An error occurred");
            }
        }
    };

    if (loading) {
        return (
            <div className="flex w-screen h-screen justify-center items-center gap-3">
                Loading....
            </div>
        );
    }

    return (
        <div className="bg-[url('https://res.cloudinary.com/dgnlmdkyq/image/upload/v1727602194/Tecno/background_pmqoi8.png')] bg-cover lg:bg-contain bg-repeat flex flex-col gap-10 min-h-[100vh] items-center justify-center pt-15 overflow-hidden">
            <div className="bg-blue-metall bg-clip-text text-transparent text-center text-2xl lg:text-5xl font-normal font-rp1 tracking-widest">
                USER LOGIN
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-15">
                <div className="flex flex-col items-center justify-center gap-7  min-w-[90vw] lg:min-w-[60vw]">
                    <div className="inline-flex justify-between items-center lg:gap-7 w-full">
                        <label htmlFor="firstName" className="text-white font-outfit  text-sm lg:text-2xl font-normal text-wrap lg:text-nowrap">FIRST NAME:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="bg-transparent origin-top-left  rounded-[10.036px] border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] w-2/3 h-10 text-white text-center"
                        />
                    </div>
                    <div className="inline-flex justify-between items-center lg:gap-7 w-full">
                        <label htmlFor="middleName" className="text-white font-outfit text-sm lg:text-2xl font-normal text-wrap lg:text-nowrap">MIDDLE NAME:</label>
                        <input
                            type="text"
                            id="middleName"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                            className="bg-transparent origin-top-left  rounded-[10.036px] border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] w-2/3 h-10  text-white text-center"
                        />
                    </div>
                    <div className="inline-flex justify-between items-center lg:gap-7 w-full">
                        <label htmlFor="lastName" className="text-white font-outfit text-sm lg:text-2xl font-normal text-wrap lg:text-nowrap">LAST NAME:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="bg-transparent origin-top-left  rounded-[10.036px] border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] w-2/3 h-10  text-white text-center"
                        />
                    </div>
                    <div className="inline-flex justify-between lg:gap-7 w-full">
                        <label htmlFor="phoneNumber" className="text-white font-outfittext-sm lg:text-2xl font-normal  text-wrap lg:text-nowrap">PHONE    NUMBER:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className="bg-transparent origin-top-left  rounded-[10.036px] border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] w-2/3 h-10  text-white text-center"
                        />
                    </div>
                    <div className="inline-flex justify-between lg:gap-7 w-full">
                        <label htmlFor="username" className="text-white font-outfit text-sm lg:text-2xl font-normal text-wrap lg:text-nowrap">USERNAME:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="bg-transparent origin-top-left  rounded-[10.036px]  border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] w-2/3 h-10  text-white text-center"
                        />
                    </div>
                    <div className="inline-flex justify-between lg:gap-7 w-full">
                        <label htmlFor="collegeName" className="text-white font-outfit text-sm lg:text-2xl font-normal text-wrap lg:text-nowrap">COLLEGE NAME:</label>
                        <input
                            type="text"
                            id="collegeName"
                            name="collegeName"
                            value={formData.collegeName}
                            onChange={handleChange}
                            required
                            className="bg-transparent origin-top-left  rounded-[10.036px] border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] w-2/3 h-10  text-white text-center"
                        />
                    </div>
                    <div className="inline-flex justify-between lg:gap-7 w-full">
                        <label htmlFor="registrationId" className="text-white font-outfit text-sm lg:text-2xl font-normal text-wrap lg:text-nowrap">REGISTRATION  ID:</label>
                        <input
                            type="text"
                            id="registrationId"
                            name="registrationId"
                            value={formData.registrationId}
                            onChange={handleChange}
                            required
                            className=" bg-transparent origin-top-left  rounded-[10.036px] border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] w-2/3 h-10"
                        />
                    </div>
                </div>
                <div className="w-full flex items-center justify-around mt-10 md:translate-x-28">
                    <button
                        type="submit"
                        className="flex flex-row items-center justify-center gap-5 w-60 lg:w-80 h-15 p-2 bg-transparent origin-top-left rounded-full border-t-gray-400 border-b-gray-700 border-[0.627px] backdrop-blur-[9.878px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#01A3F5] hover:via-[#0AEFF6] hover:to-[#2F629C] hover:border-none"
                    >
                        <div className="flex items-center justify-center gap-5 w-full h- full ">
                            <Image
                                src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1727622715/Tecno/tabler_planet_wffzgp.svg"
                                alt="logo"
                                width={25}
                                height={25}
                            />
                            <div className="font-outfit text-lg lg:text-xl text-white">
                                SIGN UP
                            </div>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CompleteProfile;
