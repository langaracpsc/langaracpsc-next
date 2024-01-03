import ExecProfile from "../ExecProfile";
import { AppDispatch, RootState } from "../stores/store";
import { ExecProfileObject } from "../slices/execProfileSlice";

export const loadProfilesAsync = () => async (state: RootState, dispatch: AppDispatch): Promise<ExecProfileObject[]> => {
    const response = (await (await fetch(`https://${process.env.APIURL}/Exec/Profile/Active?image=true&complete=true`, {
        method: "GET",
        headers: {
            "apikey": `${process.env.APIKEY}`
        }
    })).json())["Payload"];
    
    return response.map((element: any) => {
            const execProfile: ExecProfileObject = {
                ID: element.ID,
                Name: `${element.Name.FirstName} ${element.Name.LastName}`,
                ImageBuffer: element.Image,
                Position: element.Position,
                Description: element.Description
            };

            return execProfile;
        });        
};