"use client";

import Footer from './shared_components/footer/Footer';
import Intro from './Intro';
import NavBar from './shared_components/header/NavBar';
import ExcitingStuff from './ExcitingStuff';
import Link from 'next/link';

export default function Home() {

    return (
        <main className="flex flex-col h-screen w-full bg-body-gray overflow-y-visible overflow-x-hidden">
            <NavBar />
            <div className="flex flex-col gap-5 my-5">
                <Intro />

                {/* TODO: create a component that shows upcoming events here. */}


                <div className="p-[20px] py-5 flex flex-col gap-10 pt-10">

                    <div className='w-full border-white border-2 p-5 rounded-md'>
                        <p className="text-2xl font-semibold    ">JOIN OUR DISCORD & INSTAGRAM!</p>
                        <p className='text-xl'>Join over 1500 members on our discord server to get updated about events, talk about courses, and meet new people! Events and other initiatives are also posted to our instagram account!</p>
                        <div className="w-full flex justify-center gap-4 pt-5">
                            <Link href="https://discord.gg/langara-computer-science-club-753037165050593300" target="_blank" className="w-1/2">
                                <p className="w-full border-white bg-lang-orange font-semibold hover:bg-lang-orange rounded p-2 text-center">DISCORD</p>
                            </Link>
                            <Link href="https://www.instagram.com/langaracpsc/" target="_blank" className="w-1/2">
                                <p className="w-full border-white bg-lang-orange font-semibold hover:bg-lang-orange rounded p-2 text-center">INSTAGRAM</p>
                            </Link>
                        </div>
                    </div>


                    <div className='w-full border-white border-2 p-5 rounded-md flex flex-col gap-4'>
                        <p className="text-2xl font-semibold    ">Langara Hacks 2024</p>
                        <p className='text-xl'>Langara Hacks is our annual hackathon that is held in September of each year in person at Langara College. We welcome participants from all skill levels to attend, and last year we welcomed over a hundred participants from schools all over BC. You can find more information at the hackathon website: </p>
                        <Link href="https://lhacks.langaracs.ca" target="_blank">
                            <p className="w-fit px-5 border-white bg-lang-orange font-semibold hover:bg-lang-orange rounded p-2 text-center">Langara Hacks 2024</p>
                        </Link>
                    </div>

                    <div className='w-full border-white border-2 p-5 rounded-md flex flex-col gap-4'>
                        <p className="text-2xl font-semibold    ">Langara + CTF</p>
                        <p className='text-xl'>Stay tuned for updates on a new Capture The Flag team at Langara! All skill levels are welcome, but creative thinking and problem solving skills are a must. Stay tuned for updates in Spring 2025.</p>
                        {/* ADD LINK TO DISCORD SERVER HERE WHEN SPRING 2025 IS HERE */}
                        {/* <Link href="https://lhacks.langaracs.ca" target="_blank">
                            <p className="w-fit px-5 border-white bg-lang-orange font-semibold hover:bg-lang-orange rounded p-2 text-center">Discord Server</p>
                        </Link> */}
                    </div>

                    <div className='w-full border-white border-2 p-5 rounded-md flex flex-col gap-4'>
                        <p className="text-2xl font-semibold    ">Build Nights</p>
                        <p className='text-xl'>Build Nights are a weekly meetup where we will help you to build a project! If you want to learn some practical skills and create something worth much more than a grade, join our coworking sessions with (optional) demos at the end. We have experienced mentors who can help you decide what to work on, and what tools you should learn to get there. Stay tuned for meetup times for Spring 2025.</p>
                    </div>

                    <div className='w-full border-white border-2 p-5 rounded-md flex flex-col gap-4'>
                        <p className="text-2xl font-semibold    ">Executive Hiring</p>
                        <p className='text-xl'>Information on new executive positions will be released in January 2025. If you are interested in becoming an executive, come chat with a club executive beforehand at Clubs Day or any of our other events.</p>
                        {/* <Link href="https://lhacks.langaracs.ca" target="_blank">
                            <p className="w-fit px-5 border-white bg-lang-orange font-semibold hover:bg-lang-orange rounded p-2 text-center">Hiring Package</p>
                        </Link> */}
                    </div>

                </div>


            </div>
            <Footer />
        </main>
    );
}




