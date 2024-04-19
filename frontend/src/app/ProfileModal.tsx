import { defaultHead } from 'next/head';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

interface ProfileModalProps {
    ID: String;

    Name: string;

    Position: string;

    Description: string;

    ImageBuffer: string;

    imageWidth: number;
}

export default function ProfileModal ({Name, Position, ImageBuffer, Description, imageWidth} : ProfileModalProps) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1200);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
                <div className="content flex" style={{ flexDirection: isSmallScreen ? "column" : "row", padding: '20px', overflowY: 'auto', boxSizing: 'border-box', maxWidth: "60vw", maxHeight: "60vh"}}>
                <div className="flex flex-col items-center gap-3">
                    <Image src={ImageBuffer} width={imageWidth} height={imageWidth} alt={Name} style={{borderRadius: "100%", minHeight: "20vb", minWidth: "20vb"}} className={`w-[${imageWidth}px] h-[${imageWidth}px] aspect-square rounded-2xl object-cover`}/>
                    <div className='profile-info flex text-center' style={{flexDirection: "column"}}>
                    
                        <h2 className='font-bold'>{Name}</h2>
                        <p>{Position}</p>

                    </div>
                </div> 
                <div className='description-section flex text-left' style={{flexDirection: "column", marginLeft: isSmallScreen ? "0px" : "40px", marginTop: isSmallScreen ? "20px" : "0px"}}>
                    <h3 className='font-bold'>Description</h3>
                    <p>{Description}</p>
                </div>
                <Dialog.Close className='close-modal' style={{ position: 'absolute', top: 10, right: 10, padding: '5px 7px', borderRadius: '4px' }}>Close</Dialog.Close>
            </div>
    );
};