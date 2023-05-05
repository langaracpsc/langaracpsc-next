"use client";

import {Component} from "react";

let InstanceCount: number = 0;

export class HomePage extends Component<any, any>
{  
    public ID: number; 
    
    public constructor()
    {
        super({});
        
        this.ID = InstanceCount;
    }
    
    public render()
    {
        return <div className="grid grid-cols-2 bg-body-gray">
            <div className="grid grid-rows-[20%_60%_20%]">
                <div></div>
               <div className="flex flex-row row-start-2 flex-col row-start-2 row-span-1 text-7xl text-white-900 justify-center ml-[10vh]">
                   <span className="text-lang-orange">Langara</span> 
                   <span>Computer</span>
                   <span>Science Club.</span>
               </div>
                <div></div>
            </div>
            <div className="grid grid-rows-[20%_60%_20%]">
                <div></div>
                <div className="flex flex-row row-start-2 flex-col row-start-2 row-span-1 text-7xl text-white-900 justify-center">
                    <img src={"code_snippet.png"}/>
                </div>
                <div></div>
            </div>
        </div>
    }
}
