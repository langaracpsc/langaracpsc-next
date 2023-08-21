import {useState} from "react";
import {IconLabel} from "@/app/hacks/IconLabel";

export function Header()
{
    return <div className = {"bg-hacks-nav-black"}>
        <div className = {"grid grid-rows-2 h-full"}>
            <div className={"grid items-end"}>
                <div className={"flex flex-col"}>
                    <div className={"text-5xl self-center"}> Langara <span className={"text-lang-orange"}>Hacks</span></div>
                </div>
            </div>
            <div className={"grid grid-cols-2"}>
                <div className={" self-center"}>
                    <IconLabel iconSrc={"/location_icon.png"} label={"T Gallery, Langara"} height={25} width={25}/>
                </div>
                <div className={"justify-self-start self-center"}>
                    <IconLabel iconSrc={"/calender_icon.png"} label={"Sept 23rd, 2023"} height={25} width={25}/>
                </div>
            </div>
        </div> 
    </div>
}