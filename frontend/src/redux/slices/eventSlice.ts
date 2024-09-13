import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stores/store";

export interface CalendarEvent
{
    Title: string;
    
    Start: Date;

    End: Date;

    Description: string;

    Location: string;

    Image: string;
    
    Link: {
        Google: string,
        Apple: string
    };
}


export interface CalendarEventState
{
    Events: CalendarEvent[];

    FetchIntervalStarted: boolean;

    CurrentEvent: CalendarEvent;
}

export const DefaultCalendarEvent: CalendarEvent= {
    Title: "",
    Start: new Date(0),
    End: new Date(0),
    Description: "",
    Location: "",
    Image: "",
    Link: {
        Google: "",
        Apple: ""
    }
} ;

const initialState: CalendarEventState = {
    Events: [], 
    FetchIntervalStarted: false,
    CurrentEvent: DefaultCalendarEvent 
};

const eventSlice = createSlice({  
    name: "eventSlice", 
    initialState, 
    reducers: {
        AddCalenderEvent: (state, action: PayloadAction<CalendarEvent>) => { 
                return { ...state, Events: [...state.Events, action.payload] };
            },

        SetCalendarEvents: (state, action: PayloadAction<CalendarEvent[]>) => {
            return { ...state, Events: action.payload };            
        },

        SetFetchIntervalStarted: (state, action: PayloadAction<boolean>) => {
            return { ...state, FetchIntervalStarted: action.payload };
        },

        SetCurrentEvent: (state, action: PayloadAction<CalendarEvent>) => {
            return { ...state, CurrentEvent: action.payload };           
        }
    }
});

export const {AddCalenderEvent, SetCalendarEvents, SetFetchIntervalStarted, SetCurrentEvent} = eventSlice.actions;
export const selectEvent = (state: RootState) => state.events;
export default eventSlice.reducer;

