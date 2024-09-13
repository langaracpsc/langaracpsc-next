import { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
// import { fetchEventsAsync } from "../thunks/EventThunks";
// import { CalendarEvent, DefaultCalendarEvent, SetCalendarEvents, SetCurrentEvent, SetFetchIntervalStarted, selectEvent } from "../slices/eventSlice";
import { useRouter } from "next/navigation";
import EventsLuma from './EventsLuma';

export class Range {
    Start: number;

    End: number;

    ToArray(): number[] {
        const array: number[] = new Array<number>();

        for (let x = this.Start; x < this.End; x++)
            array.push(x);

        return array;
    }

    constructor(start: number, end: number) {
        this.Start = start;
        this.End = end;
    }
}

export default function EventsPage() {
    const router = useRouter();
    const mainDispatch = useAppDispatch();

    //const event = useAppSelector(selectEvent); 

    mainDispatch(SetCurrentPage("/events"));

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // const [loading, setLoading] = useState(event.Events.length < 1);

    const [currentEvent, setCurrentEvent] = useState("");

    // useEffect(() => {
    //     (async () => {
    //         if (event.Events.length < 1) 
    //         {
    //             const fetchedEvents: CalendarEvent[] = (await mainDispatch(fetchEventsAsync() as AppDispatch)) as unknown as CalendarEvent[];

    //             mainDispatch(SetCalendarEvents(fetchedEvents));
    //             setLoading(false); 
    //         }
    //     })();
    // });

    const getYearsSince = (year: number) => {
        return new Range(year, new Date().getFullYear() + 1).ToArray();
    }

    const getTimeStamp = (time: Date) => {
        const split = time.toTimeString().split(' ')[0];

        let [hour, minute] = split.substring(0, split.length - 3).split(":");

        let hourInt: number;
        let postFix: string = "AM";

        if ((hourInt = Number.parseInt(hour)) > 12) {
            hour = (hourInt - 12).toString();
            postFix = "PM";
        }

        return `${hour}:${minute} ${postFix}`;
    }
    //Use this for extra info on module
    return (
        <>
            <div className="bg-body-gray h-[90vh] max-[600px]:h-[80vh]">
                <div className={"flex flex-col bg-body-gray items-center"}>
                    <div className="flex flex-col mt-10">
                        <div className={"text-[36px] font-bold m-5"}>EVENTS</div>
                    </div>
                    <div className="mb-auto">
                        <EventsLuma />

                    </div>
                </div>
            </div>
        </>
    );
}


