"use client";

import {Component} from "react";
import {Global} from "@/app/Global";
import {redirect} from "next/navigation";
import { useAppSelector } from "./hooks/hooks";
import { selectCurrentPage } from "./slices/pageSlice";

interface NavButtonProps 
{
    Label: string;

    EndPoint: string;

    Activated: boolean;

    OnClick: (url: string) => void;
}
    
export default function NavButton({ Label, EndPoint, Activated, OnClick } : NavButtonProps): JSX.Element {
    const color: string = Activated ? "white" : "lang-orange";

    return (
        <>
        <button 
        className="bg-transparent text-3xl font-semibold px-3 h-10 select-none transition duration-300 ease-in-out hover:scale-110 hover:bg-transparent hover:text-lang-orange max-sm:text-lg"
        onClick={() => {OnClick(EndPoint);}}>
            {Label}
        </button>
        </>
    );
}
    
