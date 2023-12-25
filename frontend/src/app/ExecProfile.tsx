import {Component} from "react";
import Image from "next/image";

interface ExecProfileProps
{
    ID: number;
    
    Name: string;
    
    ImageBuffer: string;
    
    Position: number;
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

export default function ExecProfile({ID, Name, ImageBuffer, Position} : ExecProfileProps)
{ 
    console.log(`Position: ${Position}`);
    
    return (
        <div className={"flex items-start"}>
            <div className="box-border bg-[#262626] h-32 w-[80vh] p-4 rounded">
                <div className={"flex flex-row"}>
                    <div className={"relative border-box bg-lang-orange h-[10vh] w-20 rounded"}>
                        <Image src={ImageBuffer} width={100} height={100} alt={Name}/>
                    </div>
                    <div className="flex flex-row">
                        <span>{Name} |</span>
                        <span>{PositionStrings[Position]}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

 
