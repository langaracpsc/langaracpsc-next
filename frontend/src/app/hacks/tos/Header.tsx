import {useState} from "react";
import {IconLabel} from "@/app/hacks/IconLabel";

export function Header()
{
    return <div className = {"bg-hacks-nav-black w-full"}>
        <div className = {"grid grid-rows-2 h-full"}>
            <div className={"grid items-end"}>
                <div className={"flex flex-col gap-2"}>
                    <div className={"text-5xl max-[850px]:text-4xl self-center"}> Langara <span className={"text-lang-orange"}>Hacks</span></div>
                    
                    <div className={"text-xs max-[850px]:text-2s self-center"}> Collaborate, Create, Innovate </div>
                </div>
            </div>
        </div> 
    </div>
}