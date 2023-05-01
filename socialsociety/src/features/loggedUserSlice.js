import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        loggedUser: null,
        allUsers: [],
        sendTo: null,
        socket: null
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
        }, 
        addSocket: (state, action) => {
            state.value.socket = action.payload
        }
    }
})

export const { setCurrentUser, resetUser, getAllUsers, sendToUser, addSocket } = loggedUserSlice.actions;

export const currentUser = (state) => state.user.value.loggedUser;
export const allUsers = (state) => state.user.value.allUsers;
export const sendThisUser = (state) => state.user.value.sendTo;

export default loggedUserSlice.reducer;