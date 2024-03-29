import { experimental_useEffectEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import Events from "./Events";
import { fetchEventsAsync } from "../thunks/EventThunks";
import { AppDispatch } from "../stores/store";
import { CalendarEvent, DefaultCalendarEvent, SetCalendarEvents, SetCurrentEvent, SetFetchIntervalStarted, selectEvent } from "../slices/eventSlice";
import Conditional from "../Conditional";
import { useRouter } from "next/navigation";
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select";

export class Range 
{
    Start: number;
    
    End: number;

    ToArray(): number[] 
    {
        const array: number[] = new Array<number>();

        for (let x = this.Start; x < this.End; x++)
            array.push(x); 

        return array;
    }

    constructor(start: number, end: number)
    {
        this.Start = start; 
        this.End = end;
    }    
} 

export default function EventsPage()
{
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
            if (event.Events.length < 1) 
            {
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

        if ((hourInt = Number.parseInt(hour)) > 12)
        {
            hour = (hourInt - 12).toString();
            postFix = "PM";
        }

        return `${hour}:${minute} ${postFix}`; 
    }

    return (
        <>
            <div className="bg-body-gray h-[90vh] max-[600px]:h-[80vh]">
                <div className={"flex flex-col bg-body-gray items-center"}>
                    <div className="flex flex-col mt-10">
                        <div className={"text-[36px] font-bold"}>EVENTS</div>
                    </div>

                    <div className="mt-1 flex flex-col gap-1">
                        <div className="mt-1 flex flex-col gap-1">
                            <Conditional Condition={!loading}>
                                <div className="flex flex-col mt-1 self-start">
                                    <Select onValueChange = {(key: string) => {setCurrentYear(Number.parseInt(key))}}>
                                        <SelectTrigger className="bg-[#272626] text-white border-0">{currentYear}</SelectTrigger>
                                        <SelectContent className="bg-[#272626] text-white" color="dark">
                                            {
                                                getYearsSince(2022).reverse().map(year => <SelectItem className="dark bg-[#272626] text-white" value={year.toString()} key={year}>{year}</SelectItem>) 
                                            }
                                        </SelectContent>
                                    </Select>
                                </div>
                            </Conditional>
                        </div>
                        <div className="mt-1 flex flex-col gap-1 overflow-y-auto max-h-screen h-[70vh] max-[600px]:h-[60vh]">
                            <Conditional Condition={loading}>Loading</Conditional>
                            <Events Events={[...event.Events].filter(event => event.Start.getFullYear() == currentYear)}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 


 