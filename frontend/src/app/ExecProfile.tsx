import {Component} from "react";
import Image from "next/image";
import {useState, useEffect} from "react";
import { init } from "next/dist/compiled/@vercel/og/satori";

interface ExecProfileProps
{
    ID: string;
    
    Name: string;
    
    ImageBuffer: string;
    
    Position: string;

    Description: string;
}

const PositionStrings: string[] = [
    "President",
    "Vice President",
    "Vice President Internal",
    "Vice President External",
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
    let initialValue: number = 200;
    
    useEffect(() => {
        if (window !== undefined) {
            if (window.innerWidth <= 800)
                initialValue = 100;
        }
    });

    const [imageWidth, setImageWidth] = useState<number>(initialValue);
    
    useEffect(() => {
        const handleResize = () => {
            if (window !== undefined)
            {
                if (window.innerWidth <= 800)
                    setImageWidth(100);
                else
                    setImageWidth(200);
            }
        };
        
        if (window !== undefined) 
        {

            window.addEventListener('resize', handleResize);
            window.addEventListener('load', handleResize);
        }

        return () => {
            if (window !== undefined)
                window.removeEventListener('resize', handleResize);
        };
    }, []);
        
    return (
            <div className="flex flex-col items-center gap-3">
                <Image src={ImageBuffer} width={imageWidth} height={imageWidth} alt={Name} style={{borderRadius: "100%", height: imageWidth, width: imageWidth }} className={`w-[${imageWidth}px] h-[${imageWidth}px] aspect-square rounded-2xl`}/>
                <span className="flex flex-col font-bold text-center">{Name.split(' ').map(name => <div key={name}>{name}</div>)}</span> {/* Adjust margin-top as needed to position below image center */}
            </div>);
}

 
 
