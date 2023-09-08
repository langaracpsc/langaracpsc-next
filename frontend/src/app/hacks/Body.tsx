import {Timer} from "@/app/hacks/Timer";
import {SocialIcons} from "@/app/SocialIcons";

export function Body()
{
    return <div className={"grid-rows-5 bg-hacks-bg-black text-white"}> 
            <div className={"flex flex-col items-center gap-[7vh] max-[850px]:gap-[8vh] mt-[8vh] max-[850px]:mt-[9vh] font-audiowide"}>
                <div>
                    <Timer EndTime={new Date(2023, 8, 23, 8, 0, 0)}/>
                    <span className={"text-sm max-[850px]:text-sm flex flex-col items-center mt-0"}>left until the hackathon.</span>
                </div>
                <div className={"text-xl max-[850px]:text-sm flex flex-col items-center"}>
                    <a href="https://forms.gle/TmBcsFRup5KfppYU6" target="_lank" rel="noopener noreferrer"
                    className="text-3xl max-[850px]:text-xl inline-flex itembs-center m-5 justify-center px-10 py-8 border border-transparent leading-6 font-medium rounded-md text-white bg-lang-orange hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-800 transition duration-150 ease-in-out">
                        ✨Register Now!✨
                    </a>
                </div>
            </div>
            
            <div className={"flex flex-col items-center self-center gap-[5vh] max-[850px]:gap-[6vh] mt-[10vh] max-[850px]:mt-[40vh] max-w-[100vw]"}>
                <span className={"text-3xl max-[850px]:text-xl self-center text-bold"}>Prizes</span>
                <div className="max-w-[70vw] mb-4 flex flex-col items-center gap-3 text-lg">
                    <span>First Place: $250</span>
                    <span>Second Place: $100</span>
                    <span> Third Place: $100</span>
                </div>
            </div>

            <div className={"flex flex-col items-center self-center gap-[7vh] max-[850px]:gap-[8vh] mt-[8vh] max-[850px]:mt-[9vh] max-w-[100vw]"}>
                <span className={"text-3xl max-[850px]:text-xl self-center"}>What is a Hackathon?</span>
                <span className="max-w-[70vw] mb-4">
                    A hackathon is a competition where teams of students (generally 2 - 4) work together and use their software or hardware skills to build a project in a very short amount of time! No actual hacking is involved. A hackathon is a great way to make new bonds, develop skills outside of the classroom, create a portfolio project, gain experience on project management, and so much more!
                </span>
            </div>

            <div className={"flex flex-col items-center justify-center gap-[7vh] max-[850px]:gap-[8vh] mt-[8vh] max-[850px]:mt-[9vh] max-w-[100vw]"}> 
                <span className={"text-3xl max-[850px]:text-xl"}>Frequently Asked Questions:</span>
                <div className={"max-w-[70vw] space-y-4 self-center"}> 
                    <div className="mb-4">
                            <b>Q: What should I do if I lack coding experience?</b>
                            <p>A: If you&apos;re unfamiliar with coding, worry not! We will have multiple workshops to prepare you for the hackathon! Even if coding isn&apos;t your strong suit, your participation is still highly encouraged. You can contribute to your team in various other capacities and learn from the experience!</p>
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
                        <p>A: The hackathon is being organized by the Hackathon Task Force in collaboration with the Langara Computer Science Club.</p>
                    </div>

                    <div className="mb-4">
                        <b>Q: Do I need to bring my own food?</b>
                        <p>A: Lunch and dinner will be provided for all participants! Please let us know your dietary restrictions when you register. You are also welcome to bring your own food or snacks! </p>
                    </div>
                    
                    <div className="mb-4">
                    <b>Q: What if I don&apos;t have a team upon registration?</b>
                    <p>A: Don&apos;t worry! Even if you don&apos;t currently have a team, you can still register for the hackathon. We will have team building events in the days leading up to the hackathon! Although a team isn&apos;t mandatory, we highly, highly recommend you to form a team of 3 - 4 people!</p>
                    </div>
                    
                </div>
            </div>

            <div className={""}>
                <div className={"flex flex-col items-center gap-[2vh] max-[850px]:gap-[2vh] mt-[8vh] max-[850px]:mt-[9vh]"}> 
                    <span className={"text-3xl max-[850px]:text-xl"}> Sponsors: </span>
                    <span className={"max-[850px]:text-sm"}> Langara Department of Computer Science </span>
                    <span className={"max-[850px]:text-sm"}> Langara IT Department </span>
                    <a className={"max-[850px]:text-sm hover:text-lang-orange"} href ="https://www.microserve.ca/">MicroServe</a>
                    <a href="mailto:langaracompsciclub@gmail.com" className={"hover:text-lang-orange self-center"}> Want to sponsor? Get in touch! </a>
                </div>

                <br></br>
                <br></br>

                <div className={"flex flex-row justify-center h-max gap-5 mb-[20px]"}>
                    <SocialIcons/>
                </div>
            </div>

        </div>
}
