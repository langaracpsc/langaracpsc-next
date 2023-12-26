import {Component} from "react";
import Image from "next/image";

interface ExecProfileProps
{
    ID: number;
    
    Name: string;
    
    ImageBuffer: string;
    
    Position: number;

    Description: string;
}

const PositionStrings: string[] = [
    "President",
    "Vice Presdent",
    "Tech Lead",
    "General Representative",
    "Director of Public Relations",
    "Director of Finance",
    "Director of Events"
];

export default function ExecProfile({ID, Name, ImageBuffer, Position, Description} : ExecProfileProps)
{ 
    console.log(`Position: ${Position}`);
    
    return (
        <div className={"flex items-start"}>
            <div className="box-border bg-[#262626]  p-4 rounded">
                <div className={"flex flex-row gap-3"}>
                    <div className={"relative border-box h-100 w-10 rounded basis-1/7 max-[600px]:basis-1/4 shrink-0"}>
                        <Image src={ImageBuffer} width={200} height={200} alt={Name} className={"aspect-square object-contain h-[100px] w-[100px] max-[600px]:w-[200px] max-[600px]:h-[200px]"}/>
                    </div>
                    <div className="flex flex-col gap-3 max-[600px]:items-center">
                        <div className="flex flex-row ">
                            <span className={"font-bold"}>{Name}</span>
                            <span>&nbsp;.&nbsp;</span>
                            <span> {PositionStrings[Position]}</span>
                        </div>
                        <div className="flex text-s max-[600px]:text-xs">
                            {Description} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

 
 
