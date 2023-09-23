import {Timer} from "@/app/hacks/Timer";
import {SocialIcons} from "@/app/SocialIcons";

export function Body()
{
    return <div className={"grid-rows-3 bg-hacks-bg-black items-center"}>
        
        <div className={"flex flex-col items-center mt-3"}>
            <span className={"text-3xl max-[850px]:text-xl"}>Schedule</span>
            <div className={"flex flex-col items-center justify-center gap-[7vh] max-[850px]:gap-[8vh] mt-[4vh] max-[850px]:mt-[9vh] max-h-full h-[250vh]"}>
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRyF8-IjcBAjemcPYusfUjDub2ZY1qsMOeYzVBfq3bZrHJn0RQ498RVPvAz45TQUmaoGpWZMWGchkfV/pubhtml?gid=1141432285&amp;single=true&amp;widget=true&amp;headers=false" className={"h-full w-[max(52vw,_500px)]"}></iframe>
            </div>
        </div>

        <br></br>

        <div className={"flex flex-row justify-center h-max gap-5 mb-[20px]"}>
            <SocialIcons/>
        </div>
        
    </div>;
}
