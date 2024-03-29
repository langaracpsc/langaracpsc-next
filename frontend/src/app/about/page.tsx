"use client";

import AboutPage from "@/app/about/AboutPage";
import NavBar from "../NavBar";
import { Provider } from "react-redux";
import { store } from "../stores/store";
import Footer from "../Footer";

export default function Page() 
{
    return (
        <Provider store={store}>
            <main className="grid grid-rows-[10vh_1fr] max-[600px]:grid-rows-[20vh_1fr] overflow-hidden">
                <NavBar Pages={new Map<string, string>([
                    ["Home", "/"],
                    ["About", "/about"],
                    ["Events", "/events"],
                ])} />
                <AboutPage></AboutPage>
                <Footer />
            </main>
        </Provider>
    );
}