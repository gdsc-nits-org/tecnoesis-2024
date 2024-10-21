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
    <>
      <div className="relative h-fit w-[14rem] flex flex-col justify-center text-white newEventCard">
        <div className=" relative h-[80%] w-[80%]  m-6 mb-0 flex flex-col justify-center items-center hover:mt-2">
          <div className="h-fit w-fit ">
            <div className="h-fit w-fit border-white/20 border-2 rounded-sm">
              <Image src={eventPoster} alt="Events" height={100} width={150} />
            </div>
            <div className="w-[84%] mt-3 flex flex-col justify-start items-start">
              <h1 className=" text-md font-rp1">{modulename}</h1>
              <div className="text-sm font-rp1">{eventname}</div>
            </div>
          </div>
        </div>
        <Link href={`/event/${eventID}`}>
          <div className="w-[100%] flex items-center justify-center mt-3 mb-3 absolute bottom-[20%] ">
            <button className="h-[1.8rem] w-[8rem] rounded-full bg-transparent border-[#01A3F5] border-[1.4px] flex flex-row items-center justify-center text-md font-outfit p-3 text-[#01A3F5]">View details</button>
          </div>
        </Link>
      </div>
    </>
  )
}
export default EventCard;