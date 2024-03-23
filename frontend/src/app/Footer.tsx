import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import SocialIcons from "./SocialIcons";
import { setServers } from "dns";

export default function Footer()
{
    const forms = {
        feedback: "https://forms.gle/jaYbdo6KWbGFvJJG8",
        register: "https://forms.gle/gPdqMB5ijafDMRAY8"
    };

    // const year = useMemo(() =>  , []);

    const resourcesMap = new Map<string, string>([
        ["Course Planner", "https://planner.langaracs.tech/" ],
        ["Transfer Guides", "https://langaracs.notion.site/Transfer-Information-a0548da4b3084681868381310c604c34"],
        ["Feedback", forms.feedback],
        // ["Resources", "/resources"]
    ]);
    
    const linksMap = new Map<string, string>([
        ["Home", "/" ],
        ["About", "/about"],
        ["Events", "/events"], 
        ["Rules", "https://langaracs.notion.site/LCSC-Rules-393da1457d784fa19c98d1d3c32ae829?pvs=4"]
    ]);
    
    const [resources, setResources] = useState<React.ReactNode[]>([]);
    
    const [links, setLinks] = useState<React.ReactNode[]>([]);

    const router = useRouter(); 
  
    const resourcesMemo = useMemo(() => {
        const resourcesTemp: Array<React.ReactNode> = [];
        
        if (resources.length < 1)
        {
            resourcesMap.forEach((value: string, key: string) => {
                resourcesTemp.push(<>
                    <a href={value} className="hover:text-lang-orange">{key}</a>
                </>);
            });
        }

        return resourcesTemp;
    }, [resourcesMap]);

    const linksMemo = useMemo(() => {
        const linksTemp: Array<React.ReactNode> = [];
        
        if (links.length < 1)
            linksMap.forEach((value: string, key: string) => {
                linksTemp.push(<>
                    <a href={value} className="hover:text-lang-orange">{key}</a>
                </>);
            });

        return linksTemp;
    }, [linksMap]);
        
    return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1E1E1E] p-6">
            <div className="flex flex-row mt-3 ml-3 justify-evenly md:justify-normal">
                <div className="flex flex-col ">
                    <div className="flex flex-col">
                        <div className={"font-bold text-3xl"}>Resources</div>
                        <div className={"flex flex-col text-sm gap-3 mt-3"}>
                            {resourcesMemo}
                        </div>
                        <div className="opacity-0 md:opacity-100 mt-10 text-xs">Copyright © {new Date(Date.now()).getFullYear()} Langara Computer Science Club</div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className={"font-bold text-3xl"}>Links</div>
                        <div className={"flex flex-col text-sm gap-3 mt-3"}>
                            {linksMemo}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-end">
                <div className="flex flex-col gap-3 md:gap-3 md:items-center">
                    <div className="flex flex-col items-center md:flex-row md:items-center ml-4">
                        <div className="text-3xl text-center md:text-left">
                            Join Us
                        </div>
                        <Button onClick={() => router.push(forms.register)} className="bg-transparent font-bold text-lang-orange text-2xl hover:scale-110">Register</Button>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center">
                        <div className="text-2xl">
                            Contacts
                        </div>
                        <SocialIcons height={25} width={25} gap={2}/>
                    </div>
                    <div className="underline text-xl text-center md:text-start">
                        <a href="#top">Go to top of the website</a>
                    </div>
                </div>
            </div>



        </div>
    </>
    );
}
