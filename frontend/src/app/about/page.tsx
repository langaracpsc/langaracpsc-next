"use client";

import {AboutPage} from "@/app/about/AboutPage";
import NavBar from "../NavBar";
import { Provider } from "react-redux";
import { store } from "../stores/store";
export default function Page()
{
    return (
        <Provider store={store}>
        <main className="grid grid-rows-[10vh_1fr] max-[600px]:grid-rows-[20vh_1fr] overflow-hidden">
            <NavBar Pages={[
                ["Home", "/"],
                ["About", "/about"],
                ["Events", "/events"]
            ]}></NavBar>
            <AboutPage></AboutPage>
        </main>    
        </Provider>
    );
}