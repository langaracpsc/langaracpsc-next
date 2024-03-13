"use client";

import { SocialIcon } from "react-social-icons";
import { Component } from "react";

interface SocialIconsProps {
    height?: number,
    width?: number,
    gap?: number
}

export default function SocialIcons({height, width, gap}: SocialIconsProps): JSX.Element {
    const Socials: Array<string> = [
        "https://github.com/langaracpsc/",
        "https://discord.gg/langara-computer-science-club-753037165050593300",
        "https://www.instagram.com/langaracpsc/"
    ];

    if (gap === undefined)
        gap = 0;

    return (
        <div className={`flex flex-row gap-${gap}`}>
            {Socials.map((name, index) => (
                <SocialIcon 
                    key={index} 
                    url={name} 
                    fgColor={"black"} 
                    bgColor={"white"} 
                    style={{ height: (height === undefined) ? 50 : height, width: (width === undefined) ? 50 : width }}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition duration-3000 transform hover:scale-110"
                />
            ))}
        </div>
    ); 
}
