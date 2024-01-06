import { CalendarEvent } from "../slices/eventSlice";
import { AppDispatch, RootState } from "../stores/store";

export const fetchEventsAsync = () => async (state: RootState, dispatch: AppDispatch): Promise<CalendarEvent[]> => {
    const response = await (await (fetch(`https://${process.env.APIURL}/Event/ListAll`, 
                                            {
                                                method: "GET",
                                                headers: {
                                                    "apikey": `${process.env.APIKEY}`
                                                } 
                                            }))).json();

    return response["Payload"].map((item: any) => { 
        return {
            Title: item.Title,
            Start: new Date(item.Start),
            End: new Date(item.End),
            Description: item.Description,
            Location: item.Location,
            Image: (item.Image != null) ? `${process.env.APIURL}/Images/${item.Image}` : "https://via.placeholder.com/800x800",
            Link: { Google: item.Link.Google, Apple: item.Link.Apple }
        } as CalendarEvent;
     });
}; 
