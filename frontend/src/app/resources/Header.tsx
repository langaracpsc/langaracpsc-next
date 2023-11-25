import {useState} from "react";
import {IconLabel} from "@/app/hacks/IconLabel";

export function Header()
{
    return  <div className="grid grid-cols-3 max-[600px]:grid max-[600px]:grid-rows-2  row-start-1 row-span-1 max-[600px]:justify-center ">
        <div></div>
    <div className="min-[600px]:basis-1/4 max-[600px]:row-start-1 flex flex-row shrink-0 grow-0 justify-center ">
        <div></div>
        <img src="LCS.png" alt="club-logo" className="ml-5 flex-start-2 max-[600px]:ml-8 shrink-0 grow-0 h-full select-none self-center"/>
        <div></div>
    </div>
    <div className="min-[600px]:basis-3/4 max-[600px]:grid max-[600px]:grid-template-cols[5%_90%_5%] min-[600px]:flex min-[600px]:justify-end min-[600px]:mr-8 h-full">
        {/* <div></div>
        <div className={"col-start-2"}>
            <div className={"nav_button_container flex max-[500px]:gap-x-3 gap-x-7 mt-5 max-[500px]:mt-6"}>
                <NavButton Label={"Home"}  Endpoint={"/"}></NavButton>
                <NavButton Label={"About"} Endpoint={"/about "}></NavButton>
                <NavButton Label={"Events"} Endpoint={"/events"}></NavButton>
                <NavButton Label={"Blog"} Endpoint={"/blog"}></NavButton>
            </div>
        </div>
        <div></div> */} 
    </div>
</div>
}
 
