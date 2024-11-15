import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExecProfileObject } from '../slices/execProfileSlice';

export const loadProfilesAsync = createAsyncThunk(
  'profiles/load',
  async (): Promise<ExecProfileObject[]> => {
    const response = await fetch(`https://api3.langaracs.ca/executives/active`, {
      method: 'GET',
      headers: {
        apikey: `${process.env.APIKEY}`,
      },
    });

    const data = await response.json();

    return data.map((element: any) => ({
      ID: element.student_id,
      Name: element.name,
      ImageBuffer: element.profile_picture,
      Position: element.roles,
      Description: element.bio,
    }));
  }
);
