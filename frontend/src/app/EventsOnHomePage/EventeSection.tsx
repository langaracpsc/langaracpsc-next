import { experimental_useEffectEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import Events from "./Events";
import { fetchEventsAsync } from "../thunks/EventThunks";
import { AppDispatch } from "../stores/store";
import { CalendarEvent, DefaultCalendarEvent, SetCalendarEvents, SetCurrentEvent, SetFetchIntervalStarted, selectEvent } from "../slices/eventSlice";
import { Timer } from "../hacks/Timer";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import Conditional from "../Conditional";
import IconLabel from "../IconLabel";
import { useRouter } from "next/navigation";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";


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

export default function EventsSection() {
    const router = useRouter();
    const mainDispatch = useAppDispatch();

    const event = useAppSelector(selectEvent);

    mainDispatch(SetCurrentPage("/events"));

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const [loading, setLoading] = useState(event.Events.length < 1);

    const [currentEvent, setCurrentEvent] = useState("");



    useEffect(() => {
        (async () => {
            console.log("Fetching events.");
            if (event.Events.length < 1) {
                const fetchedEvents: CalendarEvent[] = (await mainDispatch(fetchEventsAsync() as AppDispatch)) as unknown as CalendarEvent[];

                mainDispatch(SetCalendarEvents(fetchedEvents));
                setLoading(false);
            }
        })();
    });



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

            <div className="bg-body-gray h-[60vh] max-[600px]:h-[80vh]">
                <div className={"flex flex-row bg-body-gray w-screen"}>
                    <div className="mt-1 flex flex-col gap-1">


                    </div>
                    
                    <div className=" flex flex-col justify-center items-center w-full ">
                        
                        <div className=" flex flex-row justify-center w-full items-baseline gap-72">
                            <Conditional Condition={!loading}>

                               
                                    <div className={"text-[36px] font-bold"}>Future Events</div>
                                    <a href="../events" className={"text-xl font-bold hover:text-lang-orange max-[600px]:text-lg select-none"}>See more events</a>
                              
                            </Conditional>
                        </div>
                        <div className="mt-1 flex flex-row gap-1 items-center content-center h-96 w-full">
                            <Conditional Condition={loading}>Loading</Conditional>
                            <Events Events={[...event.Events].filter(event => event.Start.getFullYear() == currentYear)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 
