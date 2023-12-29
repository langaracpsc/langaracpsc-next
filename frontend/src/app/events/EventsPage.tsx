import { useAppDispatch } from "../hooks/hooks";
import { SetCurrentPage } from "../slices/pageSlice";
import Events from "./Events";

export default function EventsPage()
{
    const mainDispatch = useAppDispatch();

    mainDispatch(SetCurrentPage("/events"));

    return (<>
        <div className={"flex flex-col h-[100vh] max-[600px]: h-[90vh] bg-body-gray items-center grow"}>
            <div className="flex flex-col mt-10">
                <div className={"text-[36px] font-bold"}>EVENTS</div>
            </div>
            <div className="mt-10"><Events/></div>
        </div>
    </>);
} 
