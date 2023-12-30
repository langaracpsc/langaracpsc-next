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
}

export interface CalendarEventState
{
    Events: CalendarEvent[];

    FetchIntervalStarted: boolean;
}

const initialState: CalendarEventState = {
    Events: [], 
    FetchIntervalStarted: false
};

const eventSlice = createSlice({  
    name: "eventSlice", 
    initialState, 
    reducers: {
        AddCalenderEvent: (state, action: PayloadAction<CalendarEvent>) => { 
                return {...state, Events: [...state.Events, action.payload]};
            },

        SetCalendarEvents: (state, action: PayloadAction<CalendarEvent[]>) => {
            return {...state, Events: action.payload};            
        },

        SetFetchIntervalStarted: (state, action: PayloadAction<boolean>) => {
            return {...state, FetchIntervalStarted: action.payload};
        }
    }
});

export const {AddCalenderEvent, SetCalendarEvents, SetFetchIntervalStarted} = eventSlice.actions;
export const selectEvent = (state: RootState) => state.events;
export default eventSlice.reducer;

