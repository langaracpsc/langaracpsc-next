import {Header} from "./Header";
import {Body} from "@/app/hacks/Body";

export default function Page()
{
    return <div className={"grid grid-rows-[30vh_70vh] bg-navs-bg-black h-full font-audiowide"}>
        <Header/>
        <Body/>
    </div>;
}