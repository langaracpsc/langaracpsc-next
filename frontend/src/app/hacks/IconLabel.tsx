import Image from "next/image";

export function IconLabel({iconSrc, label, height, width, fontSize})
{
    
    return <div className={"grid grid-cols-2"}>
        <Image src={iconSrc} alt={"Image"} height={height as number} width={width as number} className={"self-center justify-self-end"}></Image>
        <span className={"text-lg text-white self-center ml-2"}>{label}</span>
    </div>; 
}