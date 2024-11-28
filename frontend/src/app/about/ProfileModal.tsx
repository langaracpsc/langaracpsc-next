import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ProfileModalProps {
    ID: String;

    Name: string;

    Position: string;

    Description: string;

    ImageBuffer: string;

    imageWidth: number;
}

export default function ProfileModal({Name, Position, ImageBuffer, Description, imageWidth}: ProfileModalProps) {
    return (
        // TODO: FIX modal description text doesn't scroll
        <Dialog.Content className="relative max-w-[90vw] md:max-w-[80vw] max-h-[90vh] md:max-h-[70vh] overflow-y-scroll p-5">
            <VisuallyHidden>
                <DialogTitle>{Name}</DialogTitle>
            </VisuallyHidden>
            
            <div className="flex flex-col md:flex-row gap-5">
                {/* Profile Image and Info Section */}
                <div className="flex flex-col items-center gap-3">
                    <Image 
                        src={ImageBuffer} 
                        width={imageWidth} 
                        height={imageWidth} 
                        alt={`Profile photo of ${Name}`}
                        className="rounded-full aspect-square object-cover w-[20vw] h-[20vw] min-w-[200px] min-h-[200px]"
                    />
                    <div className="text-center">
                        <h2 className="font-bold text-xl">{Name}</h2>
                        <p className="text-gray-600">{Position}</p>
                    </div>
                </div> 

                {/* Description Section */}
                <div className="flex flex-col flex-1 w-[30vw]">
                    <h3 className="font-bold text-lg mb-2  min-w-36">Description</h3>
                    <p className="text-white">{Description}</p>
                </div>

                {/* Close Button */}
                {/* <Dialog.Close aria-label="Close profile modal" className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    Close
                </Dialog.Close> */}
            </div>
        </Dialog.Content>
    );
}