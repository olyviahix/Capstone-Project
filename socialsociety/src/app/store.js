import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../features/toggleSlice';

export const store = configureStore({
    reducer: {
        toggle: toggleReducer
    }
})