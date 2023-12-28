"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from './NavBar';
import {Component, useEffect} from "react";
import HomePage from './HomePage';
import {Global} from "@/app/Global";
const inter = Inter({ subsets: ['latin'] })

import { Provider, ProviderProps } from 'react-redux'
import { store } from './stores/store';


export default function Home() {
    return (
        <Provider store={store}>
        <main className="grid grid-rows-[10vh_1fr]  h-full w-full overflow-hidden">
            <NavBar Pages={new Map<string, string>([
                ["Home", "/"],
                ["About", "/about"],
                ["Events", "/events"]
            ])}/>
            <HomePage/>
        </main>
        </Provider>
    );
}

 

 
