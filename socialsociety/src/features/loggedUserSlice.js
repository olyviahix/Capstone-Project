import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        loggedUser: null,
        likedPosts: [],
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
        },
        addLikedPost: (state, action) => {
            state.value.likedPosts.push(action.payload)
        }
    }
})

export const { setCurrentUser, resetUser, getAllUsers, sendToUser, addSocket, addLikedPost } = loggedUserSlice.actions;

export const currentUser = (state) => state.user.value.loggedUser;
export const allUsers = (state) => state.user.value.allUsers;
export const sendThisUser = (state) => state.user.value.sendTo;

export default loggedUserSlice.reducer;