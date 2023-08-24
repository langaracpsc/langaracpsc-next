import {Timer} from "@/app/hacks/Timer";
import {SocialIcons} from "@/app/SocialIcons";

export function Body()
{
    return <div className={"grid-rows-5 bg-hacks-bg-black"}> 
            <div className={"flex flex-col items-center gap-[7vh] max-[850px]:gap-[8vh] mt-[8vh] max-[850px]:mt-[9vh]"}>
                <span className={"text-3xl max-[850px]:text-xl"}>Registration opens soon!</span>
                <Timer EndTime={new Date(2023, 8, 23, 8, 0, 0)}/> 
            </div>

            <div className={"flex flex-col items-center self-center gap-[7vh] max-[850px]:gap-[8vh] mt-[8vh] max-[850px]:mt-[9vh] max-w-[100vw]"}>
                <span className={"text-3xl max-[850px]:text-xl self-center"}>What is a Hackathon?</span>
                <span className="max-w-[70vw] mb-4">
                    A hackathon is a competition where teams of students (generally 2 - 4) work together and use their software or hardware skills to build a project in a very short amount of time! Note: a hackathon usually doesn&apos;t involve hacking, and instead, the term is used to describe the spirit of the competition: building something in a short amount of time.
                </span>
            </div>

            <div className={"flex flex-col items-center justify-center gap-[7vh] max-[850px]:gap-[8vh] mt-[8vh] max-[850px]:mt-[9vh] max-w-[100vw]"}> 
                <span className={"text-3xl max-[850px]:text-xl"}>Frequently Asked Questions:</span>
                <div className={"max-w-[70vw] space-y-4 self-center"}> 
                    <div className="mb-4">
                            <b>Q: What should I do if I lack coding experience?</b>
                            <p>A: If you&apos;re unfamiliar with coding, worry not! There will be multiple workshops throughout the day to provide you with the necessary skills. Even if coding isn&apos;t your strong suit, your participation is still highly encouraged. You can contribute to your team in various other capacities and learn from the experience!</p>
                    </div>

                    <div className={"mb-4"}>
                        <b>Q: Can individuals who are not students at Langara register for the hackathon?</b>
                        <p>A: Absolutely! We welcome non-Langara students to participate. However, at least 50% of your team must be current Langara students.</p>
                    </div>

                    <div className={"mb-4"}>
                        <b>Q: Are students from disciplines other than computer science or computer studies allowed to participate?</b>
                        <p>A: Yes! We encourage students from diverse backgrounds to join in. While programming is a vital component of a hackathon, there are numerous other facets to a successful project. You can contribute your expertise to areas such as project presentation, design, or conceptualization!</p>
                    </div>
                    
                    <div className="mb-4">
                        <b>Q: Who is organizing this hackathon?</b>

                        <a>A: The hackathon is being organized by the Hackathon Task Force in collaboration with the Langara Computer Science Club.</a>
                    </div>

                    <div className="mb-4">
                        <b>Q: Do I need to bring my own lunch?</b>
                        <p>A: Lunch and dinner will be provided for all participants! However, if you have specific dietary preferences or additional snacks you&apos;d like, feel free to bring those along.</p>
                    </div>
                    
                    <div className="mb-4">
                    <b>Q: What if I don&apos;t have a team upon registration?</b>
                    <p>A: No need to fret. We have arrangements in place to help you form a team. Even if you don&apos;t currently have a team, you can still register for the hackathon. This is a great opportunity to meet fellow participants, share ideas, and form collaborative teams during the event. Your participation is valuable, regardless of your team status at registration.</p>
                    </div>
                    
                </div>
            </div>

            <div className={"flex flex-col items-center gap-[5vh] max-[850px]:gap-[6vh] mt-[8vh] max-[850px]:mt-[9vh]"}> 
                <span className={"text-3xl max-[850px]:text-xl"}> Sponsors: </span>
                <span className={"max-[850px]:text-sm"}> Langara Department of Computer Science </span>
                <span><a href="mailto:langaracompsciclub@gmail.com" className={"hover:text-lang-orange"}> Want to sponsor? Get in touch!</a></span>
            </div>
            
            <div className={"flex flexr-ow justify-center h-max gap-5 mt-[15vh] max-[850px]:mt-[25vh]"}>
                <SocialIcons/>
            </div>
        </div>
}