import Image from "next/image";
import { GraduationCap, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { auth } from "~/app/utils/firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { env } from "~/env";
import { toast } from "sonner";

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

const Profile = () => {
  const router = useRouter();
  const [_user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [user, setUser] = useState<UserResponse>();
  let ImgUrl = "";
  if (user?.imageUrl) {
    ImgUrl = user?.imageUrl;
  }
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
      return data.msg;
    } catch (e) {
      console.error(e);
      return;
    }
  };
  useEffect(() => {
    void (async () => {
      const token = await _user?.getIdToken();
      if (!token) return;
      const res = await fetchUser(token);
      if (res) {
        setUser(res);
      }
    })();
  }, [_user]);

  if (!user){
    toast.error("User not SignedIn")
    router.push('/home')
  }
  
  return (
    <div className="shadow-smborder-gray-700 w-[80vw] rounded-lg border-2 border-white/20 bg-transparent bg-opacity-30 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-cyan-400/20 lg:w-[50vw]">
      <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="mb-4 flex flex-col items-center sm:mb-6 sm:flex-row sm:items-start md:mb-8 lg:mb-10">
          <div className="relative mb-4 flex-shrink-0 sm:mb-0 sm:mr-6 md:mr-8 lg:mr-10">
            <div className="rounded-full bg-[#0A0ACA] opacity-30 blur-[150px]"></div>
            <div className="sm:-top-15 sm:-left-15 lg:-top-18 lg:-left-18 absolute -left-12 -top-12 h-48 w-48 rounded-full bg-[#0A0ACA] opacity-70 blur-[60px] sm:h-60 sm:w-60 lg:h-72 lg:w-72"></div>

            <Image
              src={ImgUrl}
              alt="Profile"
              width={200}
              height={250}
              className="border-3 h-30 w-30 relative rounded-lg border-cyan-400 object-cover shadow-lg sm:h-72 sm:w-72 md:h-[10rem] md:w-[10rem] lg:h-[12rem] lg:w-[12rem]"
            />
          </div>
          <div className="w-full text-center sm:w-[calc(100%-16rem)] sm:text-left md:w-[calc(100%-20rem)] lg:w-[calc(100%-22rem)]">
            <h2 className="sm:text:3xl mb-2 break-words font-rp1 text-3xl font-normal leading-tight text-white sm:mb-3 sm:leading-tight md:leading-tight lg:text-4xl lg:leading-[1.2] 2xl:text-6xl 3xl:text-9xl">
              {user?.firstName} {user?.middleName} {user?.lastName}
            </h2>
            <p className="mb-4 break-words text-2xl text-cyan-400 sm:mb-6 lg:text-3xl 2xl:text-5xl 3xl:text-8xl">
              {user?.username}
            </p>
          </div>
        </div>
        <div
          className={`mb-4 space-y-3 font-outfit sm:mb-6 sm:space-y-4 md:mb-8 md:space-y-5 lg:mb-10 lg:space-y-6`}
        >
          <p className="flex items-center text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
            <GraduationCap className="mr-3 h-6 w-6 text-cyan-400 sm:mr-4 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            <span className="text- break-words text-lg lg:text-xl 2xl:text-3xl 3xl:text-6xl">
              {user?.collegeName}
            </span>
          </p>
          <p className="flex items-center text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
            <Phone className="mr-3 h-6 w-6 flex-shrink-0 text-cyan-400 sm:mr-4 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            <span className="text- break-words text-lg lg:text-xl 2xl:text-3xl 3xl:text-6xl">
              {user?.phoneNumber}
            </span>
          </p>
        </div>
        <div
          className={`mt-auto flex flex-col space-y-3 font-outfit sm:flex-row sm:space-x-4 sm:space-y-0 md:space-x-6`}
        >
          <button
            onClick={() => router.push("/home")}
            className="flex-1 rounded-full border-2 border-cyan-400 bg-transparent p-2 text-base text-cyan-400 transition-all duration-300 hover:bg-cyan-600/20 lg:text-lg 2xl:text-2xl 3xl:text-5xl"
          >
            GO TO HOME
          </button>
          <button
            onClick={async () => {
              await signOut();
              router.push("/home");
            }}
            className="flex-1 rounded-full border-2 border-gray-300 bg-transparent p-2 text-base text-gray-300 transition-all duration-300 hover:bg-gray-700/40 lg:text-lg 2xl:text-2xl 3xl:text-5xl"
          >
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
