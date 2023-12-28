"use client";

import { Provider } from "react-redux";
import NavBar from "../NavBar";
import { store } from "../stores/store";

export default function Page()
{
    return (<> 
        <Provider store={store}>
            <main className="grid grid-rows-[10vh_1fr] max-[600px]:grid-rows-[20vh_1fr] overflow-hidden">
                <NavBar Pages={new Map<string, string>([
                    ["Home", "/"],
                    ["About", "/about"],
                    ["Events", "/events"]
                ])}/>
            </main>    
        </Provider>
    </>); 
}