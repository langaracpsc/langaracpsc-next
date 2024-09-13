import { ReactNode } from "react";

interface IconLabelProps
{
    Label: string;

    children: ReactNode; 
}

export default function IconLabel({Label, children} : IconLabelProps)
{
    return (<>
            <div className={"flex flex-row w-[20vh] items-center"}>
                {children}
                <div className={"ml-2"}>{Label}</div>
            </div>
    </>);  
}