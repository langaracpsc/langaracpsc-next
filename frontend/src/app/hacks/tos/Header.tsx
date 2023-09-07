import {useState} from "react";
import {IconLabel} from "@/app/hacks/IconLabel";

export function Header()
{
    return <div className = {"m-100px bg-hacks-nav-black w-full"}>

        <br></br>
        
        <div className = {"grid grid-rows-2 h-full"}>
            <div className={"grid items-end"}>
                <div className={"flex flex-col gap-2"}>
                    <div className={"text-9xl max-[1100px]:text-5xl self-center"}> <a href="/hacks">Langara <span className={"text-lang-orange"}>Hacks</span></a></div>
                    
                    <div className={"text-xs max-[850px]:text-m self-center"}> Collaborate, Create, Innovate </div>
                </div>
            </div>
        </div> 
    </div>
}