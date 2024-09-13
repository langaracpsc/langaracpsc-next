import ExecProfile from "../../app/about/ExecProfile";
import { AppDispatch, RootState } from "../stores/store";
import { ExecProfileObject } from "../slices/execProfileSlice";

export const loadProfilesAsync = () => async (state: RootState, dispatch: AppDispatch): Promise<ExecProfileObject[]> => {
    const response = (await (await fetch(`https://api3.langaracs.ca/executives/active`, {
        method: "GET",
        headers: {
            "apikey": `${process.env.APIKEY}`
        }
    })).json());

    // console.log(response)
    
    return response.map((element: any) => {
            const execProfile: ExecProfileObject = {
                ID: element.student_id,
                Name: element.name,
                ImageBuffer: element.profile_picture,
                Position: element.roles,
                Description: element.bio
            };

            return execProfile;
        });        
};
