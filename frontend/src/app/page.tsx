import Image from 'next/image'
import { Inter } from 'next/font/google'
import {NavBar} from "@/app/NavBar";
import {Component} from "react";
import {HomePage} from "@/app/HomePage";

    const inter = Inter({ subsets: ['latin'] })

    let PageIndex: number = 0;

// let PageMap: Array<Component<any, any>> = [ HomePage ];

    export default function Home() {
        return (
            <main className="grid grid-rows-[10vh_90vh]">
                <NavBar></NavBar>
                <HomePage></HomePage>
            </main>
        )
}

