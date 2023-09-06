import {Timer} from "@/app/hacks/Timer";
import {SocialIcons} from "@/app/SocialIcons";

export function Body()
{
    return <div className={"grid-rows-6 bg-hacks-bg-black"}> 
            <div className={"flex flex-col items-center justify-center gap-[7vh] max-[850px]:gap-[8vh] mt-[8vh] max-[850px]:mt-[9vh] max-w-[100vw]"}> 
                <span className={"text-3xl max-[850px]:text-xl"}>Terms Of Service</span>
                <div className={"max-w-[70vw] space-y-4 self-center"}>
                    <div className={"mb-4 text-lg"}>
                            <b>Welcome to Langara Hacks 2023!</b>
                            <p className={"text-sm"}>We are so excited to share our passion and love for computer science through unifying people via programming and building projects at this event.
                                This event will provide a safe, social, and exciting place to build and program a new project, while providing food and prizes!
                                For those of you who don&apos;t know what a Hackathon is: 
                                A Hackathon is a competition where teams of students (generally 2 - 4) work together and use their software or hardware skills to build a project in a very short amount of time! Note: a Hackathon usually doesn&apos;t involve hacking, and instead the term is used to describe the spirit of the competition: building something in a short amount of time. This project can be anything from a website, a piece of hardware, a video game, or anything that involves programming. A Hackathon is a great way for students to build connections, build a project for their portfolio, develop programming skills, and to showcase talent!</p>
                    </div>
                    <div className="mb-4">
                        <b>By registering for this event you therefore agree to the following rules listed below.</b>
                        <div className={"text-sm"}>
                            <ol>
                                <li>- No harassment of any volunteer or attendee on event or campus premises.</li>
                                <li>- No actual hacking at the event (Including accessing servers you aren’t supposed to, stealing confidential information, or DDOSing).</li>
                                <li>- Come to the event with reasonable hygiene standards and presented appropriately. This especially involves your scent, as there are people sensitive to different smells.</li>
                                <li>- Ensure that your trash ends up in the garbage bin. Please.</li>
                                <li>- If you choose to bring outside food, make sure that the food has a reasonable scent (Same as rules that apply to the Langara Library).</li>
                                <li>- Be respectful of any and all people present on campus, especially since there will be classes occurring on the weekend.</li>
                                <li>- Standard campus rules apply.</li>
                                <li>- Finally, please use common sense to the best of your ability! We understand that common sense is not a unified trait, and all incidents will be handled at our discretion.</li>
                            </ol>
                        </div>
                    </div>

                    <div className={"mb-4 text-lg"}>
                        <span className={"text-extrabold"}>Prohibited Behavior</span>
                    </div>
                    <div className={"mb-4 text-lg"}>
                        <b>Harrasment</b>
                        <p className={"text-sm"}>Treat people the way you want to be treated.
                            Harassment is defined as a course of comments or actions that are known, or ought reasonably to be known, to be unwelcome. Whether it is involving words or actions that are known or should be known to be offensive, embarrassing, humiliating, demeaning, or unwelcome; based on one or more incidents under the ground of discrimination identified by this policy.</p>
                    </div>

                    <div className={"mb-4 text-lg"}>
                        <b>Sexual and Gender-Based Harassment</b>
                        <p className={"text-sm"}>Every person has the right to freedom from harassment.
                            Sexual harassment is a form of harassment that can include:
                            - Leering or inappropriate staring
                            - Gender-related verbal abuse, threats, or taunting
                            - Unwelcome demands for dates (If they say no, please respect that!)
                            - Requests for sexual favors
                            - Displays of sexually offensive pictures, graffiti, or recordings
                            - Offensive jokes or comments of sexual nature about an organizer or attendee
                        </p>
                    </div>

                    <div className={"mb-4 text-lg"}>
                        <b>Abusive Behavior and Lewd Conduct</b>
                        <p className={"text-sm"}>Respect others and their property. Occurrences of disrespect towards people will be handled at our discretion.
                            Hackers shall not use any electronic device or electronic method of communication to engage in any illegal, lewd, offensive, indecent, sexual, or obscene act or expression (i.e. Facebook, Twitter, etc) that may lead to harassment, harassing or bullying.
                        </p>
                    </div>
                    <div className={"mb-4 text-lg"}>
                        <b>Failure to comply with event rules may result in dismissal from the event, and prohibition from participating in any future club endeavors.</b>
                        <p className={"text-sm"}>Your participation in the event releases the use of any images taken at the event with your presence in the picture to the club and college.</p>
                    </div>
                    <div className={"mb-4 text-lg"}>
                        <b>All Non-Langara Attendees MUST sign a waiver and bring it to the event.</b>
                        <p className={"text-sm"}>The waiver will be emailed out to all attendees a week before the event starts. There will be extra copies of the form at the event, but will heavily slow down check-in, so please fill it in beforehand!</p>
                    </div>
                    <div className={"mb-4 text-lg"}>
                        <b>Registration Rules</b>
                        <p className={"text-sm"}>All teams must field at least 2 people and have a maximum of 5 people. At least half the people on the team must be from Langara College.
                            For you solo warriors, please follow through the registration as follows and sign up without a team.
                        </p>
                    </div>
                    <div className={"mb-4 text-lg"}>
                        <b>Failure to do so will prohibit your participation in the event</b>
                        <p className={"text-sm"}>Special thanks to the Langara Computer Science Department and the Langara IT Department for making this event possible!</p>
                    </div>
                    <div className={"mb-4 text-lg"}>
                        <b><u>Note: Registration for this event does not guarantee your participation as we have an event cap of 120 people. We will choose participants on a first come, first serve exception, based on group leader registration time.</u></b>
                    </div>
                </div>
            </div>
        </div>
}
