"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { env } from "~/env";
import { User } from "firebase/auth";
import CustomButton from "~/components/CustomButton";

export const runtime = "edge";
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
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (user) {
            try {
                await createUser(formData, user);
                alert("User Created Successfully");
                setTimeout(() => {
                    router.push("/");
                }, 200);
            } catch (e) {
                const err = e as AxiosError<{ msg: string }>;
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
        <div className="py-2 flex flex-col gap-10 min-h-screen items-center justify-center bg-gray-900">
            <div className="flex flex-row justify-center items-center w-full text-4xl font-mono font-bold uppercase py-8 my-10 text-center">
                Complete Your Profile
            </div>
            <form onSubmit={handleSubmit} className="space-y-8 bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md bg-gray-700 text-white"
                        placeholder="First Name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="middleName" className="block text-sm font-medium text-white">Middle Name</label>
                    <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md bg-gray-700 text-white"
                        placeholder="Middle Name"
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md bg-gray-700 text-white"
                        placeholder="Last Name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md bg-gray-700 text-white"
                        placeholder="Phone Number"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md bg-gray-700 text-white"
                        placeholder="Username"
                        required
                    />
                    <p className="mt-1 text-sm text-gray-400">This is your public display name.</p>
                </div>

                <div>
                    <label htmlFor="collegeName" className="block text-sm font-medium text-white">College Name</label>
                    <input
                        type="text"
                        id="collegeName"
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md bg-gray-700 text-white"
                        placeholder="College Name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="registrationId" className="block text-sm font-medium text-white">Registration ID</label>
                    <input
                        type="text"
                        id="registrationId"
                        name="registrationId"
                        value={formData.registrationId}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md bg-gray-700 text-white"
                        placeholder="Registration ID"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Submit
                </button>
                <CustomButton text="TEST"/>
            </form>
        </div>
    );
};

export default CompleteProfile;
