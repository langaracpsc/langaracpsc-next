"use client";

import React, { Component } from "react";
import {NavButton} from "@/app/NavButton";

export class NavBar extends Component<any, any>
{
    CurrentPage: number;
    
    static InstanceCount: number = 0;
    
    constructor() {
        super({})
        this.CurrentPage = 0;
    }
    
    render()
    {
        return <div className="flex flex-row row-start-1 row-span-1">
                <div className="shrink-0 basis-1/4 shrink-none">
                <img src="LCS.png" alt="club-logo" className="ml-5 h-full select-none"/>
            </div>
            <div className="basis-3/4 flex justify-end gap-x-2 mr-8 h-full">
                <NavButton Label={"Home"}></NavButton>
                <NavButton Label={"About"}></NavButton>
                <NavButton Label={"Events"}></NavButton>
                <NavButton Label={"Blog"}></NavButton>
            </div>
        </div>;
    } 
}