import {Timer} from "@/app/hacks/Timer";

export function Body()
{
    return <div className={"bg-hacks-bg-black"}>
       <Timer EndTime={new Date(2023, 8, 23, 8, 0, 0)}/> 
    </div>
}