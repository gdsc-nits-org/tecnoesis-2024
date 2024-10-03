"use client";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/app/utils/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { User } from "firebase/auth";
import { useMediaQuery } from "usehooks-ts";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [_user, _loading, _error] = useAuthState(auth);
  const router = useRouter();
  const bigScreen = useMediaQuery("(min-width: 768px)");

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
          console.error("Error checking user:", error);
        }
      }
    };

    checkUserFirstTime();
  }, [user, router, _user]);

  if (error) {
    return (
      <div>
        There was some error. Please refresh the page or email
        contact@tecnoesis.co.in
      </div>
    );
  }
  if (loading || _loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center gap-3">
        User Loading....
      </div>
    );
  }
  // if (user) {
  //   return (
  //     <ProfileCard
  //       photoURL={_user?.photoURL}
  //       displayName={_user?.displayName}
  //     />
  //   );
  // }
  if (bigScreen) {
    if (!_user) {
      return (
        <section className="group">
          <button className="flex w-[200px] items-center justify-between rounded-full bg-[#5252522a] py-3 pl-7 pr-3 shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] duration-1000 group-hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]">
            <p className="duration-1000 group-hover:text-[#01A3F5]">Button</p>
            <div className="overflow-hidden rounded-full bg-[#01A3F5]">
              <img
                src="/navbarDesktop/rocket.svg"
                className="group-hover:animate-rocketzoom"
                alt="rocket-svg"
              />
            </div>
          </button>
        </section>
      );
    } else {
      return (
        <div>
          {_user?.photoURL && (
            <Image
              src={_user.photoURL}
              height={50}
              width={50}
              alt="avater"
            ></Image>
          )}
        </div>
      );
    }
  }
  if (!_user) {
    return (
      <section
        className={
          "mx-4 flex items-center justify-center rounded-lg p-4 font-rp1 text-[#01A3F5]"
        }
        // style={{
        //   background:
        //     "linear-gradient(112.83deg, rgba(5, 137, 205, 0.11) 0%, rgba(119, 115, 115, 0) 110.84%)",
        // }}
      >
        <button
          className="flex w-[200px] items-center justify-between rounded-full bg-transparent py-3 pl-7 pr-3 shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]"
          onClick={() => signInWithGoogle()}
        >
          <p className="mx-auto text-center text-xl">Sign in</p>
          <div className="overflow-hidden rounded-full bg-[#01A3F5]">
            <img
              src="/assets/NavbarMobile/rocket.svg"
              className="group-hover:animate-rocketzoom"
              alt="rocket-svg"
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
      />
    );
  }
};

export default Login;
interface UserCred {
  photoURL: string | null | undefined;
  displayName: string | null | undefined;
}
const ProfileCard: React.FC<UserCred> = ({ photoURL, displayName }) => {
  const router = useRouter();

  return (
    <section
      className={"mx-4 flex items-center justify-center rounded-lg p-4"}
      style={{
        background:
          "linear-gradient(112.83deg, rgba(5, 137, 205, 0.11) 0%, rgba(119, 115, 115, 0) 110.84%)",
        border: "1.25px solid",

        borderImageSource:
          "linear-gradient(118.06deg, rgba(170, 187, 254, 0.2) 1.06%, rgba(0, 0, 0, 0) 30.53%) linear-gradient(133.91deg, rgba(0, 0, 0, 0) 8.47%, rgba(39, 232, 177, 0.2) 105.55%)",
        backdropFilter: "blur(17.00941276550293px)",
      }}
    >
      <div className="relative min-h-[122px] min-w-[122px] overflow-hidden rounded-lg">
        {photoURL && (
          <Image
            src={photoURL}
            layout="fill"
            objectFit="cover"
            alt="avater"
          ></Image>
        )}
      </div>
      <div className="mb-1 flex h-full flex-grow flex-col justify-between gap-8 pl-4">
        <div className="font-rp1 text-[#B8B8B8]">
          <h1 className="text-nowrap text-xl">{displayName}</h1>
          <h3 className="">ALIAS</h3>
        </div>
        <button
          // onClick={() => router.push("/")}
          className="text-md rounded-3xl border border-[#01a3f5] text-[#01a3f5]"
        >
          View Profile
        </button>
      </div>
    </section>
  );
};
