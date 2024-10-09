"use client";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Camera,
  MapPin,
  Phone,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Outfit } from "next/font/google";

export const runtime = "edge";

const outfit = Outfit({ subsets: ["latin"] });

type ProfileData = {
  name: string;
  alias: string;
  institute: string;
  phone: string;
  address: string;
  imageUrl: string;
};

type RequestData = {
  id: string;
  eventName: string;
  teamName: string;
};

type CompletedData = {
  id: string;
  eventName: string;
  teamName: string;
  teamId: string;
  imageUrl: string;
};

type DashboardData = {
  profile: ProfileData;
  pendingRequests: RequestData[];
  completed: CompletedData[];
};

const fetchDashboardData = (): Promise<DashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        profile: {
          name: "LOREM IPSUM",
          alias: "ALIAS",
          institute: "National Institute of Technology, Silchar",
          phone: "+91 9876543210",
          address: "123 Tech Street, Silchar",
          imageUrl: "/placeholder.png",
        },
        pendingRequests: [
          { id: "1", eventName: "NITS HACKS 8.0", teamName: "Code Wizards" },
          { id: "2", eventName: "ALGO RUSH 2024", teamName: "Binary Bosses" },
        ],
        completed: [
          {
            id: "1",
            eventName: "NITS HACKS 7.0",
            teamName: "Syntax Savants",
            teamId: "8918232",
            imageUrl: "/placeholder.png",
          },
          {
            id: "2",
            eventName: "HACKATHON 2023",
            teamName: "Data Dynamos",
            teamId: "7856421",
            imageUrl: "/placeholder.png",
          },
        ],
      });
    }, 0);
  });
};

const ProfileCard = ({ profile }: { profile: ProfileData }) => (
  <Card className="border-gray-700 bg-gray-800/30 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-cyan-400/20">
    <CardContent className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex flex-col sm:flex-row items-center sm:items-start">
        <div className="relative mb-4 sm:mb-0 sm:mr-6 md:mr-8 lg:mr-10 flex-shrink-0">
          <div className="absolute -top-24 -left-24 w-[22rem] h-[22rem] rounded-full bg-[#0A0ACA] opacity-30 blur-[150px] 
                          sm:-top-30 sm:-left-30 sm:w-[27rem] sm:h-[27rem] 
                          lg:-top-36 lg:-left-36 lg:w-[33rem] lg:h-[33rem]"></div>
          <div className="absolute -top-18 -left-18 w-[19rem] h-[19rem] rounded-full bg-[#0A0ACA] opacity-50 blur-[105px]
                          sm:-top-24 sm:-left-24 sm:w-[24rem] sm:h-[24rem]
                          lg:-top-30 lg:-left-30 lg:w-[30rem] lg:h-[30rem]"></div>
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#0A0ACA] opacity-70 blur-[60px]
                          sm:-top-15 sm:-left-15 sm:w-60 sm:h-60
                          lg:-top-18 lg:-left-18 lg:w-72 lg:h-72"></div>
          
          <Image
            src={profile.imageUrl}
            alt="Profile"
            width={300}
            height={360}
            className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-[20rem] md:h-[20rem] lg:w-[22rem] lg:h-[22rem] rounded-lg border-3 border-cyan-400 object-cover shadow-lg"
          />
          <Button
            size="icon"
            className="absolute bottom-3 right-3 rounded-full bg-purple-600 p-2 sm:p-3 shadow-lg hover:bg-purple-700"
          >
            <Camera className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          </Button>
        </div>
        <div className="text-center sm:text-left w-full sm:w-[calc(100%-16rem)] md:w-[calc(100%-20rem)] lg:w-[calc(100%-22rem)]">
          <h2 className="font-rp1 text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-[1.2] text-white mb-2 sm:mb-3 break-words">
            {profile.name}
          </h2>
          <p className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-400 sm:mb-6 break-words">
            {profile.alias}
          </p>
        </div>
      </div>
      <div className={`mb-4 sm:mb-6 md:mb-8 lg:mb-10 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 ${outfit.className}`}>
        <p className="flex items-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-3 sm:mr-4 text-cyan-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
          <span className="break-words">{profile.institute}</span>
        </p>
        <p className="flex items-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300">
          <Phone className="mr-3 sm:mr-4 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-cyan-400 flex-shrink-0" />
          <span className="break-words">{profile.phone}</span>
        </p>
        <p className="flex items-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300">
          <MapPin className="mr-3 sm:mr-4 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-cyan-400 flex-shrink-0" />
          <span className="break-words">{profile.address}</span>
        </p>
      </div>
      <div className={`mt-auto flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 md:space-x-6 ${outfit.className}`}>
        <Button className="flex-1 rounded-full border-2 border-cyan-400 bg-transparent py-2 sm:py-3 md:py-4 lg:py-5 text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-400 transition-all duration-300 hover:bg-cyan-600/20">
          GO TO HOME
          <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </Button>
        <Button
          variant="outline"
          className="flex-1 rounded-full border-2 border-gray-300 bg-transparent py-2 sm:py-3 md:py-4 lg:py-5 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 transition-all duration-300 hover:bg-gray-700/40"
        >
          LOG OUT
        </Button>
      </div>
    </CardContent>
  </Card>
);

const PendingRequestsCard = ({ requests }: { requests: RequestData[] }) => (
  <Card className="border-gray-700 bg-gray-800/30 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-yellow-400/20">
    <CardHeader className="pb-1 sm:pb-2 md:pb-3">
      <CardTitle 
        className="font-outfit text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-[0.19em] text-center"
        style={{
          background: 'linear-gradient(137.95deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFFFFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        PENDING REQUESTS ({requests.length})
      </CardTitle>
    </CardHeader>
    <CardContent className={`space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 pt-1 sm:pt-2 md:pt-4 ${outfit.className}`}>
      {requests.map((request) => (
        <div
          key={request.id}
          className="relative w-full min-h-[135px] sm:min-h-[150px] md:min-h-[165px] lg:min-h-[180px] border border-dashed border-[rgba(197,221,240,0.28)] rounded-[10px] p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between"
        >
          <div className="mb-3 sm:mb-0">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2" style={{
              background: 'linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {request.eventName}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#7EA9CB]">
              Team Name: {request.teamName}
            </p>
          </div>
          <Button className="w-full sm:w-auto px-3 py-1 sm:py-2 md:py-3 bg-[rgba(56,70,77,0.23)] border border-[rgba(188,233,255,0.67)] rounded-[47px] text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-outfit leading-5 tracking-[0.06em] uppercase">
            Accept
          </Button>
        </div>
      ))}
    </CardContent>
  </Card>
);

const CompletedCard = ({ completed }: { completed: CompletedData[] }) => (
  <Card className="border-gray-700 bg-gray-800/30 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-green-400/20">
    <CardHeader className="pb-1 sm:pb-2 md:pb-3">
      <CardTitle 
        className="font-outfit text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-[0.19em] text-center"
        style={{
          background: 'linear-gradient(137.95deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFFFFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        COMPLETED
      </CardTitle>
    </CardHeader>
    <CardContent className={`space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 pt-1 sm:pt-2 md:pt-4 ${outfit.className}`}>
      {completed.map((event) => (
        <div
          key={event.id}
          className="relative w-full min-h-[135px] sm:min-h-[150px] md:min-h-[165px] lg:min-h-[180px] border border-dashed border-[rgba(197,221,240,0.28)] rounded-[10px] p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between"
        >
          <div className="z-10 flex-grow pr-3 mb-3 sm:mb-0 order-2 sm:order-1">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2" style={{
              background: 'linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {event.eventName}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#7EA9CB] mb-1">
              Team Name: {event.teamName}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-400">
              Team Id: {event.teamId}
            </p>
          </div>
          <div className="relative w-full h-24 sm:w-24 md:w-30 lg:w-36 sm:h-full mb-3 sm:mb-0 order-1 sm:order-2">
            <Image
              src={event.imageUrl}
              alt="Event"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default function Component() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null,
  );

  useEffect(() => {
    fetchDashboardData()
      .then((data) => {
        setDashboardData(data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);

  if (!dashboardData) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">LOADING</div>
  }

  return (
    <div className={`min-h-screen bg-black text-white p-1 sm:p-2 md:p-4 lg:p-6 ${outfit.className}`}>
      <main className="container mx-auto max-w-full xl:max-w-[1350px] 2xl:max-w-[1500px]">
        <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6">
          <Button variant="ghost" className="text-white bg-blue-900/70 hover:bg-blue-800/80 rounded-full px-1 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base lg:text-lg flex items-center">
            <ArrowLeft className="mr-1 h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
            Back
          </Button>
        </div>
        <h1 
          className="font-rp1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-[62px] text-center mb-3 sm:mb-4 md:mb-6 lg:mb-9 px-1 sm:px-2"
          style={{
            background: 'linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), #59CAFA',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundBlendMode: 'overlay, color, normal'
          }}
        >
          DASHBOARD
        </h1>
        <div className="grid gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-9 2xl:gap-12 xl:grid-cols-[60%_40%]">
          <div className="xl:self-start">
            <ProfileCard profile={dashboardData.profile} />
          </div>
          <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
            <PendingRequestsCard requests={dashboardData.pendingRequests} />
            <CompletedCard completed={dashboardData.completed} />
          </div>
        </div>
      </main>
    </div>
  )
}