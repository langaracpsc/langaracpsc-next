import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import Events from "./Events";
import { fetchEventsAsync } from "../thunks/EventThunks";
import { AppDispatch } from "../stores/store";
import { CalendarEvent } from "../slices/eventSlice";

export default function EventsPage()
{
    const mainDispatch = useAppDispatch();

    mainDispatch(SetCurrentPage("/events"));

    const [events, setEvents] = useState(new Array<CalendarEvent>()); 


    useEffect(() => {
        (async () => {
            setEvents((await mainDispatch(fetchEventsAsync() as AppDispatch)) as unknown as CalendarEvent[]); 
        })();
    }); 

    return (<>
        <div className={"flex flex-col bg-body-gray items-center grow"}>
            <div className="flex flex-col mt-10">
                <div className={"text-[36px] font-bold"}>EVENTS</div>
            </div>
            <div className="mt-10"><Events Events={events}/></div>
        </div>
    </>);
} 
