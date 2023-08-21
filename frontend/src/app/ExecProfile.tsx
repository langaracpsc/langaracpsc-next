import {Component} from "react";
import Image from "next/image";

interface ExecProfileState
{
    ImageBuffer: string;
}

interface ExecProfileProps
{
    ID: number;
    
    Name: string;
    
    ImageID: string;
    
    Position: number;
}

export class ExecProfile extends Component<ExecProfileProps, ExecProfileState>
{   
    public constructor(props: ExecProfileProps)
    {
        super(props);
    }
    
    public async componentDidMount()
    {
        this.setState({ImageBuffer: (await (await fetch("http://localhost:5031/Exec/Image/" + this.props.ImageID, 
                                                  {headers: { apikey: "eerSS5qfGUi0H+XQr702DYouu7E+55RWSZ8mLp+iu4QH6fZdqH1NFsaVgFx/CvUpRXioIiq8B9NomnSD2ClFUA==" }})).json())["Payload"]});
        console.log(this.state.ImageBuffer);
    }
    
    public render()
    {
        return (
            <div className={"flex items-start"}>
                <div className="box-border bg-[#262626] h-32 w-[80vh] p-4 rounded">
                   <div className={"grid grid-col-[40%_60%]"}>
                       {/* <div className={"relative border-box bg-lang-orange h-[10vh] w-20 rounded"}>*/}
                       {/*     <Image src={this.state.ImageBuffer} width={20} height={20} alt={""}/>*/}
                       {/* </div>*/}
                       {/*<div>*/}
                       {/*    {this.props.Name}*/}
                       {/*    {this.props.Position}*/}
                       {/*</div>*/}
                   </div>
                </div>
            </div>
        );
    }
}

 
