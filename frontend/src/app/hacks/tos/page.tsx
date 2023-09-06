import {Header} from "./Header";
import {Body} from "./Body";

export default function Page()
{
    return <div className={"grid grid-rows-[30vh_100%] bg-navs-bg-black h-full font-audiowide"}>
        <Header/>
        <Body/>
    </div>;
}