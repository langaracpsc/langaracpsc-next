import {useState} from "react";

export function Header()
{
    return <div className = {"bg-hacks-nav-black"}>
        <div className = {"grid grid-rows-2 h-full"}>
            <div className={"grid items-end"}>
                <div className={"flex flex-col"}>
                    <div className={"text-5xl self-center"}> Langara <span className={"text-lang-orange"}>Hacks</span></div>
                </div>
            </div>
        </div> 
    </div>
}