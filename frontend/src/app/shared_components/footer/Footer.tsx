import { Button } from "@/components/ui/button";
import SocialIcons from "../SocialIcons";
import Link from "next/link";

export default function Footer() {
    const forms = {
        feedback: "https://forms.gle/jaYbdo6KWbGFvJJG8",
        register: "https://lu.ma/g2q0djtw"
    };

    const resourcesMap = new Map<string, string>([
        ["Langara Course Planner", "https://planner.langaracs.ca/"],
        // ["Transfer Resources", "https://langaracs.notion.site/Transfer-Information-a0548da4b3084681868381310c604c34"],
        // ["Course Resources", "https://langaracs.notion.site/Langara-CS-Resources-12b750af5ecc4eeb86315d3d9fd8f1ce?pvs=4"],
        ["General Feedback Form", "https://forms.gle/jaYbdo6KWbGFvJJG8"]
    ]);

    const linksMap = new Map<string, string>([
        ["Rules", "https://langaracs.notion.site/LCSC-Rules-393da1457d784fa19c98d1d3c32ae829?pvs=4"]
    ]);

    const resources = Array.from(resourcesMap).map(([key, value]) => (
        <Link key={key} href={value} target="_blank" className="hover:text-lang-orange">{key}</Link>
    ));

    const links = Array.from(linksMap).map(([key, value]) => (
        <Link key={key} href={value} target="_blank" className="hover:text-lang-orange">{key}</Link>
    ));

    return (
        <>

        <footer className="bg-[#1E1E1E] px-10 py-5 min-h-40">

            <div className="flex justify-between">

                <div className="text-left flex flex-col">
                    <p className="text-lg font-semibold pb-2">Quick Links:</p>
                    {resources}
                </div>


                <div className="text-right">
                    <SocialIcons height={40} width={40} gap={0} />
                </div>
            </div>
            
        </footer>

        
        {/* Look at the horror that the footer used to be... */}
            
        {/* </footer> 
            <footer className="bg-[#1E1E1E] mt-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1E1E1E] p-5">
                    <div className="flex flex-row mt-3 ml-3 justify-evenly md:justify-normal">
                        <div className="flex flex-col ">
                            <div className="flex flex-col">
                                <div className={"font-bold text-3xl"}>Resources</div>
                                <div className={"flex flex-col text-sm gap-3 mt-3"}>
                                    {resources}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col justify-evenly">
                        <div className={"flex flex-col gap-2 items-center md:items-end md:mt-3 md:mr-3"}>
                            <div className={"font-bold flex flex-row gap-3 items-center"}>
                                <Link href={forms.register} target="_blank">
                                    <Button className="bg-lang-orange hover:bg-lang-orange rounded text-white h-10 font-bold">Become a Member.</Button>
                                </Link>
                            </div>
                            <div className={"font-bold flex flex-row gap-3 items-center text-2xl"}>
                                <SocialIcons height={40} width={40} gap={2} />
                            </div>
                        </div>
                        <div className="alignment_div opacity-0">I am not here</div>
                    </div>
                </div>
            </footer> */}
        </>
    );
}
