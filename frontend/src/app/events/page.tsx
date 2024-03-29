"use client";

import { Provider } from "react-redux";
import NavBar from "../NavBar";
import { store } from "../stores/store";
import EventsPage from "./EventsPage";
import Footer from "../Footer";

export default function Page() 
{
    return (<>
        <Provider store={store}>
            <main className="grid grid-rows-[10vh_1fr] max-[600px]:grid-rows-[20vh_1fr] ">
                <NavBar Pages={new Map<string, string>([
                    ["Home", "/"],
                    ["About", "/about"],
                    ["Events", "/events"]
                ])} />
                <EventsPage />
                <Footer />
            </main>
        </Provider>
    </>); 
}