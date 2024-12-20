// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { cityReducer } from './features/citySlice';
import { busReducer } from './features/busSlice';
import { authReducer } from './features/authSlice';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    bus: busReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;