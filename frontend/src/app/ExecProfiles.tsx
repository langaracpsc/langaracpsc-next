import {Component} from "react";
import {ExecProfile} from "@/app/ExecProfile";

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

export class ExecProfiles extends Component<ExecProfilesProps, ExecProfilesState>
{
    ExecProfiles: Profile[];
        
    public async componentDidMount() {
        let request = await fetch("http://localhost:5031/Exec/Profile/Active", {
            headers: {
                "apikey" : ""
            }
        });
        
        let profileObjs: object[] = (await request.json())["Payload"];
        
        for (let x = 0; x < profileObjs.length; x++) 
        {
            let profile: Profile = profileObjs[x] as Profile;

            this.ExecProfiles.push(new Profile(profile.ID, profile.Name, profile.Position, profile.ImageID));
        }
    } 
    
    public render()
    {
        return this.ExecProfiles.map((profile, index, array)=> {
                console.log("Rendering" + profile);
                return <ExecProfile key={index} Position={profile.Position} ID={profile.ID} Name={profile.Name} ImageID={profile.ImageID}/>;
            }
        );
    }
    
    public constructor(props: ExecProfilesProps) {
        super(props);
        this.ExecProfiles = new Array<Profile>();
    }
}