import { ReactNode } from "react";

interface IconLabelProps
{
    Label: string;

    children: ReactNode; 
}

export default function IconLabel({Label, children} : IconLabelProps)
{
    return (<>
            <div className={"flex flex-row"}>
                {children}
                <div className={"self-center ml-2"}>{Label}</div>
            </div>
    </>);  
}
