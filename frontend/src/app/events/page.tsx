"use client";

import { Provider } from "react-redux";
import Footer from "../shared_components/footer/Footer";
import NavBar from "../shared_components/header/NavBar";
import { store } from "../../redux/stores/store";
import EventsPage from "./EventsPage";

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