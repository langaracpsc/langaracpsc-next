"use client";

import { SocialIcon } from "react-social-icons";

interface SocialIconsProps {
    height?: number,
    width?: number,
    gap?: number
}

export default function SocialIcons({height, width, gap}: SocialIconsProps): JSX.Element {
    const Socials: Array<string> = [
        "https://discord.gg/langara-computer-science-club-753037165050593300",
        "https://www.instagram.com/langaracpsc/",
        "https://www.linkedin.com/company/langaracpsc/",
        "https://github.com/langaracpsc/",
    ];

    if (gap === undefined)
        gap = -20;

    return (
        <div className={`flex flex-row gap-[${gap}px]`}>
            {Socials.map((name, index) => (
                <SocialIcon 
                    key={index} 
                    url={name} 
                    fgColor={"white"} 
                    bgColor={"#1E1E1E"} 
                    style={{ height: (height === undefined) ? 50 : height, width: (width === undefined) ? 50 : width }}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition duration-3000 transform hover:scale-110"
                />
            ))}
        </div>
    ); 
}
