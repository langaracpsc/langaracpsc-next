"use client";

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Footer from './Footer';
import HomePage from './HomePage';
import NavBar from './NavBar';
import { store } from './stores/store';





export default function Home() {
    const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth >= 768); // Adjust the breakpoint as needed
    }

    handleResize(); // Set initial state

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    /**<SideBarDisplay /> */

    return (



        <Provider store={store}>


            <div className='h-screen w-full bg-body-gray'>


                <script defer data-domain="langaracs.ca" src="https://plausible.langaracs.ca/js/script.js"></script>




                <main className="grid grid-rows-[10vh_1fr] dark max-[600px]:grid-rows-[20vh_1fr] h-full w-full overflow-y-visible overflow-x-hidden">
                    <NavBar Pages={new Map<string, string>([
                        ["Home", "/"],
                        ["About", "/about"],
                        ["Events", "/events"]
                    ])} />



                    <HomePage />

                    <Footer />
                </main>









                



            </div>

        </Provider>

    );
}




