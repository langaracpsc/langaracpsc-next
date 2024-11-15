"use client";

import AboutPage from "@/app/about/AboutPage";
import NavBar from "../shared_components/header/NavBar";
import { Provider } from "react-redux";
import { store } from "../../redux/stores/store";
import Footer from "../shared_components/footer/Footer";

export default function Page() 
{
    return (
        <Provider store={store}>
            <main className="grid grid-rows-[10vh_1fr] max-[600px]:grid-rows-[20vh_1fr] overflow-hidden">
                <NavBar/>
                <AboutPage></AboutPage>
                <Footer />
            </main>
        </Provider>
    );
}