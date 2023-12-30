import Image from "next/image";
import { CalendarEvent } from "../slices/eventSlice";
import IconLabel from "../IconLabel";

interface EventProps
{
    Event: CalendarEvent;
}

export default function EventInstance({Event} : EventProps)
{
    const getTimeStamp = (time: Date) => time.toTimeString().split(' ')[0];

    return (<>
        <div className="flex flex-row bg-[#272626] h-[20vh] w-[50vw] max-[600px]:w-[90vw] rounded-lg items-center">
            <div className={"basis-1/6 self-center m-5"}>
                <Image alt={"event-image"} src={Event.Image} height={100} width={130} className={"rounded"}/>
            </div>
            <div className={"flex flex-col self-start mt-2 gap-3"}>
                <div className={"text-xl font-bold"}>{Event.Title}</div>
                <IconLabel Label={Event.Start.toDateString()}>
                    <svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
                </IconLabel>
                
                <IconLabel Label={`${getTimeStamp(Event.Start)} - ${getTimeStamp(Event.End)}`}>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> 
                </IconLabel>
                
                <IconLabel Label={Event.Location}>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </IconLabel>
            </div>
        </div>
    </>);
}