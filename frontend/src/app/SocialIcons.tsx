"use client";

import {SocialIcon} from "react-social-icons";
import {Component} from "react";

interface SocialIconsProps
{}

export default function SocialIcons({} : SocialIconsProps): JSX.Element
{
    const Socials: Array<string> = [
        "https://github.com/langaracpsc/",
        "https://discord.gg/langara-computer-science-club-753037165050593300",
        "https://www.instagram.com/langaracpsc/"
    ];
        
    return (<>{Socials.map((name, index) => {
        return <SocialIcon key={index} url={name} fgColor={"black"} bgColor={"#F15A22"}/>;
    })}</>); 
}

