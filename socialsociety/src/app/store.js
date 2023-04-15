import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../features/toggleSlice';
import loggedUserReducer from '../features/loggedUserSlice';

export const store = configureStore({
    reducer: {
        toggle: toggleReducer,
        user: loggedUserReducer,
    }
})