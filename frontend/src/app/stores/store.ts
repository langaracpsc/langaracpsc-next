import { configureStore } from "@reduxjs/toolkit";
import execProfileReducer from "../slices/execProfileSlice"
import pageReducer from "../slices/pageSlice";

export const store = configureStore({
    reducer: {
        execProfiles: execProfileReducer,
        pages: pageReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;