import Image from "next/image";
import Link from "next/link";

interface propsType {
  eventname: string;
  modulename: string;
  eventID: string;
  eventPoster: string;
}

const EventCard = ({ eventname, modulename, eventID, eventPoster }: propsType) => {
  return (
    <div className="relative h-[26rem] w-fit xl:w-[21.5vw] flex flex-col justify-end text-white newEventCard overflow-hidden">
      <div className="h-[100%] w-[100%] flex flex-col justify-center items-center z-10 postercont">
        <div className="h-[100%] w-[100%] flex flex-col items-center justify-center">
          <div className="h-[90] w-[100%] border-white/20 border-2 rounded-2xl overflow-hidden">
            <Image src = {eventPoster} className="w-[100%]" alt="Events" height={100} width={150} />
          </div>
          <div className="w-[84%] mt-3 flex flex-col justify-start items-start">
            <div className="text-lg font-rp1">{eventname}</div>
            <h1 className=" text-sm font-rp1">{modulename}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center gap-5 m-1 p-1 z-20 contentCont">
        <Link href={`/event/${eventID}`}>
          <div className="w-[100%] flex items-center justify-center">
            <button className="h-[1.8rem] w-[8rem] rounded-full bg-transparent border-[#01A3F5] border-[1.4px] flex flex-row items-center justify-center text-md font-outfit p-3 text-[#01A3F5] font-bold  hover:bg-gray-700">View details</button>
          </div>
        </Link>
        <Link href={`/teamRegistration/${eventID}`}>
          <div className="w-[100%] flex items-center justify-center">
            <button className="h-[1.8rem] w-[8rem] rounded-full bg-[#01A3F5] border-[#01A3F5] border-[1.4px] flex flex-row items-center justify-center text-md font-outfit p-3 text-black font-bold hover:text-white">Register</button>
          </div>
        </Link>
      </div>
      <div className="gradCont">
      </div>
    </div>
  )
}
export default EventCard;