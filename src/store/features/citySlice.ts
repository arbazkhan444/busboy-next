// src/store/features/citySlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface City {
  id: string;
  name: string;
}

interface CityState {
  cities: City[];
  loading: boolean;
  error: string | null;
}

const initialState: CityState = {
  cities: [],
  loading: false,
  error: null,
};

export const fetchCities = createAsyncThunk(
  'city/fetchCities',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/cities');
      if (!response.ok) throw new Error('Failed to fetch cities');
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action: PayloadAction<City[]>) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const cityReducer = citySlice.reducer;