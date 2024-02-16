import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";
import { setServers } from "dns";

export default function Footer()
{
    const forms = {
        feedback: "https://forms.gle/jaYbdo6KWbGFvJJG8",
        register: "https://forms.gle/gPdqMB5ijafDMRAY8"
    };

    const resourcesMap = new Map<string, string>([
        ["Course Planner", "https://planner.langaracs.tech/" ],
        ["Transfer Guides", "https://drive.google.com/drive/folders/19b_LSWvUddlm4c6Huh5XWbnOHZct7m5B?usp=sharing"],
        ["Feedback", forms.feedback],
        ["More", "/resources"]
    ]);
    
    const linksMap = new Map<string, string>([
        ["Home", "/" ],
        ["About", "/about"],
        ["Events", "/events"], 
        ["Rules", "/"]
    ]);
    
    const [resources, setResources] = useState<React.ReactNode[]>([]);
    
    const [links, setLinks] = useState<React.ReactNode[]>([]);

    const router = useRouter(); 
    
    useEffect(() => {
        const resourcesTemp: Array<React.ReactNode> = [];
        const linksTemp: Array<React.ReactNode> = [];

        if (resources.length < 1)
        {
            resourcesMap.forEach((value: string, key: string) => {
                resourcesTemp.push(<>
                    <a href={value} className="hover:text-lang-orange">{key}</a>
                </>);
            });

            setResources(resourcesTemp);
        }

        if (links.length < 1) {
            linksMap.forEach((value: string, key: string) => {
                linksTemp.push(<>
                    <a href={value} className="hover:text-lang-orange">{key}</a>
                </>);
            });

            setLinks(linksTemp);
        }
    }, [resourcesMap, linksMap]);

    return (<>
        <div className="grid grid-cols-3 bg-[#1E1E1E] p-4 justify-center">
            <div className="flex flex-col">
                <div className="ml-[12vh] max-[800px]:ml-0">
                    <div className={"font-bold"}>Resources</div>
                    <div className={"flex flex-col text-sm gap-3 mt-3"}>
                        {resources}
                    </div>
                </div>
                <div className="mt-6 ml-5 text-xs">Copyright © {new Date(Date.now()).getFullYear()} Langara Computer Science Club</div>
            </div>
            <div className="flex flex-col max-[800px]:items-center">
                <div className={"font-bold"}>Links</div>
                <div className={"flex flex-col gap-1 mt-1 "}>
                    {links}
                </div>
            </div>
            <div className="flex flex-col items-end max-[600px]:items-center max-[600px]:mr-0 mr-10">
                <div className={"flex flex-col gap-6"}>
                    <div className={"font-bold flex flex-row max-[600px]:flex-col gap-3 items-center"}>
                        <div>
                            Join Us
                        </div>

                        <Button onClick={() => router.push(forms.register) } className="bg-lang-orange rounded text-white max-[600px]:text-[10px] max-[600px]:h-8 max-[600px]:w-15 h-10 font-bold">Register</Button>
                    </div>
                    <div className={"font-bold flex flex-row max-[600px]:flex-col gap-3 items-center"}>
                        <div>
                        Connect
                        </div> 
                        <div className="gap-3">
                            <SocialIcons height={25} width={25}/>
                        </div>
                    </div>
                    <div className={"flex flex-row max-[600px]:flex-col gap-3 hover:text-lang-orange"}>
                        <div>
                            <a href="#top">Go to top</a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </>);
}