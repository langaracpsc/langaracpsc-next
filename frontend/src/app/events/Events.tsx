import { CalendarEvent } from "../slices/eventSlice";
import EventInstance from "./Event";

interface EventsProps
{
    Events: CalendarEvent[];
}

export default function Events({Events} : EventsProps)
{
    return (<div className={"flex flex-col w-full max-[600px]:flex-col flex-wrap items-center gap-5"}>
            {
                Events.map(event => <EventInstance Event={event}/>)
            }
        </div>);
}