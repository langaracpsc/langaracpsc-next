import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import { useRouter } from "next/navigation";

export class Range {
    Start: number;

    End: number;

    ToArray(): number[] {
        const array: number[] = new Array<number>();

        for (let x = this.Start; x < this.End; x++)
            array.push(x);

        return array;
    }

    constructor(start: number, end: number) {
        this.Start = start;
        this.End = end;
    }
}

export default function EventsSection() {
    const router = useRouter();
    const mainDispatch = useAppDispatch();

    mainDispatch(SetCurrentPage("/events"));

    const iframeStyle = {
        border: '1px solid black',
        borderRadius: '4px',
        boxShadow: '0px 0px 3px 1px black ',
        height: `760px`,
        width: '500px'
    };

    const getYearsSince = (year: number) => {
        return new Range(year, new Date().getFullYear() + 1).ToArray();
    }

    const getTimeStamp = (time: Date) => {
        const split = time.toTimeString().split(' ')[0];

        let [hour, minute] = split.substring(0, split.length - 3).split(":");

        let hourInt: number;
        let postFix: string = "AM";

        if ((hourInt = Number.parseInt(hour)) > 12) {
            hour = (hourInt - 12).toString();
            postFix = "PM";
        }

        return `${hour}:${minute} ${postFix}`;
    }
    //Use this for extra info on module
    return (
        <>

            <div className="bg-body-gray h-[60vh] max-[600px]:h-[80vh]">
                <div className={"flex flex-row bg-body-gray w-screen"}>


                    <div className=" flex flex-col justify-center items-center w-full ">
                        <div className={"text-[48px] font-bold"}>Events</div>
                        {/* add Luma Event Iframes here */}
                        <div className="flex flex-row justify-center w-full items-baseline gap-5 mb-5" >
                            <iframe
                                src="https://lu.ma/embed/event/evt-CcEhJ9sUgoWfRZL/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            <iframe
                                src="https://lhacks.langaracs.ca/"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                            <iframe
                                src="https://lu.ma/embed/event/evt-ADFRul3ebIYu65p/simple"
                                style={iframeStyle}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />


                        </div>
                        <div className=" flex flex-row justify-center w-full items-baseline">

                            <a href="../events" className={"text-xl font-bold hover:text-lang-orange max-[600px]:text-lg select-none"}>See more events</a>

                        </div>
                        <div className={"text-xl font-bold max-[600px]:text-lg select-none"}>or </div>
                        <div><a href="https://lhacks.langaracs.ca/" className={"text-xl font-bold hover:text-lang-orange max-[600px]:text-lg select-none"}>Check out the hackthon website</a></div>
                    </div>
                </div>
            </div>
        </>
    );
} 
