"use client";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/app/utils/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { LoaderCircle, Rocket } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { env } from "~/env";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [_user, _loading, _error] = useAuthState(auth);
  const router = useRouter();
  const bigScreen = useMediaQuery("(min-width: 768px)");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const checkUserFirstTime = () => {
      if (user) {
        try {
          const metadata = _user?.metadata;
          const isFirstTime =
            metadata?.creationTime === metadata?.lastSignInTime;

          if (isFirstTime) {
            router.push("/userSignUp");
          } else {
            router.push("/");
          }
        } catch (error) {
          toast.error("Error checking user");
        }
      }
    };

    interface UserResponse {
      username: string;
    }

    const getUserName = async () => {
      try {
        if (_user) {
          const token = await _user?.getIdToken();
          const { data } = await axios.get<{ msg: UserResponse }>(
            `${env.NEXT_PUBLIC_API_URL}/api/user/me`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          if (data.msg.username) {
            setUserName(data.msg.username);
          }
        }
      } catch (error) {
        toast.error("Error fetching user data");
      }
    };

    checkUserFirstTime();
    void getUserName();
  }, [user, router, _user]);

  if (error) {
    toast.error(
      "There was some error. Please refresh the page or email contact@tecnoesis.co.in",
    );
  }
  if (loading || _loading) {
    return (
      <div className="flex w-[12vw] animate-spin items-center justify-center gap-3 bg-transparent backdrop-blur-lg">
        <LoaderCircle size={60} />
      </div>
    );
  }

  if (bigScreen) {
    if (!_user) {
      return (
        <section className="group w-[12vw]">
          <button
            onClick={async () => {
              await signInWithGoogle();
            }}
            className="flex items-center justify-between rounded-full bg-[#5252522a] px-[2vw] py-[0.4vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] backdrop-blur-lg duration-1000 group-hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]"
          >
            <p className="mr-2 font-rp1 text-[1.15vw] duration-1000 group-hover:text-[#01A3F5]">
              Sign in
            </p>
            <div className="-mr-1 flex justify-center overflow-hidden rounded-full bg-[#01A3F5] lg:mr-0">
              <Rocket
                size={15}
                className="h-auto w-[2.5vw] p-[0.6rem] group-hover:animate-rocketzoom"
              />
            </div>
          </button>
        </section>
      );
    } else {
      return (
        <section className="group w-[12vw]">
          <button
            onClick={() => {
              router.push("/dashboard");
            }}
            className="flex w-full items-center justify-start rounded-full bg-[#5252522a] py-1 pl-[0.3vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] backdrop-blur-lg duration-1000 group-hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]"
          >
            {_user?.photoURL && (
              <Image
                className="h-auto w-[2.83vw] rounded-full"
                src={_user.photoURL}
                height={100}
                width={100}
                alt="avater"
              ></Image>
            )}
            <p className="w-[8vw] overflow-hidden text-nowrap text-center text-[1.25vw] tracking-wide duration-1000 group-hover:text-[#01A3F5]">
              {(userName ? userName : "use_r_name").toLowerCase()}
            </p>
          </button>
        </section>
      );
    }
  }
  if (!_user) {
    return (
      <section
        className={
          "mx-4 flex items-center justify-center rounded-lg p-4 font-rp1 text-[#01A3F5]"
        }
      >
        <button
          className="flex items-center justify-between gap-3 rounded-full bg-transparent py-3 pl-7 pr-3 shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)] backdrop-blur-lg tv2:py-8"
          onClick={() => signInWithGoogle()}
        >
          <p className="mx-auto text-center text-xl">Sign in</p>
          <div className="overflow-hidden rounded-full bg-[#01A3F5]">
            <Rocket
              size={40}
              className="p-2 text-white group-hover:animate-rocketzoom"
            />
          </div>
        </button>
      </section>
    );
  } else {
    return (
      <ProfileCard
        photoURL={_user?.photoURL}
        displayName={_user?.displayName}
        userName={userName}
      />
    );
  }
};

export default Login;
interface UserCred {
  photoURL: string | null | undefined;
  displayName: string | null | undefined;
  userName: string | null | undefined;
}
const ProfileCard: React.FC<UserCred> = ({
  photoURL,
  displayName,
  userName,
}) => {
  const router = useRouter();
  return (
    <section className="flex w-full justify-center">
      <section
        className={
          "mx-4 flex w-full max-w-[400px] items-center justify-center rounded-lg p-4"
        }
        style={{
          background:
            "linear-gradient(112.83deg, rgba(5, 137, 205, 0.11) 0%, rgba(119, 115, 115, 0) 110.84%)",
          border: "1.25px solid",

          borderImageSource:
            "linear-gradient(118.06deg, rgba(170, 187, 254, 0.2) 1.06%, rgba(0, 0, 0, 0) 30.53%) linear-gradient(133.91deg, rgba(0, 0, 0, 0) 8.47%, rgba(39, 232, 177, 0.2) 105.55%)",
          backdropFilter: "blur(17.00941276550293px)",
        }}
      >
        <div className="relative min-h-[122px] min-w-[122px] items-center overflow-hidden rounded-lg">
          {photoURL && (
            <Image
              src={photoURL}
              layout="fill"
              objectFit="cover"
              alt="avater"
            ></Image>
          )}
        </div>
        <div className="flex h-[80%] flex-grow flex-col justify-around gap-2 pl-4">
          <div className="flex flex-col gap-1 text-[#B8B8B8]">
            <h1 className="text-wrap font-rp1 text-lg leading-5">
              {displayName}
            </h1>
            <h3 className="font-outfit text-base">{userName}</h3>
          </div>
          <button
            onClick={() => {
              router.push("/home");
            }}
            className="w-full max-w-[160px] rounded-3xl border border-[#01a3f5] p-1 text-base text-[#01a3f5]"
          >
            View Profile
          </button>
        </div>
      </section>
    </section>
  );
};
