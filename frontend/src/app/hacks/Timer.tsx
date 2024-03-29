"use client";

import {Component, useState} from "react";

class TimeStamp
{
    public readonly Days: number;
    public readonly Hours: number;
    public readonly Minutes: number;
    public readonly Seconds: number;

    public constructor(days: number, hours: number, minutes: number, seconds: number)
    {
        this.Days = days;
        this.Hours = hours;
        this.Seconds = seconds;
        this.Minutes = minutes;
    }
}

interface TimerProps
{
    EndTime: Date;
}

interface TimerState
{
    CurrentTimeStamp: TimeStamp; 
}

export class Timer extends Component<TimerProps, TimerState>
{
    protected TimeDifference: number;
    
    public Tick(): void 
    {   
        this.UpdateTimeStamp()

        setInterval(()=> {
            this.UpdateTimeStamp();
            if(this.TimeDifference > 0)
                this.TimeDifference -= 1;
        }, 1000);
    }
   
    public UpdateTimeStamp(): void {
        let seconds: number = Math.floor(this.TimeDifference % 60),
            minutes: number = Math.floor((this.TimeDifference % 3600) / 60),
            hours: number = Math.floor((this.TimeDifference % 86400) / 3600),
            days: number = Math.floor(this.TimeDifference / (3600 * 24));
        
        this.setState({CurrentTimeStamp: new TimeStamp(days, hours, minutes, seconds)} );
    }

    public UNSAFE_componentWillMount() {
        this.setState({CurrentTimeStamp: new TimeStamp(0,0,0,0)});
        this.Tick();
    }

    render()
    {
        return <div className={"text-white text-7xl max-[850px]:text-3xl"} suppressHydrationWarning>
            It&apos;s time to Hack!
        </div>       
    }
    
    constructor(props: TimerProps)
    {
        super(props);

        // I can't figure out how to fix the server time right now, SORRY RISHIT
        let date = new Date();
        date.setHours(date.getHours()-7); 
        
        this.TimeDifference = Math.abs((this.props.EndTime.valueOf() - date.valueOf())) / 1000;
        //this.TimeDifference = Math.abs((this.props.EndTime.valueOf() - new Date().valueOf())) / 1000;
    }
}