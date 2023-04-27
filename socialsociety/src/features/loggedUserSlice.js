import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        loggedUser: null,
        allUsers: null,
        sendTo: null
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
        },
        getAllUsers: (state, action) => {
            state.value.allUsers = action.payload
        }, 
        sendToUser: (state, action)=> {
            state.value.sendTo = action.payload
        }
    }
})

export const { setCurrentUser, resetUser, getAllUsers, sendToUser } = loggedUserSlice.actions;

export const currentUser = (state) => state.user.value.loggedUser;
export const allUsers = (state) => state.user.value.allUsers;
export const sendThisUser = (state) => state.user.value.sendTo;

export default loggedUserSlice.reducer;