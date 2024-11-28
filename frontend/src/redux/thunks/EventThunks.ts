import { createAsyncThunk } from '@reduxjs/toolkit';
import { Event } from '../slices/eventSlice';

export const loadEventsAsync = createAsyncThunk(
    'events/load',
    async (): Promise<Event[]> => {
        const response = await fetch(`https://api3.langaracs.ca/events/all`);
        const data = await response.json();

        return data.map((item: any) => ({
            Title: item.event_name,
            Start: new Date(item.event_start_date),
            End: new Date(item.event_end_date),
            Description: item.event_date,
            Location: item.location,
            Image: item.thumbnail ? `https://api3.langaracs.ca/executives/image/${item.thumbnail}` : "https://via.placeholder.com/800x800",
            Link: { Google: item.registration_link, Apple: null }
        }));
    }
);
