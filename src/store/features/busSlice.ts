// src/store/features/busSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Bus {
  id: string;
  name: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  availableSeats: number;
}

interface BusState {
  buses: Bus[];
  selectedBus: Bus | null;
  loading: boolean;
  error: string | null;
}

const initialState: BusState = {
  buses: [],
  selectedBus: null,
  loading: false,
  error: null,
};

export const searchBuses = createAsyncThunk(
  'bus/searchBuses',
  async (searchParams: {
    departureCity: string;
    arrivalCity: string;
    date: string;
  }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/buses/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchParams),
      });
      if (!response.ok) throw new Error('Failed to fetch buses');
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const busSlice = createSlice({
  name: 'bus',
  initialState,
  reducers: {
    selectBus: (state, action: PayloadAction<Bus>) => {
      state.selectedBus = action.payload;
    },
    clearSelection: (state) => {
      state.selectedBus = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBuses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchBuses.fulfilled, (state, action: PayloadAction<Bus[]>) => {
        state.loading = false;
        state.buses = action.payload;
      })
      .addCase(searchBuses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { selectBus, clearSelection } = busSlice.actions;
export const busReducer = busSlice.reducer;