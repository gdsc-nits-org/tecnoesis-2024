"use client";
import {
  forwardRef,
  useState,
  useEffect,
  HTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import { 
  Camera, 
  MapPin, 
  Phone, 
  ExternalLink, 
  ArrowLeft 
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { cn } from "~/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

export const runtime = "edge";

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

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const ProfileCard = ({ profile }: { profile: ProfileData }) => (
  <Card className="border-gray-700 bg-gray-800/30 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-cyan-400/20">
    <CardContent className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="mb-4 flex flex-col items-center sm:mb-6 sm:flex-row sm:items-start md:mb-8 lg:mb-10">
        <div className="relative mb-4 flex-shrink-0 sm:mb-0 sm:mr-6 md:mr-8 lg:mr-10">
          <div className="sm:-top-30 sm:-left-30 absolute -left-24 -top-24 h-[22rem] w-[22rem] rounded-full bg-[#0A0ACA] opacity-30 blur-[150px] sm:h-[27rem] sm:w-[27rem] lg:-left-36 lg:-top-36 lg:h-[33rem] lg:w-[33rem]"></div>
          <div className="-top-18 -left-18 lg:-top-30 lg:-left-30 absolute h-[19rem] w-[19rem] rounded-full bg-[#0A0ACA] opacity-50 blur-[105px] sm:-left-24 sm:-top-24 sm:h-[24rem] sm:w-[24rem] lg:h-[30rem] lg:w-[30rem]"></div>
          <div className="sm:-top-15 sm:-left-15 lg:-top-18 lg:-left-18 absolute -left-12 -top-12 h-48 w-48 rounded-full bg-[#0A0ACA] opacity-70 blur-[60px] sm:h-60 sm:w-60 lg:h-72 lg:w-72"></div>

          <Image
            src={profile.imageUrl}
            alt="Profile"
            width={300}
            height={360}
            className="border-3 relative h-60 w-60 rounded-lg border-cyan-400 object-cover shadow-lg sm:h-72 sm:w-72 md:h-[20rem] md:w-[20rem] lg:h-[22rem] lg:w-[22rem]"
          />
          <Button
            size="icon"
            className="absolute bottom-3 right-3 rounded-full bg-purple-600 p-2 shadow-lg hover:bg-purple-700 sm:p-3"
          >
            <Camera className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          </Button>
        </div>
        <div className="w-full text-center sm:w-[calc(100%-16rem)] sm:text-left md:w-[calc(100%-20rem)] lg:w-[calc(100%-22rem)]">
          <h2 className="mb-2 break-words font-rp1 text-3xl font-normal leading-tight text-white sm:mb-3 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-[3.75rem] lg:leading-[1.2]">
            {profile.name}
          </h2>
          <p className="mb-4 break-words text-xl text-cyan-400 sm:mb-6 sm:text-2xl md:text-3xl lg:text-4xl">
            {profile.alias}
          </p>
        </div>
      </div>
      <div
        className={`mb-4 space-y-3 font-outfit sm:mb-6 sm:space-y-4 md:mb-8 md:space-y-5 lg:mb-10 lg:space-y-6`}
      >
        <p className="flex items-center text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
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
            className="mr-3 h-6 w-6 text-cyan-400 sm:mr-4 sm:h-7 sm:w-7 md:h-8 md:w-8"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
          <span className="break-words">{profile.institute}</span>
        </p>
        <p className="flex items-center text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
          <Phone className="mr-3 h-6 w-6 flex-shrink-0 text-cyan-400 sm:mr-4 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          <span className="break-words">{profile.phone}</span>
        </p>
        <p className="flex items-center text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
          <MapPin className="mr-3 h-6 w-6 flex-shrink-0 text-cyan-400 sm:mr-4 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          <span className="break-words">{profile.address}</span>
        </p>
      </div>
      <div
        className={`mt-auto flex flex-col space-y-3 font-outfit sm:flex-row sm:space-x-4 sm:space-y-0 md:space-x-6`}
      >
        <Button className="flex-1 rounded-full border-2 border-cyan-400 bg-transparent py-2 text-base text-cyan-400 transition-all duration-300 hover:bg-cyan-600/20 sm:py-3 sm:text-lg md:py-4 md:text-xl lg:py-5 lg:text-2xl">
          GO TO HOME
          <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </Button>
        <Button
          variant="outline"
          className="flex-1 rounded-full border-2 border-gray-300 bg-transparent py-2 text-base text-gray-300 transition-all duration-300 hover:bg-gray-700/40 sm:py-3 sm:text-lg md:py-4 md:text-xl lg:py-5 lg:text-2xl"
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
        className="text-center font-outfit text-lg font-bold leading-tight tracking-[0.19em] sm:text-xl md:text-2xl"
        style={{
          background:
            "linear-gradient(137.95deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFFFFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        PENDING REQUESTS ({requests.length})
      </CardTitle>
    </CardHeader>
    <CardContent
      className={`space-y-2 pt-1 font-outfit sm:space-y-3 sm:pt-2 md:space-y-4 md:pt-4 lg:space-y-6`}
    >
      {requests.map((request) => (
        <div
          key={request.id}
          className="relative flex min-h-[135px] w-full flex-col items-start justify-between rounded-[10px] border border-dashed border-[rgba(197,221,240,0.28)] p-3 sm:min-h-[150px] sm:flex-row sm:items-center sm:p-4 md:min-h-[165px] md:p-6 lg:min-h-[180px]"
        >
          <div className="mb-3 sm:mb-0">
            <h3
              className="mb-1 text-base font-bold sm:mb-2 sm:text-lg md:text-xl lg:text-2xl"
              style={{
                background:
                  "linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {request.eventName}
            </h3>
            <p className="text-xs font-bold text-[#7EA9CB] sm:text-sm md:text-base lg:text-lg">
              Team Name: {request.teamName}
            </p>
          </div>
          <Button className="w-full rounded-[47px] border border-[rgba(188,233,255,0.67)] bg-[rgba(56,70,77,0.23)] px-3 py-1 font-outfit text-xs font-semibold uppercase leading-5 tracking-[0.06em] text-white sm:w-auto sm:py-2 sm:text-sm md:py-3 md:text-base lg:text-lg">
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
        className="text-center font-outfit text-lg font-bold leading-tight tracking-[0.19em] sm:text-xl md:text-2xl"
        style={{
          background:
            "linear-gradient(137.95deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFFFFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        COMPLETED
      </CardTitle>
    </CardHeader>
    <CardContent
      className={`space-y-2 pt-1 font-outfit sm:space-y-3 sm:pt-2 md:space-y-4 md:pt-4 lg:space-y-6`}
    >
      {completed.map((event) => (
        <div
          key={event.id}
          className="relative flex min-h-[135px] w-full flex-col items-start justify-between rounded-[10px] border border-dashed border-[rgba(197,221,240,0.28)] p-3 sm:min-h-[150px] sm:flex-row sm:items-center sm:p-4 md:min-h-[165px] md:p-6 lg:min-h-[180px]"
        >
          <div className="z-10 order-2 mb-3 flex-grow pr-3 sm:order-1 sm:mb-0">
            <h3
              className="mb-1 text-base font-bold sm:mb-2 sm:text-lg md:text-xl lg:text-2xl"
              style={{
                background:
                  "linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {event.eventName}
            </h3>
            <p className="mb-1 text-xs font-bold text-[#7EA9CB] sm:text-sm md:text-base lg:text-lg">
              Team Name: {event.teamName}
            </p>
            <p className="text-xs text-gray-400 sm:text-sm md:text-base">
              Team Id: {event.teamId}
            </p>
          </div>
          <div className="md:w-30 relative order-1 mb-3 h-24 w-full sm:order-2 sm:mb-0 sm:h-full sm:w-24 lg:w-36">
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

export default function DashBoard() {
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
        toast.error("Error fetching dashboard data", error);
      });
  }, []);

  if (!dashboardData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-lg text-white sm:text-xl md:text-2xl lg:text-3xl">
        LOADING
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-black p-1 font-outfit text-white sm:p-2 md:p-4 lg:p-6`}
    >
      <main className="container mx-auto max-w-full xl:max-w-[1350px] 2xl:max-w-[1500px]">
        <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6">
          <Button
            variant="ghost"
            className="flex items-center rounded-full bg-blue-900/70 px-1 py-1 text-xs text-white hover:bg-blue-800/80 sm:px-2 sm:py-1.5 sm:text-sm md:px-3 md:py-2 md:text-base lg:px-4 lg:text-lg"
          >
            <ArrowLeft className="mr-1 h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
            Back
          </Button>
        </div>
        <h1
          className="mb-3 px-1 text-center font-rp1 text-2xl font-normal leading-tight sm:mb-4 sm:px-2 sm:text-3xl sm:leading-tight md:mb-6 md:text-4xl md:leading-tight lg:mb-9 lg:text-5xl lg:leading-[62px] xl:text-[54px]"
          style={{
            background:
              "linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), #59CAFA",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundBlendMode: "overlay, color, normal",
          }}
        >
          DASHBOARD
        </h1>
        <div className="grid gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:grid-cols-[60%_40%] xl:gap-9 2xl:gap-12">
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
  );
}
