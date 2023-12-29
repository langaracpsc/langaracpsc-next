import { CalendarEvent } from "../slices/eventSlice";
import { AppDispatch, RootState } from "../stores/store";

export const fetchEventsAsync = () => async (state: RootState, dispatch: AppDispatch) => {
    const response = await (await (fetch(`http://${process.env.APIURL}/Event/ListAll`, 
                                            {
                                                method: "GET",
                                                headers: {
                                                    "apikey": `${process.env.APIKEY}`
                                                } 
                                            }))).json();

    console.log(response);

    return response["Payload"].map((item: any) => { 
        return {
            Title: item.Title,
            Start: new Date(item.Start),
            End: new Date(item.End),
            Description: item.Description,
            Location: item.Location,
            Image: "https://langaracpsc.github.io/assets/social.png" 
        } as CalendarEvent;
     });
};  