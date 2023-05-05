"use client";

import {Component} from "react";

interface NavButtonProps 
{
    Label?: string
}

interface NavButtonState
{
}
    
export class NavButton extends Component<NavButtonProps, NavButtonState>
{
    InstanceID: number;
    
    static InstanceCount: number = 0;
    
    constructor() {
        super({});
        
        this.InstanceID =  NavButton.InstanceCount++;
    }
    
    public render()
    {
        return <button className="bg-transparent h-10 text-white font-semibold hover:text-white py-2 px-4 border border-lang-orange hover:border-white rounded select-none mt-7 mr-8">
            {this.props.Label}
        </button>
    }
}
    
