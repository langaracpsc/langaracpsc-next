import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import Events from "./Events";
import { fetchEventsAsync } from "../thunks/EventThunks";
import { AppDispatch } from "../stores/store";
import { CalendarEvent, SetCalendarEvents, SetFetchIntervalStarted, selectEvent } from "../slices/eventSlice";
import { Timer } from "../hacks/Timer";

export default function EventsPage()
{
    const mainDispatch = useAppDispatch();

    const event = useAppSelector(selectEvent); 

    mainDispatch(SetCurrentPage("/events"));

    useEffect(() => {
        if (!event.FetchIntervalStarted)
        {
            setInterval(async () =>{
                const fetchedEvents: CalendarEvent[] = (await mainDispatch(fetchEventsAsync() as AppDispatch)) as unknown as CalendarEvent[];
                mainDispatch(SetCalendarEvents(fetchedEvents));
            }, 2000);

            mainDispatch(SetFetchIntervalStarted(true));
        }
    }, [event.Events]);

    return (<>
        <div className={"flex flex-col bg-body-gray items-center grow"}>
            <div className="flex flex-col mt-10">
                <div className={"text-[36px] font-bold"}>EVENTS</div>
            </div>
            <div className="mt-10"><Events Events={[...event.Events]}/></div>
        </div>
    </>);
} 



