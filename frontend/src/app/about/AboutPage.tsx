"use client";

import {Component} from "react";
import ExecProfiles from "../ExecProfiles";
interface AboutPageProps
{}

interface AboutPageState
{}

export function AboutPage({} : AboutPageProps)
{
    return (<div className={"grid grid-rows-3 bg-body-gray"}>
                <div className={"grid grid-rows-[40%_50%] max-[500px]:grid-rows-[30%_50%] ml-5"}>
                    <div className={"text-[36px] font-bold flex items-center"}>
                        ABOUT US
                    </div>
                    <div className={"text-[18px] font-light content-start"}>
                        The Langara Computer Science Club is officially back! We are a student-run club dedicated to providing a space for students interested in computer science at Langara to learn, network, help each other out, and have fun! This year, we plan to host workshops, programming competitions, and meetups.                    
                    </div>
                </div>
                <div className={"grid grid-rows-2 max-[500px]:grid-rows-[55%_10%] max-[350px]:grid-rows-[70%_10%]  ml-5"}>
                    <div className={"text-[36px] font-bold flex max-[500px]:items-end max-[600px]: mt-10"}>
                        OUR EXECS
                    </div>
                    <div className={"text-[18px] font-light content-start"}>
                        We’re a team of enthusiasts who strive to make this club a fun place.
                    </div>
                </div>
                <div className={"profileContainer"}>
                    <div className={"flex flex-col ml-5 gap-3"}>
                        <ExecProfiles/> 
                    </div>
                </div>
            </div>
        );      
}