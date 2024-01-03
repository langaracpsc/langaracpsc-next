import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import Events from "./Events";
import { fetchEventsAsync } from "../thunks/EventThunks";
import { AppDispatch } from "../stores/store";
import { CalendarEvent, DefaultCalendarEvent, SetCalendarEvents, SetCurrentEvent, SetFetchIntervalStarted, selectEvent } from "../slices/eventSlice";
import { Timer } from "../hacks/Timer";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import Conditional from "../Conditional";
import IconLabel from "../IconLabel";
import { useRouter } from "next/navigation";

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

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
                // setInterval(async () =>{
                //     await fetch();
                // }, 10000);
                mainDispatch(SetFetchIntervalStarted(true));
            }
        })();
    }, [event.Events]);

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

    return (<>
    <div className="bg-body-gray h-[90vh] max-[600px]:h-[80vh]">
        <div className={"flex flex-col bg-body-gray items-center"}>
            <div className="flex flex-col mt-10">
                <div className={"text-[36px] font-bold"}>EVENTS</div>
            </div>

            <Modal isOpen={event.CurrentEvent != DefaultCalendarEvent} onOpenChange={onOpenChange} className={"dark"} isDismissable={false}> 
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <span className="text-2xl">{event.CurrentEvent.Title}</span>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-row gap-2">
                                    <div className={"flex flex-col gap-2"}>
                                        <img alt={"event-image"} src={event.CurrentEvent.Image} height={100} width={130} className={"rounded"} />
                                        <IconLabel Label={event.CurrentEvent.Start.toDateString()}>
                                            <svg fill="#ffffff" width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
                                        </IconLabel>

                                        <IconLabel Label={`${getTimeStamp(event.CurrentEvent.Start)} - ${getTimeStamp(event.CurrentEvent.End)}`}>
                                            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </IconLabel>

                                        <IconLabel Label={(event.CurrentEvent.Location != null) ? event.CurrentEvent.Location : "TBD"}>
                                            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </IconLabel>
                                    </div>
                                    <div className={"flex flex-col items-center gap-3"}>
                                        <span className="text-lg font-bold self-center">Description</span>
                                        <div className={""}>{(event.CurrentEvent.Description != null) ? event.CurrentEvent.Description : "No description."}</div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={() => { router.push(event.CurrentEvent.Link.Apple); }}>Add to Calendar</Button>
                                <Button onClick={() => { onClose(); mainDispatch(SetCurrentEvent(DefaultCalendarEvent)); }}>Close</Button>
                            </ModalFooter>
                        </>
                        )
                    }
                </ModalContent>
            </Modal>

            <div className="mt-1 flex flex-col gap-1">
                <div className="mt-1 flex flex-col gap-1">
                    <Conditional Condition={!loading}>
                        <div className="flex fleex-col mt-1 self-start">
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


 