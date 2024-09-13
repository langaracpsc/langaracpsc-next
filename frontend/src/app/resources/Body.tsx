import SocialIcons from "@/app/shared_components/SocialIcons";

export function Body()
{
    return <div className={"grid-rows-3 bg-hacks-bg-black items-center"}>
        
        <div className={"flex flex-col items-center mt-3"}>
            <span className={"text-3xl max-[850px]:text-xl"}>Resources</span>
            <div className={"flex flex-col items-center justify-center gap-[7vh] max-[850px]:gap-[8vh] mt-[4vh] max-[850px]:mt-[9vh] max-h-full h-[100vh]"}>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vQhTudGVmLYBP0q5ir1T9YYtfAN1MaKVEbbKOfhnGloD_DK5ff15Kwqe_jbL0sBrxivomKbfwG9EPsA/pub?embedded=true" className={"h-full w-[max(52vw,_500px)]"}></iframe>
            </div>
        </div>

        <br></br>

        <div className={"flex flex-row justify-center h-max gap-5 mb-[20px]"}>
            <SocialIcons/>
        </div>
        
    </div>;
}
