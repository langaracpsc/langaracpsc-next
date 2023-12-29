import EventInstance from "./Event";


export default function Events()
{
    return (<div className={"flex flex-col w-full max-[600px]:flex-col flex-wrap items-center gap-5"}>
            <EventInstance Event={{
                Title: "Board Games Social",
                Start:  new Date(),
                End: new Date(Date.now() + 100000000),
                Description: "Event description",
                Location: "T001", 
                Image: "https://langaracpsc.github.io/assets/social.png"
            }}/>
        </div>);
}