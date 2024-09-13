import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import IconLabel from "../../shared_components/IconLabel";
import { CalendarEvent, SetCurrentEvent, selectEvent } from "../../../redux/slices/eventSlice";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import router from "next/router";


interface EventProps {
    Event: CalendarEvent;
}

export default function EventInstance({ Event }: EventProps) {
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

    const event = useSelector(selectEvent);

    const mainDispatch = useAppDispatch();

    const [clicked, setClicked] = useState(true);

    return (<>
        <Dialog>
            <DialogTrigger asChild>

                <div className="flex flex-col bg-transparent w-[15vw] h-[20vw] max-[850px]:h-[80vh] max-[600px]:w-[20vw] rounded-lg items-center justify-center" onClick={() => { mainDispatch(SetCurrentEvent(Event)); setClicked(true); }}>

                    <div className={"flex flex-row basis-1/6 justify-center m-5"}>
                        <Image alt={"event-image"} src={Event.Image} height={100} width={130} className={"rounded"} />
                    </div>

                    <div className={"flex flex-col self-center gap-2 text-sm p-2"}>
                        <a className={"text-xl font-bold hover:text-lang-orange max-[600px]:text-lg select-none"} >{Event.Title}</a>
                        <div className={"flex flex-col gap-1 max-[600px]:gap-2"}>
                            <IconLabel Label={Event.Start.toDateString()}>
                                <svg fill="#ffffff" width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="-1"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
                            </IconLabel>

                            <IconLabel Label={`${getTimeStamp(Event.Start)} - ${getTimeStamp(Event.End)}`}>
                                <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </IconLabel>

                            <IconLabel Label={(Event.Location != null) ? Event.Location : "TBD"}>
                                <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </IconLabel>
                        </div>
                    </div>

                </div>

            </DialogTrigger>
            <DialogContent className="bg-[#272626] border-0">
                <DialogHeader>
                    <DialogTitle className="text-2xl">{Event.Title}</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <div className="flex flex-col gap-2 max-[600px]:gap-0">
                        <div className="flex flex-row gap-4 p-8">
                            <img
                                alt="event-image"
                                src={Event.Image}
                                height={100}
                                width={130}
                                className="rounded"
                            />
                            <div className="flex flex-col text-white">
                                <IconLabel Label={Event.Start.toDateString()}>
                                    <svg fill="#ffffff" width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
                                </IconLabel>

                                <IconLabel Label={`${getTimeStamp(Event.Start)} - ${getTimeStamp(Event.End)}`}>
                                    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                </IconLabel>

                                <IconLabel Label={(Event.Location != null) ? Event.Location : "TBD"}>
                                    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                </IconLabel></div>                            </div>
                    </div>
                    <div className="flex flex-col w-full flex-wrap items-center gap-3 text-white">
                        <span className="text-lg font-bold self-center">Description</span>
                        <div className="text-sm overflow-x-auto max-h-screen">
                            {Event.Description != null ? (
                                <div dangerouslySetInnerHTML={{ __html: Event.Description }}></div>
                            ) : (
                                "No description."
                            )}
                        </div>
                    </div>
                </DialogDescription>
                <DialogFooter>
                    <div className="flex flex-row gap-3 items-end">
                        <Button className={"bg-[#4a4949] text-white"} onClick={() => router.push(Event.Link.Google)}>Add to Calendar</Button>
                        <DialogClose asChild>
                            <Button className={"bg-[#4a4949] text-white"}>Close</Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>

       


    </>);
}
