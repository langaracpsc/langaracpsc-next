"use client";

import {Component} from "react";
import ExecProfiles from "../ExecProfiles";
interface AboutPageProps
{}

interface AboutPageState
{}

export function AboutPage({} : AboutPageProps)
{
    return (<div className={"flex flex-col gap-5 bg-body-gray"}>
                <div className={"flex flex-col gap-3 ml-5 items-center"}>
                    <div className={"text-[36px] mt-0 font-bold flex items-center"}>
                        ABOUT US
                    </div>
                    <div className={"text-[18px] font-light content-start"}>
                        The Langara Computer Science Club is officially back! We are a student-run club dedicated to providing a space for students interested in computer science at Langara to learn, network, help each other out, and have fun! This year, we plan to host workshops, programming competitions, and meetups.                    
                    </div>
                </div>
                <div className={"flex flex-col  ml-5 items-center"}>
                    <div className={"text-[36px] font-bold flex max-[500px]:items-end max-[600px]: mt-10"}>
                        OUR EXECS
                    </div>
                    <div className={"text-[18px] font-light content-start"}>
                        We’re a team of enthusiasts who strive to make this club a fun place.
                    </div>
                </div>
                <div className={"profileContainer"}>
                    <div className={"flex flex-col ml-5 gap-3 items-center"}>
                        <ExecProfiles/> 
                    </div>
                </div>
            </div>
        );      
}