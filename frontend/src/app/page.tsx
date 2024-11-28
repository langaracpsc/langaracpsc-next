"use client";

import Footer from './shared_components/footer/Footer';
import HomePage from './HomePage';
import NavBar from './shared_components/header/NavBar';

export default function Home() {

    // useEffect(() => {
    //     function handleResize() {
    //         setIsWideScreen(window.innerWidth >= 768); // Adjust the breakpoint as needed
    //     }

    //     handleResize(); // Set initial state

    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    return (
        <div className='h-screen w-full bg-body-gray'>
            <main className="grid grid-rows-[10vh_1fr] dark max-[600px]:grid-rows-[20vh_1fr] h-full w-full overflow-y-visible overflow-x-hidden">
                <NavBar />
                <HomePage />
                <Footer />
            </main>
        </div>
    );
}




