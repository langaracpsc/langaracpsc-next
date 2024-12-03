import * as Dialog from "@radix-ui/react-dialog";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";


import ProfileModal from "./ProfileModal";
import { Executive } from "./ExecProfiles";


export default function ExecProfile(exec: Executive) {



    /*
    Anderson's thoughts:

    This entire component is black magic.
    */
    return (
        <div className="flex flex-col items-center gap-3 max-w-[200px]">
            <div className="flex flex-col items-center text-center">
                <div className="flex" style={{ justifyContent: "center" }}>
                    <div>
                        <Dialog.Root>
                            <Dialog.Trigger className="flex flex-col items-center">
                                <Image
                                    src={exec.profile_picture ? `https://${exec.profile_picture}` : "/blank_profile.jpg"}
                                    width={200}
                                    height={200}
                                    alt={exec.name}
                                    style={{ borderRadius: "100%", height: 200, width: 200 }}
                                    className="w-[200px] h-[200px] aspect-square rounded-2xl object-cover transition duration-500 ease-in-out hover:scale-105 hover:border-4 border-dashed border-0 border-lang-orange"
                                />

                                <div className="font-bold">{exec.name}</div>
                                <p className="text-gray-300">{exec.roles.join(" & ")}</p>

                                <div className="flex gap-2">
                                    {Object.entries(exec.social_media_links).map(([platform, url]) => (
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
                                    ))}
                                </div>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className="fixed inset-0 bg-black/60">
                                {/* FRANKLY THIS IS AWFUL */}
                                    <Dialog.Content
                                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-fit p-2 md:p-8 overflow-scroll"
                                        style={{ border: "2px solid #F15A22", backgroundColor: "#171717" }}
                                    >
                                        <ProfileModal {...exec} />
                                    </Dialog.Content>
                                </Dialog.Overlay>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </div>
                </div>
            </div>
        </div>
    );
}