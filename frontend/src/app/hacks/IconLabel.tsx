import Image from "next/image";

export function IconLabel({iconSrc, label, height, width}: {iconSrc: string, label: string, height: number, width: number})
{
    return <div className={"grid grid-cols-2"}>
        <Image src={iconSrc} alt={"Image"} height={height} width={width} className={"self-center justify-self-end"}></Image>
        <span className={"text-lg max-[850px]:text-[10px] max-[850px]:leading-3 whitespace-pre text-white self-center ml-2"}>{label}</span>
    </div>; 
}