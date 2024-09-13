import { experimental_useEffectEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import Events from "./Events";
import { fetchEventsAsync } from "../thunks/EventThunks";
import { AppDispatch } from "../stores/store";
// import { CalendarEvent, DefaultCalendarEvent, SetCalendarEvents, SetCurrentEvent, SetFetchIntervalStarted, selectEvent } from "../slices/eventSlice";
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

    // const event = useAppSelector(selectEvent);

    mainDispatch(SetCurrentPage("/events"));

    // const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // const [loading, setLoading] = useState(event.Events.length < 1);

    //Use this to change the height, width etc, of the iframes

    const iframeStyle = {
        border: '1px solid black',
        borderRadius: '4px',
        boxShadow: '0px 0px 3px 1px black ',
        height: `760px`,
        width: '500px'
    };

    // useEffect(() => {
    //     (async () => {
    //         console.log("Fetching events.");
    //         if (event.Events.length < 1) {
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

            <div className="bg-body-gray h-[60vh] max-[600px]:h-[80vh]">
                <div className={"flex flex-row bg-body-gray w-screen"}>


                    <div className=" flex flex-col justify-center items-center w-full ">
                        <div className={"text-[48px] font-bold"}>Events</div>
                        {/* add Luma Event Iframes here */}
                        <div className="flex flex-row justify-center w-full items-baseline gap-5 mb-5" >
                            <iframe
                                src="https://lu.ma/embed/event/evt-CcEhJ9sUgoWfRZL/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            <iframe
                                src="https://lhacks.langaracs.ca/"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            <iframe
                                src="https://lu.ma/embed/event/evt-ADFRul3ebIYu65p/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />


                        </div>
                        <div className=" flex flex-row justify-center w-full items-baseline">

                            <a href="../events" className={"text-xl font-bold hover:text-lang-orange max-[600px]:text-lg select-none"}>See more events</a>

                        </div>
                        <div className={"text-xl font-bold max-[600px]:text-lg select-none"}>or </div>
                        <div><a href="https://lhacks.langaracs.ca/" className={"text-xl font-bold hover:text-lang-orange max-[600px]:text-lg select-none"}>Check out the hackthon website</a></div>

                        {/* <div className="mt-1 flex flex-row gap-1 items-center content-center h-96 w-full"> */}
                        {/* <Conditional Condition={loading}>Loading</Conditional>
                            <Events Events={[...event.Events].filter(event => event.Start.getFullYear() == currentYear)} /> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
} 
