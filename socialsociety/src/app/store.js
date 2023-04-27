import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../features/toggleSlice';
import loggedUserReducer from '../features/loggedUserSlice';
import postReducer from '../features/postSlice';
import socketRoomsReducer from '../features/socketRoomsSlice';

export const store = configureStore({
    reducer: {
        toggle: toggleReducer,
        user: loggedUserReducer,
        posts: postReducer,
        socket: socketRoomsReducer
    }
})