import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import { experimental_useEffectEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";

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
import EventInstance from "./EventForCarousel"

interface EventsProps {
  Events: CalendarEvent[];


}

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


export function CarouselMy() {
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




  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)



  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      console.log("current")
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])





  return (



    <>



      <Conditional Condition={!loading}>
        <Conditional Condition={loading}>Loading</Conditional>
        <Carousel setApi={setApi} className="w-full max-w-xs" >
          <CarouselContent>

            {/* <Events Events={[...event.Events].filter(event => event.Start.getFullYear() == currentYear)} /> */}

            {
              [...event.Events]
                .filter(event => event.Start.getFullYear() == currentYear)
                .sort((a, b) => b.Start.getTime() - a.Start.getTime())
                .slice(0, 4)
                .map((event, index) => (
                  <CarouselItem key={index}>
                    <EventInstance key={event.Title} Event={event} />
                  </CarouselItem>
                ))
            }


          </CarouselContent>
          <div className="py-2 text-center text-sm text-muted-foreground">
            <a className={"text-xl font-bold hover:text-lang-orange max-[600px]:text-lg select-none"} href="./events">More Events Here</a>
          </div>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Conditional>

    </>




  )
}



