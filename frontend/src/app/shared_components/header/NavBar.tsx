"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import Menu from "../Menu";
import NavButton from "./NavButton";
import { SetCurrentPage, selectCurrentPage } from "../../../redux/slices/pageSlice";
import SocialIcons from "../SocialIcons";


export default function NavBar() {

    const Pages = new Map<string, string>([
        ["Home", "/"],
        ["About", "/about"],
        ["Events", "https://lu.ma/lcsc"]
    ])

    const mainDispatch = useAppDispatch();
    const currentPage = useSelector(selectCurrentPage);

    // Set the current page when navigating
    const handlePageChange = (url: string) => {
        mainDispatch(SetCurrentPage(url));
    };

    const navButtons: Array<JSX.Element> = [];

    Pages.forEach((value, key) => {
        navButtons.push(
            <NavButton
                Label={key}
                key={key}
                Activated={currentPage === value}
                EndPoint={value}
                onNavigate={handlePageChange}
            />
        );
    });

    const formURL = "https://lu.ma/g2q0djtw";

    return (
        <div>
            <nav className="w-full bg-black fixed top-0 left-0 right-0 z-20">
                <div className="flex flex-row justify-between items-center mx-auto px-4 md:px-10">
                    <div className="flex flex-row items-center justify-start">
                        <Link href="/">
                            <img src="LCS.png" alt="club-logo" className="shrink-0 grow-0 w-16 h-20 cursor-pointer select-none" />
                        </Link>
                        <div className="justify-center items-start lg:justify-start lg:flex hidden">
                            {navButtons}
                        </div>
                    </div>
                    <div className="lg:flex hidden justify-end items-center h-full">
                        
                        <div className="flex items-center gap-x-7">
                            
                            {/* <div className="flex items-center">
                                <div className="text-2xl whitespace-nowrap shrink-0">Join Us:</div>
                                <Link href={formURL}>
                                    <Button className="text-lang-orange hover:bg-transparent bg-transparent text-2xl font-bold hover:scale-110 transition duration-300 ease-in-out">
                                        Signup
                                    </Button>
                                </Link>
                            </div> */}
                            
                            {/* <div className="flex items-center">
                                <SocialIcons gap={3} />
                            </div> */}
                        </div>
                    </div>
                    <div className="dropdown lg:hidden">
                        <Menu Buttons={navButtons} />
                    </div>
                </div>
            </nav>
        </div>
    );
}
