"use client";

import EventsInfo from "~/components/Dashboard/EventsInfo";
import Profile from "~/components/Dashboard/Profile";

export const runtime = "edge";
const DashBoard=()=>{

  return(
    <div className="relative min-h-screen flex flex-col gap-6 lg:flex-row">
      <div>
        <Profile/>
      </div>
      <div>
        <EventsInfo/>
      </div>
    </div>
  );
}

export default DashBoard;

// 
// const PendingRequestsCard = ({ requests }: { requests: RequestData[] }) => (
//   <Card className="border-gray-700 bg-gray-800/30 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-yellow-400/20">
//     <CardHeader className="pb-1 sm:pb-2 md:pb-3">
//       <CardTitle
//         className="text-center font-outfit text-lg font-bold leading-tight tracking-[0.19em] sm:text-xl md:text-2xl"
//         style={{
//           background:
//             "linear-gradient(137.95deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFFFFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           backgroundClip: "text",
//         }}
//       >
//         PENDING REQUESTS ({requests.length})
//       </CardTitle>
//     </CardHeader>
//     <CardContent
//       className={`space-y-2 pt-1 font-outfit sm:space-y-3 sm:pt-2 md:space-y-4 md:pt-4 lg:space-y-6`}
//     >
//       {requests.map((request) => (
//         <div
//           key={request.id}
//           className="relative flex min-h-[135px] w-full flex-col items-start justify-between rounded-[10px] border border-dashed border-[rgba(197,221,240,0.28)] p-3 sm:min-h-[150px] sm:flex-row sm:items-center sm:p-4 md:min-h-[165px] md:p-6 lg:min-h-[180px]"
//         >
//           <div className="mb-3 sm:mb-0">
//             <h3
//               className="mb-1 text-base font-bold sm:mb-2 sm:text-lg md:text-xl lg:text-2xl"
//               style={{
//                 background:
//                   "linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               {request.eventName}
//             </h3>
//             <p className="text-xs font-bold text-[#7EA9CB] sm:text-sm md:text-base lg:text-lg">
//               Team Name: {request.teamName}
//             </p>
//           </div>
//           <Button className="w-full rounded-[47px] border border-[rgba(188,233,255,0.67)] bg-[rgba(56,70,77,0.23)] px-3 py-1 font-outfit text-xs font-semibold uppercase leading-5 tracking-[0.06em] text-white sm:w-auto sm:py-2 sm:text-sm md:py-3 md:text-base lg:text-lg">
//             Accept
//           </Button>
//         </div>
//       ))}
//     </CardContent>
//   </Card>
// );

// const CompletedCard = ({ completed }: { completed: CompletedData[] }) => (
//   <Card className="border-gray-700 bg-gray-800/30 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-green-400/20">
//     <CardHeader className="pb-1 sm:pb-2 md:pb-3">
//       <CardTitle
//         className="text-center font-outfit text-lg font-bold leading-tight tracking-[0.19em] sm:text-xl md:text-2xl"
//         style={{
//           background:
//             "linear-gradient(137.95deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFFFFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           backgroundClip: "text",
//         }}
//       >
//         COMPLETED
//       </CardTitle>
//     </CardHeader>
//     <CardContent
//       className={`space-y-2 pt-1 font-outfit sm:space-y-3 sm:pt-2 md:space-y-4 md:pt-4 lg:space-y-6`}
//     >
//       {completed.map((event) => (
//         <div
//           key={event.id}
//           className="relative flex min-h-[135px] w-full flex-col items-start justify-between rounded-[10px] border border-dashed border-[rgba(197,221,240,0.28)] p-3 sm:min-h-[150px] sm:flex-row sm:items-center sm:p-4 md:min-h-[165px] md:p-6 lg:min-h-[180px]"
//         >
//           <div className="z-10 order-2 mb-3 flex-grow pr-3 sm:order-1 sm:mb-0">
//             <h3
//               className="mb-1 text-base font-bold sm:mb-2 sm:text-lg md:text-xl lg:text-2xl"
//               style={{
//                 background:
//                   "linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               {event.eventName}
//             </h3>
//             <p className="mb-1 text-xs font-bold text-[#7EA9CB] sm:text-sm md:text-base lg:text-lg">
//               Team Name: {event.teamName}
//             </p>
//             <p className="text-xs text-gray-400 sm:text-sm md:text-base">
//               Team Id: {event.teamId}
//             </p>
//           </div>
//           <div className="md:w-30 relative order-1 mb-3 h-24 w-full sm:order-2 sm:mb-0 sm:h-full sm:w-24 lg:w-36">
//             <Image
//               src={event.imageUrl}
//               alt="Event"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       ))}
//     </CardContent>
//   </Card>
// );

// const EventsRegisteredCard = ({ events }: { events: EventData[] }) => {
//   const [expandedEvents, setExpandedEvents] = useState<string[]>([]);

//   const toggleExpand = (eventId: string) => {
//     setExpandedEvents((prev) =>
//       prev.includes(eventId)
//         ? prev.filter((id) => id !== eventId)
//         : [...prev, eventId],
//     );
//   };

//   return (
//     <Card className="border-gray-700 bg-gray-800/30 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-purple-400/20">
//       <CardHeader className="pb-1 sm:pb-2 md:pb-3">
//         <CardTitle
//           className="text-center font-outfit text-lg font-bold leading-tight tracking-[0.19em] sm:text-xl md:text-2xl"
//           style={{
//             background:
//               "linear-gradient(137.95deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFFFFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//           }}
//         >
//           EVENTS REGISTERED
//         </CardTitle>
//       </CardHeader>
//       <CardContent
//         className={`space-y-2 pt-1 font-outfit sm:space-y-3 sm:pt-2 md:space-y-4 md:pt-4 lg:space-y-6`}
//       >
//         {events.map((event) => (
//           <div
//             key={event.id}
//             className={`relative flex flex-col rounded-[10px] border border-dashed border-[rgba(197,221,240,0.28)] p-2 transition-all duration-300 ease-in-out sm:p-3 md:p-4 ${
//               expandedEvents.includes(event.id)
//                 ? "min-h-[300px]"
//                 : "min-h-[120px] sm:min-h-[135px] md:min-h-[150px] lg:min-h-[165px]"
//             }`}
//           >
//             <div className="mb-2 flex w-full items-start justify-between sm:mb-3 sm:items-center">
//               <div className="mr-2">
//                 <h3
//                   className="mb-1 text-sm font-bold sm:text-base md:text-lg lg:text-xl"
//                   style={{
//                     background:
//                       "linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}
//                 >
//                   {event.eventName}
//                 </h3>
//                 <p className="text-xs font-bold text-[#7EA9CB] sm:text-sm md:text-base">
//                   Team Name: {event.teamName}
//                 </p>
//               </div>
//               <Button
//                 onClick={() => toggleExpand(event.id)}
//                 className="flex-shrink-0 rounded-full border border-[rgba(188,233,255,0.67)] bg-[rgba(56,70,77,0.23)] p-1 font-outfit text-xs font-semibold uppercase leading-5 tracking-[0.06em] text-white transition-all duration-300 hover:bg-[rgba(56,70,77,0.4)] sm:px-3 sm:py-1.5 md:px-4 md:py-2"
//               >
//                 <span className="hidden sm:inline">View Status</span>
//                 {expandedEvents.includes(event.id) ? (
//                   <ChevronUp className="h-4 w-4 sm:ml-2 sm:h-4 sm:w-4" />
//                 ) : (
//                   <ChevronDown className="h-4 w-4 sm:ml-2 sm:h-4 sm:w-4" />
//                 )}
//               </Button>
//             </div>
//             {expandedEvents.includes(event.id) && (
//               <div className="mt-2 w-full overflow-x-auto sm:mt-3 md:mt-4">
//                 <table className="w-full table-auto text-xs sm:text-sm">
//                   <thead>
//                     <tr className="border-b border-gray-700">
//                       <th className="px-2 py-1 text-left font-semibold text-gray-300 sm:px-3 sm:py-2">
//                         Name
//                       </th>
//                       <th className="px-2 py-1 text-left font-semibold text-gray-300 sm:px-3 sm:py-2">
//                         Username
//                       </th>
//                       <th className="px-2 py-1 text-left font-semibold text-gray-300 sm:px-3 sm:py-2">
//                         Team Name
//                       </th>
//                       <th className="px-2 py-1 text-left font-semibold text-gray-300 sm:px-3 sm:py-2">
//                         Status
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {event.teamMembers.map((member, index) => (
//                       <tr key={index} className="border-b border-gray-700">
//                         <td className="px-2 py-1 text-gray-300 sm:px-3 sm:py-2">
//                           {member.name}
//                         </td>
//                         <td className="px-2 py-1 text-gray-300 sm:px-3 sm:py-2">
//                           {member.username}
//                         </td>
//                         <td className="px-2 py-1 text-gray-300 sm:px-3 sm:py-2">
//                           {member.teamName}
//                         </td>
//                         <td className="px-2 py-1 text-gray-300 sm:px-3 sm:py-2">
//                           {member.status ? (
//                             <Check className="h-4 w-4 text-green-500 sm:h-5 sm:w-5" />
//                           ) : (
//                             <X className="h-4 w-4 text-red-500 sm:h-5 sm:w-5" />
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   );
// };

