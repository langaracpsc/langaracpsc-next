import { defaultHead } from 'next/head';
import React, { useState } from 'react';
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
    
    return (
        <>
            <div className="content flex" style={{ flexDirection: "row", padding: '20px', overflowY: 'auto', boxSizing: 'border-box' }}>
                <div className='profile-info flex text-center' style={{flexDirection: "column", marginRight: "3rem"}}>
                    <Image src={ImageBuffer} width={imageWidth} height={imageWidth} alt={Name} style={{borderRadius: "100%", height: imageWidth, width: imageWidth }} className={`w-[${imageWidth}px] h-[${imageWidth}px] aspect-square rounded-2xl`}/>
                    <h2 className='font-bold'>{Name}</h2>
                    <p>{Position}</p>

                </div>
                <div className='description-section flex text-left' style={{flexDirection: "column", marginTop: "40px"}}>
                    <h3 className='font-bold'>Description</h3>
                    <p>{Description}</p>
                </div>
                <Dialog.Close className='close-modal' style={{ position: 'absolute', top: 10, right: 10, padding: '5px 7px', borderRadius: '4px' }}>Close</Dialog.Close>
            </div>
        </>
    );
};

