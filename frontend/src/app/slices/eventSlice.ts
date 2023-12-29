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
}

const initialState: CalendarEventState = {
    Events: []
};

const eventSlice = createSlice({  
    name: "eventSlice", 
    initialState, 
    reducers: {
        AddCalenderEvent: (state, action: PayloadAction<CalendarEvent>) => { 
                return {...state, Events: [...state.Events, action.payload]};
            }
    }
});

export const {AddCalenderEvent} = eventSlice.actions;
export const selectCurrentPage = (state: RootState) => state.events.Events;
export default eventSlice.reducer;

