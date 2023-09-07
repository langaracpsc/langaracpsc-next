import {Header} from "./Header";
import {Body} from "@/app/hacks/Body";

export default function Page()
{
    return <div className={"grid grid-rows bg-navs-bg-black h-full font-roboto"}>
        <Header/>
        <Body/>
    </div>;
}