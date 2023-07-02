"use client";

import {Component} from "react";
interface AboutPageProps
{}

interface AboutPageState
{}

export class AboutPage extends Component<AboutPageProps, AboutPageState>
{
    public constructor() {
        super({});
    }

    public componentWillUnmount() {
    }

    public async componentDidMount() {
        let request = await fetch("");
    } 

    public render()
    {
        return (
            <div className={"grid grid-rows-[30%_70%] bg-body-gray"}>
                <div className={"grid grid-rows-2 ml-5"}>
                    <div className={"text-[36px] font-bold flex items-center"}>
                        ABOUT US
                    </div>
                    <div className={"text-[18px] font-light content-start"}>
                        The Langara Computer Science Club is officially back! We are a student-run club dedicated to providing a space for students interested in computer science at Langara to learn, network, help each other out, and have fun! This year, we plan to host workshops, programming competitions, and meetups.                    
                    </div>
                </div>
                <div className={"grid grid-rows-2 ml-5"}>
                    <div className={"text-[36px] font-bold flex max-[400px]:items-end max-[600px]: mt-10"}>
                        OUR EXECS
                    </div>
                    <div className={"text-[18px] font-light content-start"}>
                        We’re a team of enthusiasts who strive to make this club a fun place.
                    </div>
                </div>
            </div>
        );      
    }
}