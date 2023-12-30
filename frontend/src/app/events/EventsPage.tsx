import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import Events from "./Events";
import { fetchEventsAsync } from "../thunks/EventThunks";
import { AppDispatch } from "../stores/store";
import { CalendarEvent, SetCalendarEvents, SetFetchIntervalStarted, selectEvent } from "../slices/eventSlice";
import { Timer } from "../hacks/Timer";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Conditional from "../Conditional";

export class Range {
    Start: number;
    
    End: number;

    ToArray(): number[] 
    {
        const array: number[] = [];

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
    const mainDispatch = useAppDispatch();

    const event = useAppSelector(selectEvent); 

    mainDispatch(SetCurrentPage("/events"));

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());  

    const [loading, setLoading] = useState(event.Events.length < 1);

    const fetch = async () => {
        const fetchedEvents: CalendarEvent[] = (await mainDispatch(fetchEventsAsync() as AppDispatch)) as unknown as CalendarEvent[];
        mainDispatch(SetCalendarEvents(fetchedEvents));

        setLoading(false);
    }; 

    useEffect(() => {
        (async () => {
            if (!event.FetchIntervalStarted)
            {
                await fetch();
                setInterval(async () =>{
                    await fetch();
                }, 10000);

                mainDispatch(SetFetchIntervalStarted(true));

            }
        })();
    }, [event.Events]);

    const getYearsSince = (year: number) => {
        return new Range(year, new Date().getFullYear() + 1).ToArray();  
    }

    console.log(currentYear); 
 
    return (<>
    <div className="bg-body-gray h-[90vh] max-[600px]:h-[80vh]">
        <div className={"flex flex-col bg-body-gray items-center"}>
            <div className="flex flex-col mt-10">
                <div className={"text-[36px] font-bold"}>EVENTS</div>
            </div>
            <div className="mt-1 flex flex-col gap-1">
                <div className="mt-1 flex flex-col gap-1">
                    <Conditional Condition={!loading}>
                        <div className="flex flex-col mt-1 self-start">
                            <Dropdown className="dark">
                                <DropdownTrigger className="bg-[#272626] text-white"><Button radius={"sm"}>{currentYear}</Button></DropdownTrigger>
                                <DropdownMenu onAction={(key: React.Key) => {setCurrentYear(key as number)}} variant="bordered" color="default">
                                    {
                                        getYearsSince(2022).reverse().map(year => <DropdownItem key={year}>{year}</DropdownItem>) 
                                    }
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </Conditional>
                </div>
                <div className="mt-1 flex flex-col gap-1 overflow-y-auto max-h-screen h-[80vh]">
                    <Conditional Condition={loading}>Loading</Conditional>
                    <Events Events={[...event.Events].filter(event => event.Start.getFullYear() == currentYear)}/>
                </div>
            </div>
        </div>
    </div>
    </>);
} 




