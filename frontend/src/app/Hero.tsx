// "use client";

import Image from 'next/image';
import { cookies } from 'next/headers'

import hero1 from '../../public/hero_images/langara1.png'
import hero2 from '../../public/hero_images/langara2.png'
import hero3 from '../../public/hero_images/langara3.png'
import hero4 from '../../public/hero_images/langara4.png'
import hero5 from '../../public/hero_images/langara5.png'



// otherwise next.js will cache the total route result and it will not be random
export const dynamic = 'force-dynamic';

let imageCounter = 0;

export default async function Hero() {
    const cookieStore = await cookies()
    const theme = cookieStore.get('theme')
    
    const images = [hero1, hero2, hero3, hero4, hero5]

    const selectedImage = images[imageCounter % images.length];
    imageCounter++;

    return (
        <div className="relative w-[100vw] h-[90vh]">
            <div className="z-index: -1">
                <Image
                    priority
                    placeholder='blur'
                    // unoptimized
                    src={selectedImage}
                    fill={true}
                    alt="Image of Langara College campus."
                    className="brightness-[.3] object-cover"
                />
            </div>


            <div className="relative flex flex-col justify-center w-[100vw] h-[90vh] pointer-events-none">
                <div className='text-7xl text-left ml-5 md:ml-page_padding_md pt-[40px] w-fit'>  {/* 40px is half the height of navbar*/}
                    <p className="text-lang-orange w-fit pointer-events-auto">Langara</p>
                    <p className="w-fit pointer-events-auto">Computer</p>
                    <p className="w-fit pointer-events-auto">Science Club</p>
                </div>
            </div>
        </div>

    )



    // return (
    //     <div className="flex flex-col md:flex-row w-full md:h-fit flex-wrap">
    //         {/* Title Section */}
    //         <div className='flex flex-col md:flex-row w-full md:w-[40%] my-10 text-7xl gap-[-5px] items-center'>
    //             <div className='flex flex-col items-center w-full md:w-fit'>
    //                 <div className='md:ml-20'>
    //                     <p className="shrink text-center md:text-left text-lang-orange">Langara</p>
    //                     <p className="shrink text-center md:text-left">Computer</p>
    //                     <p className="shrink text-center md:text-left">Science Club</p>
    //                 </div>
    //             </div>
    //         </div>

    //         {/* Image Section */}
    //         <div className='hidden lg:flex flex-col items-center sm:w-max md:w-[60%]'>
    //             <Image 
    //                 src="/code_snippet.png" 
    //                 width={697} 
    //                 height={550} 
    //                 alt="Join the Langara Computer Science Club" 
    //                 className="w-max md:max-w-[550px] lg:w-[999px] h-max object-cover" 
    //             />
    //         </div>
    //     </div>
    // );
}

