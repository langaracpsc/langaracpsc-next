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
import { Button } from "@nextui-org/react";
import Conditional from "./Conditional";

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

    const onClickHandler  = (url: string) => {
        router.push(url);    
        mainDispatch(SetCurrentPage(url));
        setPage(currentPage);
    };

    const navButtons: Array<JSX.Element> = new Array<JSX.Element>();
    
    Pages.forEach((value, key, pageMap) => {
        navButtons.push(<NavButton Label={key} key={key} Activated={currentPage == value} EndPoint={value} OnClick={onClickHandler}/>);
    }); 

    return (
        <div className="flex flex-row max-[600px]:grid max-[600px]:grid-rows-2  row-start-1 row-span-1 max-[600px]:justify-center">
            <div className="min-[600px]:basis-1/4 max-[600px]:row-start-1 flex-row shrink-0 grow-0 max-[600px]:justify-center flex items-center">
                <img src="LCS.png" alt="club-logo" className="ml-5 flex-start-2 max-[600px]:ml-0 shrink-0 grow-0 h-full select-none" onClick={() => router.push("/")}/>
            </div>
            <div className="min-[600px]:basis-3/4 max-[600px]:grid max-[600px]:grid-template-cols[5%_90%_5%] min-[600px]:flex min-[600px]:justify-end min-[600px]:mr-8 h-full">
                <div></div>
                <div className={"col-start-2"}>
                    <div className={"nav_button_container flex max-[500px]:gap-x-3 gap-x-7 mt-5 max-[500px]:mt-6"}>
                        {navButtons}
                        <Button onClick={() => router.push(formURL) } className="bg-lang-orange rounded text-white max-[600px]:text-[10px] max-[600px]:h-8 max-[600px]:w-15 h-10 font-bold">Register</Button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}


