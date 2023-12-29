import { ReactNode } from "react";

interface ConditionalProps 
{
    Condition: boolean;

    children: ReactNode;
}

export default function Conditional({Condition, children} : ConditionalProps): JSX.Element 
{
    if (Condition)
        return (<>{children}</>);
    
    return <></>;
}  
