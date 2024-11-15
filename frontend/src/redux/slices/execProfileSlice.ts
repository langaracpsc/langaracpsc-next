// execProfileSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadProfilesAsync } from '../thunks/ProfileThunks';

export interface ExecProfileObject {
  ID: string;
  Position: string;
  Name: string;
  ImageBuffer: string | null;
  Description: string;
}

const initialState: ExecProfileObject[] = [];

const execProfileSlice = createSlice({
  name: 'execProfiles',
  initialState,
  reducers: {
    AddExecProfile: (state, action: PayloadAction<ExecProfileObject>) => {
      const exists = state.some((profile) => profile.ID === action.payload.ID);
      if (!exists) {
        state.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadProfilesAsync.fulfilled, (state, action) => {
      // Replace the entire state with new profiles (avoids duplicates)
      return action.payload;
    });
  },
});

export const { AddExecProfile } = execProfileSlice.actions;
export const selectProfile = (state: any) => state.execProfiles;
export default execProfileSlice.reducer;
