import {Component} from "react";
import Image from "next/image";
import {useState, useEffect} from "react";
import { init } from "next/dist/compiled/@vercel/og/satori";
import ProfileModal from "./ProfileModal";
import * as Dialog from "@radix-ui/react-dialog";


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
            <div className="flex flex-col items-center text-center">
                <div className="flex" style={{ justifyContent: "center"}}>
                    <div>
                            <Dialog.Root>
                                <Dialog.Trigger className='font-bold'>{Name}</Dialog.Trigger>
                                <Dialog.Portal>
                                    <Dialog.Overlay className="fixed inset-0 bg-black/60">
                                    <Dialog.Content className="fixed top-1/4 left-1/2 -translate-x-1/2 p-8" style={{border: "2px solid #F15A22", backgroundColor: "#171717"}}>
                                        <ProfileModal
                                        ID={ID} 
                                        Name={Name}
                                        Position={Position}
                                        ImageBuffer={ImageBuffer}
                                        Description={Description}
                                        imageWidth={imageWidth}/>
                                    </Dialog.Content>
                                    </Dialog.Overlay>
                                </Dialog.Portal>
                            </Dialog.Root>
                        <p>{Position}</p>
                    </div>
                </div>
            </div>
        </div>);
}
 
