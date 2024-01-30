"use client";

import { SocialIcon } from "react-social-icons";
import { Component } from "react";

interface SocialIconsProps {}

export default function SocialIcons({}: SocialIconsProps): JSX.Element {
    const Socials: Array<string> = [
        "https://github.com/langaracpsc/",
        "https://discord.gg/langara-computer-science-club-753037165050593300",
        "https://www.instagram.com/langaracpsc/"
    ];

    return (
        <>
            {Socials.map((name, index) => (
                <SocialIcon 
                    key={index} 
                    url={name} 
                    fgColor={"#FFFFFF"} 
                    bgColor={"#F15A22"} 
                    style={{ height: 50, width: 50 }}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition duration-1000 transform hover:scale-110"
                />
            ))}
        </>
    ); 
}
