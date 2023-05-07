import Image from 'next/image'
import { Inter } from 'next/font/google'
import {NavBar} from "@/app/NavBar";
import {Component} from "react";
import {HomePage} from "@/app/HomePage";
import {Global} from "@/app/Global";

const inter = Inter({ subsets: ['latin'] })

// Global.SetupWindow();
// let PageMap: Array<Component<any, any>> = [ HomePage ];

export default function Home() {
    return (
        <main className="grid grid-rows-[10vh_100vh] overflow-hidden">
            <NavBar></NavBar>
            <HomePage></HomePage>
        </main>
    );
}

