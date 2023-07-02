import {Component} from "react";

interface ExecProfileState
{
    Name: string;
    
    Image: string;
    
    Description: string;
}

interface ExecProfileProps
{
    ID: number;
}

export class ExecProfile extends Component<ExecProfileProps, ExecProfileState>
{   
    public constructor(id: number)
    {
        super({ ID: id });
    }
    
    public async componentDidMount()
    {
        //let reponse = await fetch(this.props.APIUrl);
    } 
}
