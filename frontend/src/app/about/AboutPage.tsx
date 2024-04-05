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

                ((await promise) as unknown as any[]).forEach((element) => {
                    mainDispatch(AddExecProfile({ ...element, Position: { ID: element.Position.ID, Title: element.Position.Name} } as ExecProfileObject)); 
                });
            }

            setLoading(false);
        })();
    });
    
    return (
            <div className={"flex flex-col gap-5 bg-body-gray grow"}>
                <div className={"flex flex-col  gap-3 ml-5 mr-5 mt-10"}>
                    <div className={"text-[36px] font-semibold text-start"}>
                        About us
                    </div>
                    <div className={"text-lg max-[600px]:text-s font-light items-center"}>
                        {"The Langara Computer Science Club is a student-led club dedicated to providing a space for students interested in computer science. We provide a space to learn, create, network, and to have fun! We hold workshops, programming competitions, and other meetups."}
                    </div>
                </div>
                <div className={"flex flex-col m-5 items-center"}>
                    <div className={"text-[36px] font-semibold flex max-[500px]:items-end max-[600px]: mt-10"}>
                        Our Executives
                    </div>
                <div className={"text-lg max-[600px]:text-s font-light items-center text-center"}>
                    {"The Langara Computer Science club is run by a team of dedicated Langara students. We strive to create awesome opportunities and events and to represent the interests of the diverse student body."}
                </div>
                </div>
                <div className={"profileContainer mb-3"}>
                    <div className={"flex flex-col max-[600px]:mx-0 gap-3 items-center"}>
                        <Conditional Condition={loading}>Loading</Conditional>
                        <ExecProfiles/> 
                    </div>
                </div>
            </div>
        );      
}
