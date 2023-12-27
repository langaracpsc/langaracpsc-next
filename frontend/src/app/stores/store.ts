import { configureStore } from "@reduxjs/toolkit";
import execProfileReducer from "../slices/execProfileSlice"

export const store = configureStore({
    reducer: {
        execProfiles: execProfileReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
