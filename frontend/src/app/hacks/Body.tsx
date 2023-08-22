import {Timer} from "@/app/hacks/Timer";
import {SocialIcons} from "@/app/SocialIcons";

export function Body()
{
    return <div className={"grid-cols-2 bg-hacks-bg-black"}> 
            <div className={"flex flex-col items-center gap-[5vh] max-[850px]:gap-[8vh] mt-10 max-[850px]:mt-[8vh]"}>
                <span className={"text-3xl max-[850px]:text-xl"}>Registrations open soon!</span>
                <Timer EndTime={new Date(2023, 8, 23, 8, 0, 0)}/> 
            </div>
            <div className={"flex flex-row justify-center h-max gap-5 mt-[10vh] max-[850px]:mt-[25vh]"}>
                <SocialIcons/>
            </div>
        </div>
}