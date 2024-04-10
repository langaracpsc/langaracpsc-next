"use client";

import Image from 'next/image'
import NavBar from './NavBar';
import { Component } from "react";
import HomePage from './HomePage';
import { Global } from "@/app/Global";
import { ThemeProvider } from 'next-themes';
import { Provider, ProviderProps } from 'react-redux'
import { store } from './stores/store';
import Footer from './Footer';
import EventsSection from './EventsOnHomePage/EventeSection';
import { useEffect, useState, useRef } from 'react';
import AboutUsSection from './aboutus'

import Decision from './EventsOnHomePage/Decision';




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


                <script defer data-domain="langaracs.tech" src="https://plausible.langaracs.tech/js/script.js"></script>




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




