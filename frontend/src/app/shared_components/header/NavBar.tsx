"use client";

import Link from "next/link";
import Menu from "../Menu";
import NavButton from "./NavButton";

export default function NavBar() {
    const Pages = new Map<string, string>([
        ["Home", "/"],
        ["About", "/about"],
        ["Events", "/events"]
    ]);

    const navButtons = Array.from(Pages).map(([key, value]) => (
        <NavButton
            Label={key}
            key={key}
            EndPoint={value}
        />
    ));

    return (
        <div>
            <nav className="w-full bg-black fixed top-0 left-0 right-0 z-20">
                <div className="flex flex-row justify-between items-center mx-auto px-4 md:px-10">
                    <div className="flex flex-row items-center justify-start">
                        <Link href="/">
                            <img src="LCS.png" alt="club-logo" className="shrink-0 grow-0 w-16 h-20 cursor-pointer select-none object-cover" />
                        </Link>
                        <div className="justify-center items-start lg:justify-start lg:flex hidden">
                            {navButtons}
                        </div>
                    </div>
                    <div className="lg:flex hidden justify-end items-center h-full">
                        <div className="flex items-center gap-x-7">
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
