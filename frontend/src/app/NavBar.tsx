"use client";

import React, { Component, useContext, useState } from "react";
import NavButton from "./NavButton";
import {Global, Vector2D} from "@/app/Global";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "./hooks/hooks";
import { SetCurrentPage, selectCurrentPage } from "./slices/pageSlice";
import { useSelector } from "react-redux";
import { AppDispatch } from "./stores/store";
import { waitForDebugger } from "inspector";
import { Button } from "@/components/ui/button";
import Conditional from "./Conditional";
import SocialIcons from "./SocialIcons";
import Menu from "./Menu";


interface NavBarProps
{
    Pages: Map<string, string>;  
}

interface NavBarState
{
    ButtonGap?: number;
    TopMargin?: number;
}

export default function NavBar({ Pages } : NavBarProps) 
{
    <div className={"gap-x-2"}></div>;
    <div className={"gap-x-3"}></div>;
    <div className={"gap-x-5"}></div>;
    <div className={"gap-x-7"}></div>;
    <div className={"mt-5"}></div>;
    <div className={"mt-4"}></div>;
    <div className={"mt-3"}></div>;

    const router = useRouter();
    const mainDispatch = useAppDispatch();
    const currentPage = useSelector(selectCurrentPage);
    const [page, setPage] = useState(currentPage);

    const formURL = "https://forms.gle/gPdqMB5ijafDMRAY8";

    const onClickHandler = (url: string) => {
        router.push(url);    
        mainDispatch(SetCurrentPage(url));
        setPage(currentPage);
    };

    const navButtons: Array<JSX.Element> = new Array<JSX.Element>();
    
    Pages.forEach((value, key, pageMap) => {
        navButtons.push(<NavButton Label={key} key={key} Activated={currentPage == value} EndPoint={value} OnClick={onClickHandler}/>);
    }); 

    return (
        <div>
            <nav className="navbar w-full bg-black fixed top-0 left-0 right-0 z-20">
                <div className="flex flex-row justify-between items-center mx-auto px-4 md:px-10">
                    <div className="flex flex-row items-center justify-start">
                        <img src="LCS.png" alt="club-logo" className="shrink-0 grow-0 w-32 h-auto select-none" onClick={() => router.push("/")}/>
                        <div className="justify-center items-start lg:justify-start lg:flex hidden">
                            {navButtons}
                        </div>
                    </div>
                    <div className="register_socialicons lg:flex hidden justify-end items-center h-full">
                        <div className="flex items-center gap-x-7">
                            <div className="flex items-center">
                                <div className="text-2xl whitespace-nowrap shrink-0">Join Us:</div>
                                <Button onClick={() => router.push(formURL)} className="text-lang-orange hover:bg-transparent bg-transparent text-2xl font-bold hover:scale-110 transition duration-300 ease-in-out">Register</Button>
                            </div>
                            <div className="flex items-center">
                                <SocialIcons gap={3} />
                            </div>
                        </div>
                    </div>
                    <div className="dropdown lg:hidden">
                        <Menu Buttons={navButtons}/>
                    </div>

                </div>
            </nav>
        </div>
    );
   
}
