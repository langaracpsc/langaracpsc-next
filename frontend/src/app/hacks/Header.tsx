import {useState} from "react";
import {IconLabel} from "@/app/hacks/IconLabel";

export function Header()
{
    return <div className = {"bg-hacks-nav-black h-full w-full"}>

        <br></br>

        <div className = {"grid grid-rows-2 h-full gap-0"}>

            <div className={"grid items-end h-full font-audiowide"}>
                <div className={"flex flex-col gap-2"}>
                    <div className={"text-7xl max-[1100px]:text-4xl  self-center"}> Langara <span className={"text-lang-orange"}>Hacks</span></div>
                    <div className={"text max-[850px]:text-2s self-center"}> Collaborate, Create, Innovate </div>
                </div>
            </div>

            <div className={"grid grid-cols-2"}>
                <div className={"justify-self-end self-center w-[70vh] max-[850px]:w-[50vh]"}>
                    <IconLabel iconSrc={"/location_icon.png"} label={"T Gallery, Langara College"} height={25} width={25}/>
                </div> 
                <div className={"justify-self-start self-center w-[40vh] max-[850px]:w-[30vh]"}>
                    <IconLabel iconSrc={"/calender_icon.png"} label={"8:00 AM - 6:30 PM Sept 23rd, 2023"} height={25} width={25}/>
                </div>
            </div>

        </div> 
    </div>
}