"use client";

import Image from 'next/image';

export default function Intro() {
    return (
        <div className="flex flex-col md:flex-row w-full md:h-fit flex-wrap">
            {/* Title Section */}
            <div className='flex flex-col md:flex-row w-full md:w-[40%] my-10 text-7xl gap-[-5px] items-center'>
                <div className='flex flex-col items-center w-full md:w-fit'>
                    <div className='md:ml-20'>
                        <p className="shrink text-center md:text-left text-lang-orange">Langara</p>
                        <p className="shrink text-center md:text-left">Computer</p>
                        <p className="shrink text-center md:text-left">Science Club</p>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className='hidden lg:flex flex-col items-center sm:w-max md:w-[60%]'>
                <Image 
                    src="/code_snippet.png" 
                    width={697} 
                    height={550} 
                    alt="Join the Langara Computer Science Club" 
                    className="w-max md:max-w-[550px] lg:w-[999px] h-max object-cover" 
                />
            </div>
        </div>
    );
}

