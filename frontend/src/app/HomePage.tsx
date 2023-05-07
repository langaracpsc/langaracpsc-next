"use client";

import {Component} from "react";
import {Global, Vector2D} from "@/app/Global";
import {ok} from "assert";

let InstanceCount: number = 0;

// Global.SetupWindow();

interface HomePageProps
{
}

interface HomePageState
{
    Dimensions: Vector2D;
    
    FontSize: number; 
}

export class HomePage extends Component<HomePageProps, HomePageState>
{  
    public ID: number; 
    
    protected CSSMap: Map<string, Array<string>>;
    
    public constructor()
    {
        super({});
        
        this.ID = InstanceCount;
        this.CSSMap = new Map<string, Array<string>>();
        
        this.state = {Dimensions: new Vector2D(0,0), FontSize: 7};
    }
    
    public componentDidMount() 
    {
        if (typeof(window) !== "undefined")
        {
            this.setState({Dimensions: new Vector2D(window.innerWidth, window.innerHeight), FontSize: 7});

            window.addEventListener("resize", ()=>{
                this.setState({Dimensions: new Vector2D(window.innerWidth, window.innerHeight), FontSize: 7});
                Global.WindowDimensions = this.state.Dimensions;
                
                console.log(this.state.Dimensions);

                Global.IsShrunkX = (this.state.Dimensions.X < Global.ThresholdDimensions.X);
                Global.IsShrunkY = (this.state.Dimensions.Y < Global.ThresholdDimensions.Y);

                
                
                if (this.state.Dimensions.X < 850)
                    this.setState({Dimensions: new Vector2D(window.innerWidth, window.innerHeight), FontSize: 4});

                else if (this.state.Dimensions.X < 600)
                    this.setState({Dimensions: new Vector2D(window.innerWidth, window.innerHeight), FontSize: 3});
                else
                    this.setState({Dimensions: new Vector2D(window.innerWidth, window.innerHeight), FontSize: 7});
            });
        }
    }

    public componentWillUnmount()
    {
        if (typeof(window) !== "undefined")
        {
            this.setState({Dimensions: new Vector2D(window.innerWidth, window.innerHeight), FontSize: 7});

                window.removeEventListener("resize", ()=>{
                this.setState({Dimensions: new Vector2D(window.innerWidth, window.innerHeight), FontSize: 7});

                Global.WindowDimensions = this.state.Dimensions;
                console.log(this.state.Dimensions);

                Global.IsShrunkX = (this.state.Dimensions.X < Global.ThresholdDimensions.X);
                Global.IsShrunkY = (this.state.Dimensions.Y < Global.ThresholdDimensions.Y);

                if (this.state.Dimensions.X < 850)
                    this.setState({Dimensions: new Vector2D(window.innerWidth, window.innerHeight), FontSize: 4});

                else if (this.state.Dimensions.X < 600)
                    this.setState({Dimensions: new Vector2D(window.innerWidth, window.innerHeight), FontSize: 2});
                else
                    this.setState({Dimensions: new Vector2D(window.innerWidth, window.innerHeight), FontSize: 7});

            });        
        }
    }
    
    public render()
    {
        let css: string = "", flexContainer: string = "flex flex-row ";
        
        flexContainer += (Global.IsShrunkX) ? "justify-center" : " ml-[10%]";
        
        let size: number = 5;
        css = "flex flex-row row-start-2 flex-col row-start-2 row-span-1 text-" + this.state.FontSize + "xl text-white-900 justify-center";        
        console.log(css);
        console.log("Shrunk: " + Global.IsShrunkX + ", " + Global.IsShrunkY);
       
        <div className={"text-3xl"}></div>;
        <div className={"text-2xl"}></div>;
        <div className={"flex-col-reverse"}></div>;
        
        return <div className={"flex flex-row max-[600px]:flex-col-reverse bg-body-gray w-full h-full"}>
            <div className={"grid grid-rows-[20%_60%_20%] max-[600px]:grid-rows-1 w-full h-full"}>
                <div></div>

               <div className={css}>
                   <div className={flexContainer}>   
                       <span className="shrink text-lang-orange">Langara</span> 
                   </div>
                    
                   <div className={flexContainer}>
                       <span className="shrink">Computer</span>
                   </div>
                   
                   <div className = {flexContainer}>
                       <span className="shrink">Science Club.</span>
                   </div>
               </div>
                
                <div></div>
            </div>
            <div className="grid grid-rows-[20%_60%_20%] w-full h-full">
                <div className={"text-4xl"}></div>
                <div className={"flex flex-row row-start-2 row-span-1 text-white-900 justify-center"}>
                    <img className={"h-[100%] w-[100%] max-[600px]:h-[130%] max-[600px]:w-[100%]"} src={"code_snippet.png"}/>
                </div>
                <div className={"text-7xl"}></div>
            </div>
        </div>
    }
}

