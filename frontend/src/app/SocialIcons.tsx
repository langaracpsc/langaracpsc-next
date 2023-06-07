"use client";

import {SocialIcon} from "react-social-icons";
import {Component} from "react";

export class SocialIcons extends Component<any, any>
{
    protected static Socials: Array<string> = [
        "https://github.com/langaracpsc/",
        "https://discord.gg/langara-computer-science-club-753037165050593300",
        "https://www.instagram.com/langaracpsc/"
    ];
        
    public AddSocial(url: string)
    {
        SocialIcons.Socials.push(url);
    }
        
    public render()
    {
        return SocialIcons.Socials.map((name, index) => {
            return <SocialIcon key={index} url={name} fgColor={"black"} bgColor={"#F15A22"}/>;
        }); 
    } 
    
    public constructor()
    {
        super({});
    }
}

