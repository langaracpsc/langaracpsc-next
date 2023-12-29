import { CalendarEvent } from "../slices/eventSlice";
import { AppDispatch, RootState } from "../stores/store";

export const fetchEventsAsync = () => async (state: RootState, dispatch: AppDispatch) => {
    const response = await (await (fetch(`https://${process.env.CALENDAR_BASE_URL}/calendars/${process.env.CALENDER_ID}&key=${process.env.CALENDAR_API_KEY}`, 
                                            {
                                                method: "GET",
                                                headers: {
                                                    "Authorization": `Bearer ${process.env.CALENDAR_OAUTH_TOKEN}`
                                                } 
                                            }))).json();

    console.log(response);

    return response["items"].map((item: any) => { 
        return {
            Title: item.summary,
            Start: new Date(item.start.dateTime),
            End: new Date(item.end.dateTime),
            Description: item.summary,
            Location: "T001",
            Image: "https://langaracpsc.github.io/assets/social.png" 
        } as CalendarEvent;
     });
};  