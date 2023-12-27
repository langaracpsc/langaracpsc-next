"use client";

import {Component, useEffect} from "react";
import {Global, Vector2D} from "@/app/Global";
import {SocialIcon} from "react-social-icons";
import {SocialIcons} from "@/app/SocialIcons";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { AddExecProfile, selectProfile } from "./slices/execProfileSlice";
import { AppDispatch, RootState } from "./stores/store";

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

export default function HomePage({} : HomePageProps) 
{
    const execProfiles = useAppSelector(selectProfile);

    const mainDispatch = useAppDispatch();

    const loadProfilesAsync = () => async (state: RootState, dispatch: AppDispatch) => {
        const response = (await (await fetch(`http://${process.env.APIURL}/Exec/Profile/Active?complete=true&image=true`, {
            method: "GET",
            headers: {
                "apikey": `${process.env.APIKEY}`
            }
        })).json())["Payload"];
       
        console.log(response);

        (response as any[]).forEach(element => {
            mainDispatch(AddExecProfile({
             ID: element.ID,
                Name: `${element.Name.FirstName} ${element.Name.LastName}`,
                ImageBuffer: element.Image,
                Position: element.Position,
                Description: element.Description
            }));        
        });
    };

    useEffect(() => {
        if (execProfiles.length < 1)
            mainDispatch(loadProfilesAsync() as AppDispatch);  


        console.log(`size after dispatch: ${execProfiles.length}`);
    });


    let css: string = "", flexContainer: string = "flex flex-row max-[600px]:justify-center max-[600px]:mx-0 ml-[10%]";
    
    let size: number = 5;
    
    <div className={"text-3xl"}></div>;
    <div className={"text-2xl"}></div>;
    <div className={"flex-col-reverse"}></div>;
        
    return <div className={"flex flex-row max-[600px]:flex-col-reverse bg-body-gray w-full h-full"}>
        <div className={"grid grid-rows-[15%_60%_20%] max-[600px]:grid-rows-[5%_60%_20%] max-[600px]:grid-rows-1 w-full h-full gap-3"}>
            <div></div>

            <div className={"flex flex-row row-start-2 flex-col row-span-1 text-7xl max-[850px]:text-4xl max-[600px]:text-3xl text-white-900 justify-center"}>
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
            
            <div className={"flex flex-row ml-[10%] gap-3 max-[600px]:mx-0 max-[600px]:justify-center"}>
                    <SocialIcons/>
            </div>
        </div>
        <div className="grid grid-rows-[20%_60%_20%] max-[600px]:grid-rows-[15%_60%_10%] max-[600px]:grid-rows-1 w-full h-full">
            {/* {(this.state.Dimensions.X < 600) ? null : <div className={"text-4xl max-[600px]:invisible"}></div>} */}
            
            <div className={"flex flex-row row-start-2 row-span-1 text-white-900 justify-center max-[600px]:mt-0"}>
                <img className={"max-[600px]:h-[130%] max-[600px]:w-[100%] shrink-0"} src={"code_snippet.png"}/>
            </div>
            {/* {(this.state.Dimensions.X < 600) ? null : <div className={"text-7xl max-[600px]:invisible"}></div>} */}
        </div>
    </div>
}
 
