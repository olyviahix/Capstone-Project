import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        loggedUser: null
    }
}

export const loggedUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.value.loggedUser = action.payload;
        },
        resetUser: (state) => {
            state.value.loggedUser = null
        }
    }
})

export const { setCurrentUser, resetUser } = loggedUserSlice.actions;

export const currentUser = (state) => state.user.value.loggedUser;

export default loggedUserSlice.reducer;