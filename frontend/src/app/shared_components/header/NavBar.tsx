"use client";

import Link from "next/link";
import Menu from "../Menu";
import NavButton from "./NavButton";

export default function NavBar({ hasHeight = true }) {
    const navButtons = (
        <>
            <NavButton Label="Home" key="Home" EndPoint="/" />
            <NavButton Label="About" key="About" EndPoint="/about" />
            <NavButton Label="Events" key="Events" EndPoint="/events" />
            <NavButton Label="Resources" key="Resources" EndPoint="/resources" />
        </>
    );

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
                        <Menu Buttons={Array.isArray(navButtons) ? navButtons : [navButtons]} />
                    </div>
                </div>
            </nav>
            {hasHeight && <div style={{ height: '80px' }} />}
        </div>
    );
}
