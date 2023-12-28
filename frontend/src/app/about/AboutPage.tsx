"use client";

import {Component, useEffect} from "react";
import ExecProfiles from "../ExecProfiles";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { AddExecProfile, ExecProfileObject, selectProfile } from "../slices/execProfileSlice";
import { loadProfilesAsync } from "../thunks/ProfileThunks";
import { AppDispatch } from "../stores/store";
import { UnknownAction } from "@reduxjs/toolkit";
import { SetCurrentPage } from "../slices/pageSlice";
interface AboutPageProps
{}

interface AboutPageState
{}

export default function AboutPage({} : AboutPageProps)
{
    const execProfiles = useAppSelector(selectProfile);

    const mainDispatch = useAppDispatch();
   
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
        })();
    });
    
    return (<div className={"flex flex-col gap-5 bg-body-gray grow"}>
                <div className={"flex flex-col  gap-3 ml-5 mr-5 mt-10 items-center"}>
                    <div className={"text-[36px] font-bold flex items-center"}>
                        ABOUT US
                    </div>
                    <div className={"text-lg max-[600px]:text-s font-light items-center"}>
                        The Langara Computer Science Club is a student-led club dedicated to  providing a space for students interested in computer science. We provide a space to learn, create, network, and to have fun! We hold workshops, programming competitions, and other meetups.
                    </div>
                </div>
                <div className={"flex flex-col m-5 items-center"}>
                    <div className={"text-[36px] font-bold flex max-[500px]:items-end max-[600px]: mt-10"}>
                        EXECUTIVES
                    </div>
                    <div className={"text-lg max-[600px]:text-s font-light items-center"}>
                        The Langara Computer Science club is run by a team of dedicated Langara students. We strive to create awesome opportunities and events and to represent the interests of the diverse student body.
                    </div>
                </div>
                <div className={"profileContainer"}>
                    <div className={"flex flex-col ml-5 mr-5 gap-3 items-center"}>
                        <ExecProfiles/> 
                    </div>
                </div>
            </div>
        );      
}
