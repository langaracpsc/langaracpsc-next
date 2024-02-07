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
    "Vice Presdent Internal",
    "Vice Presdent External",
    "Tech Lead",
    "Assistant Tech Lead",
    "General Representative",
    "Director of Public Relations",
    "Director of Finance",
    "Director of Events",
    "Secratory",
    "Directory of Media"
];

export default function ExecProfile({ID, Name, ImageBuffer, Position, Description} : ExecProfileProps)
{ 
    return (
        <div className={"flex items-start ml-10 mr-10"}>
            <div className="box-border bg-[#262626]  rounded">
                <div className={"flex flex-row gap-3  text-lg max-[600px]:text-xs items-start"}>
                    <div className={"flex flex-col items-start relative border-box h-100 w-10 rounded basis-1/6 max-[600px]:basis-1/4 shrink-0 p-0"}>
                        <Image src={ImageBuffer} width={200} height={200} alt={Name}  
                                className={"mt-0 self-start aspect-square rounded-sm  h-[200px] w-[200px] object-contain"}/>
                    </div>
                            <span className={"font-bold"}>{Name}</span>
                    <div className="flex flex-col gap-3 max-[600px]:items-center">
                        <div className="flex flex-row ">
                            <span>&nbsp;.&nbsp;</span>
                            <span> {PositionStrings[Position]}</span>
                        </div>
                        <div className="flex">
                            {Description} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

 
 
