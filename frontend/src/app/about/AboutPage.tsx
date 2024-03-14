"use client";

import {Component, useEffect, useState} from "react";
import ExecProfiles from "../ExecProfiles";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { AddExecProfile, ExecProfileObject, selectProfile } from "../slices/execProfileSlice";
import { loadProfilesAsync } from "../thunks/ProfileThunks";
import { AppDispatch } from "../stores/store";
import { UnknownAction } from "@reduxjs/toolkit";
import { SetCurrentPage } from "../slices/pageSlice";
import Conditional from "../Conditional";
interface AboutPageProps
{}

export default function AboutPage({} : AboutPageProps)
{
    const execProfiles = useAppSelector(selectProfile);

    const mainDispatch = useAppDispatch();
   
    const [loading, setLoading] = useState(true); 
    
    mainDispatch(SetCurrentPage("/about"));

    // fetch the profiles if not done already 
    useEffect(() => {
        (async () => {
            if (execProfiles.length < 1)
            {
                const promise: UnknownAction = mainDispatch(loadProfilesAsync() as AppDispatch);

                ((await promise) as unknown as ExecProfileObject[]).forEach((element: ExecProfileObject) => {
                    mainDispatch(AddExecProfile(element)); 
                });
            }

            setLoading(false);
        })();
    });
    
    return (<div className={"flex flex-col gap-5 bg-body-gray grow"}>
                <div className={"flex flex-col  gap-3 ml-5 mr-5 mt-10 items-center"}>
                    <div className={"text-[36px] font-bold flex items-center"}>
                        ABOUT US
                    </div>
                    <div className={"text-lg max-[600px]:text-s font-light items-center"}>
                        {"Welcome to the Langara Computer Science Club! We're all about diving deep into the world of computer science, fostering a community of enthusiastic learners, creators, and problem-solvers. Join us for exciting workshops, thrilling programming competitions, and engaging meetups where you can sharpen your skills, expand your network, and, most importantly, have a blast! Whether you're a seasoned coder or just starting out, there's something for everyone here. Come be a part of our dynamic community and let's embark on this incredible journey together!"}
                    </div>
                </div>
                <div className={"flex flex-col m-5 items-center"}>
                    <div className={"text-[36px] font-bold flex max-[500px]:items-end max-[600px]: mt-10"}>
                        EXECUTIVES
                    </div>
                <div className={"text-lg max-[600px]:text-s font-light items-center"}>
                    {"Run by a team of dedicated Langara students, we're all about crafting exciting opportunities and events that cater to the diverse interests of our student body."}
                </div>
                </div>
                <div className={"profileContainer mb-10"}>
                    <div className={"flex flex-col ml-5 mr-5 max-[600px]:mx-0 gap-3 items-center"}>
                        <Conditional Condition={loading}>Loading</Conditional>
                        <ExecProfiles/> 
                    </div>
                </div>
            </div>
        );      
}
