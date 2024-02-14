"use client";

import Image from 'next/image'
import NavBar from './NavBar';
import {Component, useEffect} from "react";
import HomePage from './HomePage';
import {Global} from "@/app/Global";
import { ThemeProvider } from 'next-themes';
import { Provider, ProviderProps } from 'react-redux'
import { store } from './stores/store';
import { NextUIProvider } from '@nextui-org/react';
import Footer from './Footer';

export default function Home() {
    return (
        <Provider store={store}>

            <script defer data-domain="langaracs.tech" src="https://plausible.langaracs.tech/js/script.js"></script>
            
            <div id="top"></div>
            <main className="grid grid-rows-[10vh_1fr] dark max-[600px]:grid-rows-[20vh_1fr] h-full w-full overflow-hidden">
                <NavBar Pages={new Map<string, string>([
                    ["Home", "/"],
                    ["About", "/about"],
                    ["Events", "/events"]
                ])} />
                <HomePage />
            </main>
            <Footer/>
        </Provider>
    );
}

 

 
