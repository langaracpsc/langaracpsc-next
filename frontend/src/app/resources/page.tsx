import { Body } from "./Body";
import { Header } from "./Header";
 
export default function Page()
{
    return <div className={"grid grid-rows bg-navs-bg-black h-full font-audiowide"}>
        <Header/>
        <Body/>
    </div>;
} 