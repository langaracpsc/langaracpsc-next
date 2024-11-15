"use client";

import { UnknownAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
// import Conditional from "../shared_components/Conditional";
import ExecProfiles from "./ExecProfiles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { AddExecProfile, ExecProfileObject, selectProfile } from "../../redux/slices/execProfileSlice";
// import { SetCurrentPage } from "../../redux/slices/pageSlice";
import { AppDispatch } from "../../redux/stores/store";
import { loadProfilesAsync } from "../../redux/thunks/ProfileThunks";

interface AboutPageProps
{}

export default function AboutPage({} : AboutPageProps)
{
    // const execProfiles = useAppSelector(selectProfile);

    // const mainDispatch = useAppDispatch();
   
    // const [loading, setLoading] = useState(true); 
    
    // mainDispatch(SetCurrentPage("/about"));

    // fetch the profiles if not done already 
    // useEffect(() => {
    //     (async () => {
    //         if (execProfiles.length < 1)
    //         {
    //             const promise: UnknownAction = mainDispatch(loadProfilesAsync() as AppDispatch);

    //             ((await promise) as unknown as any[]).forEach((element) => {
    //                 mainDispatch(AddExecProfile({ ...element} as ExecProfileObject)); 
    //             });
    //         }

    //         setLoading(false);
    //     })();
    // }, [execProfiles.length]);
    
    return (
            <div className={"flex flex-col gap-5 bg-body-gray grow pl-5"}>

                <div className={"flex flex-col  gap-3 mt-10"}>
                    <div className={"text-[36px] font-semibold text-start"}>
                        About us:
                    </div>
                    <div className={"text-lg max-[600px]:text-s font-light items-center"}>
                        <p>{"The Langara Computer Science Club is a student-led club dedicated to providing a space for students interested in computer science. We provide a space to learn, create, network, and to have fun! We hold workshops, programming competitions, and other meetups."}</p>
                        <br></br>
                        <p>
                            {"The Langara Computer Science club is run by a team of dedicated Langara students. We strive to create awesome opportunities and events and to represent the interests of the diverse student body."}
                        </p>
                    </div>
                    
                </div>

                <br></br>
                

                <div className={"flex flex-col profileContainer mb-3 items-center gap-5"}>
                    <h3 className="text-3xl font-semibold">Our Executives:</h3>

                    <div className={"flex flex-col max-[600px]:mx-0 gap-3 items-center"}>
                        {/* TODO: don't assume API always works. */}
                        {/* <Conditional Condition={loading}>Loading</Conditional> */}
                        <ExecProfiles/> 
                    </div>

                </div>
            </div>
        );      
}
