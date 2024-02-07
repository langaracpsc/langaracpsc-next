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

    <span className="border-lang-orange"></span>;
    return (
        <>
        <button 
            className={`bg-transparent max-[600px]:text-[10px] max-[600px]:h-8 max-[600px]:w-15 h-10 text-white font-semibold hover:text-white px-4 border border-${color} hover:border-${color} rounded select-none transition duration-300 transform hover:scale-110`}
            onClick={() => {OnClick(EndPoint);}}>
            {Label}
        </button>
        </>
    );
}
    
