import {useState} from "react";
import {IconLabel} from "../IconLabel";

export function Header()
{
    return <div className = {"bg-hacks-nav-black w-full font-audiowide "}>
        <div className = {"grid grid-rows-1 gap-1"}>
            <div className={"grid items-end mt-2"}>
                <div className={"flex flex-col gap-2"}>
                    <div className={"text-6xl max-[1100px]:text-3xl  self-center"}> Langara <span className={"text-lang-orange"}>Hacks</span></div>
                    <div className={"text-s max-[850px]:text-sm self-center"}> Collaborate, Create, Innovate </div>
                </div>
            </div>
        </div> 
    </div>
}
 
