import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../stores/store";

export interface PageState
{
    CurrentPage: string;
} 

const initialState: PageState = {
    CurrentPage: "/"
};

export const pageSlice = createSlice(
{
    name: "pageSlice",
    initialState,
    reducers:{ 
        SetCurrentPage: (state, action: PayloadAction<string>) => {
            return {CurrentPage: action.payload}; 
        } 
    }
});

export const {SetCurrentPage} = pageSlice.actions;
export const selectCurrentPage = (state: RootState) => state.pages.CurrentPage;
export default pageSlice.reducer;
