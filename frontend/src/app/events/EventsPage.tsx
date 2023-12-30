import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import Events from "./Events";
import { fetchEventsAsync } from "../thunks/EventThunks";
import { AppDispatch } from "../stores/store";
import { CalendarEvent, SetCalendarEvents, selectEvents } from "../slices/eventSlice";

export default function EventsPage()
{
    const mainDispatch = useAppDispatch();

    const events = useAppSelector(selectEvents); 

    mainDispatch(SetCurrentPage("/events"));

    useEffect(() => {
        (async () => {
            if (events.length < 1) 
            {
                const fetchedEvents: CalendarEvent[] = (await mainDispatch(fetchEventsAsync() as AppDispatch)) as unknown as CalendarEvent[];

                mainDispatch(SetCalendarEvents(fetchedEvents));
            }
        })();
    });

    return (<>
        <div className={"flex flex-col bg-body-gray items-center grow"}>
            <div className="flex flex-col mt-10">
                <div className={"text-[36px] font-bold"}>EVENTS</div>
            </div>
            <div className="mt-10"><Events Events={[...events]}/></div>
        </div>
    </>);
} 

