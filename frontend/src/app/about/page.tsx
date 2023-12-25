"use client";

import {AboutPage} from "@/app/about/AboutPage";
import NavBar from "../NavBar";
export default function Page()
{
    return (
        <main className="grid grid-rows-[10vh_1fr] max-[600px]:grid-rows-[20vh_100vh] overflow-hidden">
            <NavBar></NavBar>
            <AboutPage></AboutPage>
        </main>    
    );
}