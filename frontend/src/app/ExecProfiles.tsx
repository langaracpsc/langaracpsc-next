import {Component, useEffect, useState} from "react";
import ExecProfile from "./ExecProfile";
import { exec } from "child_process";
import { AppDispatch, RootState } from './stores/store';
import { AddExecProfile, ExecProfileObject, selectProfile } from './slices/execProfileSlice';
import { useAppDispatch, useAppSelector } from './hooks/hooks';

interface ExecProfilesState
{
}

interface ExecProfilesProps
{
}
export default function ExecProfiles({} : ExecProfilesProps)
{
    const profiles = useAppSelector(selectProfile);

    return (
        <>
            {
            [...profiles].sort((a, b) => (a.Position.ID - b.Position.ID)).map((profile: any, index: any) => {
                return <ExecProfile key={index} 
                                    Position={profile.Position.Title} 
                                    ID={profile.ID} 
                                    Name={profile.Name} 
                                    ImageBuffer={`https://${process.env.APIURL}/${profile.ImageBuffer}`} 
                                    Description={profile.Description}/>;
                })
            }
        </>
    );
}