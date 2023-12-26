import {Component, useEffect, useState} from "react";
import ExecProfile from "./ExecProfile";
import { exec } from "child_process";

interface ExecProfilesState
{
}

interface ExecProfilesProps
{
}

class Profile
{
    public ID: number;
    
    public Name: string;
    
    public Position: number;
    
    public ImageID: string;
    
    public constructor(id: number, name: string, position: number, imageID: string)
    {
        this.ID = id;
        this.Name = name;
        this.Position = position;
        this.ImageID = imageID;
    }
}

export default function ExecProfiles({} : ExecProfilesProps)
{
    const [profiles, setProfiles] = useState([]);
    
    useEffect(() => {
        
        (async () => {
            const response = await (await fetch(`http://${process.env.APIURL}/Exec/Profile/Active?image=true&complete=true`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "apikey" : `${process.env.APIKEY}`
                }
            })).json();
        
            setProfiles(response["Payload"]);
       })();
    }, [profiles]);
    return (
        <>
            {
            profiles.map((profile: any, index: any) => {
                return <ExecProfile key={index} 
                                    Position={profile.Position} 
                                    ID={profile.ID} 
                                    Name={`${profile.Name.FirstName} ${profile.Name.LastName}`} 
                                    ImageBuffer={`data:image/png;base64, ${profile.Image}`} 
                                    Description={profile.Description}/>;
                })
            }
        </>
    );
}