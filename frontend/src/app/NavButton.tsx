"use client";

import {Component} from "react";
import {Global} from "@/app/Global";
import {redirect} from "next/navigation";

interface NavButtonProps 
{
    Label: string;

    EndPoint: string;

    Activated: boolean;

    OnClick: (url: string) => void;
}
    
export default function NavButton({ Label, EndPoint, Activated, OnClick } : NavButtonProps) 
{
    return <button 
        className={`bg-transparent max-[600px]:text-[10px] max-[600px]:h-8 max-[600px]:w-15 h-10 text-white font-semibold hover:text-white py-2 px-4 border border-${(Activated) ? "white" : "langara-orange"} hover:border-white rounded select-none`}
        onClick={() => {OnClick(EndPoint)}}>
        {Label}
    </button>
}
    
