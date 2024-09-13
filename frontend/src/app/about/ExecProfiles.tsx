import { useEffect, useState } from "react";
import ExecProfile from "./ExecProfile";
import { useAppSelector } from '../../redux/hooks/hooks';
import { ExecProfileObject, selectProfile } from '../../redux/slices/execProfileSlice';

export default function ExecProfiles() {
    const profiles = useAppSelector(selectProfile);

    const profilesSorted = profiles;
    
    const [profileSections, setProfileSections] = useState<ExecProfileObject[][]>([]);

    let initialValue: number = 3;

    useEffect(() => {
        if (window !== undefined) {
            if (window.innerWidth <= 800)
                initialValue = 2;
        }
    });

    const [cols, setCols] = useState<number>(initialValue);

    const updateSections = () => {
        const sections = [];

        for (let x = 0;  x < profilesSorted.length / cols; x++)
            sections.push(profilesSorted.slice(x * cols, x * cols + cols));

        setProfileSections(sections);
    };

    useEffect(() => {
        if (profileSections.length < 1)
            updateSections();
    });

    useEffect(() => {
        const handleResize = () => {
            if (window !== undefined) 
            {
                if (window.innerWidth <= 800)
                {
                    setCols(2);
                    updateSections();
                }
                else
                {
                    setCols(3);
                    updateSections();
                }
            }
        };

        if (window !== undefined) 
        {
            window.addEventListener('load', handleResize);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (window !== undefined)
                window.removeEventListener('resize', handleResize);
        };
        }, []);
    // max-[800px]:grid max-[800px]:content-center max-[800px]:grid-flow-col max-[800px]:auto-cols-min max-[800px]:justify-items-center 
    return (
        <div className="flex flex-col gap-5">
            {
                profileSections.map(profiles => (
                    <div className={"flex flex-row gap-32 max-[800px]:gap-10 justify-around"} key={profileSections.indexOf(profiles)}>
                        {
                            profiles.map(profile => (
                                <ExecProfile
                                    key={profile.ID}
                                    Position={profile.Position}
                                    ID={profile.ID}
                                    Name={profile.Name}
                                    ImageBuffer= {(profile.ImageBuffer != null) ? `https://api3.langaracs.ca/executives/image/${profile.ImageBuffer}` : "https://via.placeholder.com/200x200"}
                                    Description={profile.Description} />
                            ))
                        }
                    </div>
                    ))
            }
        </div>
    );
}
