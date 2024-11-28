import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import ProfileModal from "./ProfileModal";


interface ExecProfileProps
{
    ID: string;
    
    Name: string;
    
    ImageBuffer: string;
    
    Position: Array<string>;

    Description: string;
}
 
export default function ExecProfile({ID, Name, ImageBuffer, Position, Description} : ExecProfileProps)
{ 
        
    return (
        <div className="flex flex-col items-center gap-3 max-w-[200px]">
            <div className="flex flex-col items-center text-center">
                <div className="flex" style={{ justifyContent: "center"}}>
                    <div>
                        <Dialog.Root>
                            <Dialog.Trigger className='font-bold flex flex-col items-center'>
                                
                                <Image src={ImageBuffer} width={200} height={200} alt={Name} style={{ borderRadius: "100%", height: 200, width: 200 }} className={`w-[${200}px] h-[${200}px] aspect-square rounded-2xl object-cover transition duration-300 ease-in-out hover:scale-105 `}/>
                                <div>{Name}</div>
                                
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className="fixed inset-0 bg-black/60">
                                    <Dialog.Content className="fixed top-1/4 left-1/2 -translate-x-1/2 p-8" style={{ border: "2px solid #F15A22", backgroundColor: "#171717" }}>
                                        <ProfileModal
                                            ID={ID}
                                            Name={Name}
                                            Position={Position.join(" & ")}
                                            ImageBuffer={ImageBuffer}
                                            Description={Description}
                                            imageWidth={200} />
                                    </Dialog.Content>
                                </Dialog.Overlay>
                            </Dialog.Portal>
                        </Dialog.Root>
                        <p>{Position.join(" & ")}</p>
                    </div>
                </div>
            </div>
        </div>);
}
 
