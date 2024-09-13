import { CalendarEvent } from "../../../redux/slices/eventSlice";
import EventInstance from "./Event";

interface EventsProps
{
    Events: CalendarEvent[];


}

function sortDealing({Events}:EventsProps){

    return Events.sort((a, b) => b.Start.getTime() - a.Start.getTime());


}


export default function Events({Events} : EventsProps)
{   

    let sortedArray =  sortDealing({Events}).slice(0,4)

    return ( 
        <div className={"flex flex-row items-baseline w-full max-[600px]:flex-row justify-center max-[600px]:gap-3"}>
                {sortedArray.map(event => <EventInstance key={event.Title} Event={event} />)}
        </div>
    );
} 