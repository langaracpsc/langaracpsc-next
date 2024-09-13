import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "../slices/eventSlice";
import execProfileReducer from "../slices/execProfileSlice";
import pageReducer from "../slices/pageSlice";

export const store = configureStore({
    reducer: {
        execProfiles: execProfileReducer,
        pages: pageReducer,
        events: eventsReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
        serializableCheck: false // Allows putting date types in the store
      })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;