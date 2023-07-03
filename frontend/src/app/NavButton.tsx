"use client";

import {Component} from "react";
import {Global} from "@/app/Global";
import {redirect} from "next/navigation";

interface NavButtonProps 
{
    Label: string,
    Endpoint: string
}

interface NavButtonState
{
    Activated: boolean;
}
    
export class NavButton extends Component<NavButtonProps, NavButtonState>
{
    InstanceID: number;
    
    static InstanceCount: number = 0;
    
    constructor(label: string, endpoint: string) 
    {
        super({Label: label, Endpoint: endpoint});
        
        this.state = { Activated: false };
        
        this.InstanceID =  NavButton.InstanceCount++;
    }
   
    public OnClick()
    {
        // this.setState({Activated: true});
        redirect(this.props.Endpoint.toString());
    }
    
    public render()
    {
        return <button className={"bg-transparent max-[600px]:text-[10px] max-[600px]:h-8 max-[600px]:w-15 h-10 text-white font-semibold hover:text-white py-2 px-4 border border-lang-orange hover:border-white rounded select-none"}>
            {this.props.Label}
        </button>
    }
}
    
