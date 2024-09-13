"use client";

import { UnknownAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import Decision from "./EventsOnHomePage/Decision";
import AboutUsSection from "./aboutus";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { AddExecProfile, ExecProfileObject, selectProfile } from "./slices/execProfileSlice";
import { SetCurrentPage } from "./slices/pageSlice";
import { AppDispatch } from "./stores/store";
import { loadProfilesAsync } from "./thunks/ProfileThunks";


let InstanceCount: number = 0;

interface HomePageProps {
}

export default function HomePage({ }: HomePageProps) {
    const execProfiles = useAppSelector(selectProfile);
    const mainDispatch = useAppDispatch();

    mainDispatch(SetCurrentPage("/"));

    useEffect(() => {
        (async () => {
            if (execProfiles.length < 1) {
                const promise: UnknownAction = (mainDispatch(loadProfilesAsync() as AppDispatch));

                ((await promise) as unknown as ExecProfileObject[]).forEach((element: ExecProfileObject) => {
                    mainDispatch(AddExecProfile(element));
                });
            }
        })();
    });

    let css: string = "", flexContainer: string = "flex flex-row max-[600px]:justify-center max-[600px]:mx-0 ml-[10%]";
    let size: number = 5;

    <div className={"text-3xl"}></div>;
    <div className={"text-2xl"}></div>;
    <div className={"flex-col-reverse"}></div>;

    return (
        <>
            <div className={"flex flex-row max-[600px]:flex-col bg-body-gray w-full h-full"}>
                <div className={"grid grid-rows-[15%_60%_20%] max-[600px]:grid-rows-1 w-full h-full gap-3 max-[600px]: gap-1 max-[900px]:basis-1/3"}>

                    <div className={"flex row-start-2 flex-col row-span-1 text-7xl max-[900px]:text-5xl max-[600px]:text-3xl text-white-900 justify-center"}>
                        <div className={flexContainer}>
                            <span className="shrink text-lang-orange">Langara</span>
                        </div>

                        <div className={flexContainer}>
                            <span className="shrink">Computer</span>
                        </div>

                        <div className={flexContainer}>
                            <span className="shrink">Science Club</span>
                        </div>

                    </div>
                </div>

                <div className="grid grid-rows-[20%_60%_20%] max-[600px]:grid-rows-1 w-full h-full">
                    <div className="flex flex-row row-start-2 row-span-1 justify-center max-[600px]:mt-0">

                        <img className="max-[600px]:h-auto max-[600px]:w-[100%] shrink-0" src="code_snippet.png" alt="Picture of code that asks the viewer to join the club" />

                    </div>
                </div>


            </div>
            <Decision />

            <AboutUsSection />
        </>
    );
}

