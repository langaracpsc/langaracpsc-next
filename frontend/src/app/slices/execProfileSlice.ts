import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stores/store";

export interface ExecProfileObject
{
    ID: string;

    Name: string;

    ImageBuffer: string;

    Position: number;

    Description: string;
} 

export interface ExecProfileState
{
    Profiles: ExecProfileObject[];
} 

const initialState: ExecProfileState = {
    Profiles: []
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
