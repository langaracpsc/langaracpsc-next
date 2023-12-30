import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import Events from "./Events";
import { fetchEventsAsync } from "../thunks/EventThunks";
import { AppDispatch } from "../stores/store";
import { CalendarEvent, SetCalendarEvents, SetFetchIntervalStarted, selectEvent } from "../slices/eventSlice";
import { Timer } from "../hacks/Timer";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

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

    useEffect(() => {
        if (!event.FetchIntervalStarted)
        {
            setInterval(async () =>{
                const fetchedEvents: CalendarEvent[] = (await mainDispatch(fetchEventsAsync() as AppDispatch)) as unknown as CalendarEvent[];
                mainDispatch(SetCalendarEvents(fetchedEvents));
            }, 1000);

            mainDispatch(SetFetchIntervalStarted(true));
        }
    }, [event.Events]);

    const getYearsSince = (year: number) => {
        return new Range(year, new Date().getFullYear() + 1).ToArray();  
    }

    console.log(currentYear); 

    return (<>
        <div className={"flex flex-col bg-body-gray items-center grow"}>
            <div className="flex flex-col mt-10">
                <div className={"text-[36px] font-bold"}>EVENTS</div>
            </div>
            <div className="mt-1 flex flex-col gap-1">
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

                <Events Events={[...event.Events].filter(event => event.Start.getFullYear() == currentYear)}/>
            </div>
        </div>
    </>);
} 




