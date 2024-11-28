import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadEventsAsync } from '../thunks/EventThunks';

export interface Event {
    event_name: string;
    event_date: string;
    event_start_date: string;
    event_end_date: string;
    location: string;
    thumbnail: string;
    registration_link: string;
    id: string;
    last_edited_time: string;
}

interface EventState {
    events: Event[];
}

const initialState: EventState = {
    events: [],
};

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        SetEvents: (state, action: PayloadAction<Event[]>) => {
            state.events = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadEventsAsync.fulfilled, (state, action: PayloadAction<Event[]>) => {
            state.events = action.payload; // Update the events with the fetched data
        });
    },
});

export const { SetEvents } = eventSlice.actions;
export const selectEvents = (state: any) => state.events.events; // Adjust based on your state structure
export default eventSlice.reducer;

