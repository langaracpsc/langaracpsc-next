import { AppDispatch, RootState } from "../stores/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CalendarEvent } from "./eventSlice";
interface ExecPosition 
{
    ID: number;

    Title: string;
}

export interface ExecProfileObject
{
    ID: string;

    Name: string;

    ImageBuffer: string;

    Position: ExecPosition; 

    Description: string;
} 

export interface ExecProfileState
{
    Profiles: ExecProfileObject[];
} 

const initialState: ExecProfileState = {
    Profiles: []
};


const fetchEvents = () => async (state: RootState, dipatch: AppDispatch) => {
    const response = await fetch("", {
        method: "GET"
    });
};

export const execProfileSlice = createSlice(
{
    name: "execProfile",
    initialState,
    reducers:{ 
        AddExecProfile: (state, action: PayloadAction<ExecProfileObject>) => {
            return {...state, Profiles: [...state.Profiles, action.payload]}; 
        } 
    }
});

export const {AddExecProfile} = execProfileSlice.actions;
export const selectProfile = (state: RootState) => state.execProfiles.Profiles;
export default execProfileSlice.reducer;
