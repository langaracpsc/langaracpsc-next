import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SocialIcon } from "react-social-icons";

import { Executive } from "./ExecProfiles";

export default function ProfileModal({ id, roles, name, pronouns, profile_picture, current_status, bio, first_term, last_term, social_media_links }: Executive) {
    return (
        // TODO: FIX modal description text doesn't scroll
        <Dialog.Content className="relative max-w-full md:max-w-[80vw] max-h-[90vh] md:max-h-[70vh] overflow-y-scroll p-2 md:p-5">
            <VisuallyHidden>
                <DialogTitle>{name}</DialogTitle>
            </VisuallyHidden>

            <div className="flex flex-col md:flex-row gap-5">
                {/* Profile Image and Info Section */}
                <div className="flex flex-col items-center gap-3 w-fit">
                    <Image
                        src={profile_picture ? `https://${profile_picture}` : '/blank_profile.jpg'}
                        width={100}
                        height={100}
                        alt={`Profile photo of ${name}`}
                        className="rounded-full aspect-square object-cover w-[100px] h-[100px] md:w-[200px] md:h-[200px] border-4 border-white"
                    />
                    <div className="text-center">
                        <h2 className="font-bold text-xl">{name}</h2>
                        <p className="text-gray-200">{roles.join(" & ")}</p>
                    </div>
                    {/* These links aren't clickable for some reason... what the hell is this component?? */}
                    {/* {Object.entries(social_media_links).map(([platform, url]) => (
                        <SocialIcon
                            key={url}
                            url={url}
                            fgColor="white"
                            bgColor="#171717"
                            style={{ height: 40, width: 40 }}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 transform hover:scale-125"
                        />
                    ))} */}
                </div>


                {/* Description Section */}
                <div className="flex flex-col flex-1 md:w-[30vw]">
                    <h3 className="font-bold text-lg mb-2 min-w-36">About:</h3>
                    <p className="text-white">{bio ? bio : "Nothing here. :("}</p>
                </div>

                {/* Close Button */}
                {/* <Dialog.Close aria-label="Close profile modal" className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    Close
                </Dialog.Close> */}
            </div>
        </Dialog.Content>
    );
}