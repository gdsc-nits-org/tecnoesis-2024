import Image from "next/image";
import Link from "next/link";

interface propsType {
  eventname: string;
  modulename: string;
  eventID: string;
  eventPoster: string;
  thirdPartyURL?: string;
  closingDate: string;
}

const EventCard = ({
  eventname,
  modulename,
  eventID,
  eventPoster,
  thirdPartyURL,
  closingDate,
}: propsType) => {
  return (
    <div className="newEventCard relative flex h-[26rem] w-[20rem] flex-col justify-end overflow-hidden text-white">
      <div className="postercont z-10 flex h-[100%] w-[100%] flex-col items-center justify-center">
        <div className="flex h-[100%] w-[100%] flex-col items-center justify-center">
          <div className="h-[90] w-[100%] overflow-hidden rounded-2xl border-2 border-white/20">
            <Image
              src={eventPoster}
              className="w-[100%]"
              alt="Events"
              height={100}
              width={150}
            />
          </div>
          <div className="mt-3 flex w-[84%] flex-col items-start justify-start">
            <div className="font-outfit text-xl">{eventname}</div>
            {/* <h1 className="font-rp1 text-sm">{modulename}</h1> */}
            <div className="mt-2 font-outfit text-base">
              Registration Closing on {}
            </div>
            <div className="font-outfit text-base font-bold text-cyan-600">
              {new Date(closingDate).toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="contentCont z-20 m-1 flex flex-row items-center justify-evenly gap-5 p-1">
        <Link href={`/event/${eventID}`}>
          <div className="flex w-[100%] items-center justify-center">
            <button className="text-md flex h-[1.8rem] w-[8rem] flex-row items-center justify-center rounded-full border-[1.4px] border-[#01A3F5] bg-transparent p-3 font-outfit font-bold text-[#01A3F5] hover:bg-gray-700">
              View details
            </button>
          </div>
        </Link>
        <Link href={thirdPartyURL ?? `/teamRegistration/${eventID}`}>
          <div className="flex w-[100%] items-center justify-center">
            <button className="text-md flex h-[1.8rem] w-[8rem] flex-row items-center justify-center rounded-full border-[1.4px] border-[#01A3F5] bg-[#01A3F5] p-3 font-outfit font-bold text-black hover:text-white">
              Register
            </button>
          </div>
        </Link>
      </div>
      <div className="gradCont"></div>
    </div>
  );
};
export default EventCard;
