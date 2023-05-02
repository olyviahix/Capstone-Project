import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        userPosts: [],
        allPosts: [],
        notifs: []
    }
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPosts: (state, action) => {
            state.value.allPosts.push(action.payload)
        },
        grabAllPosts: (state, action) => {
            state.value.allPosts = action.payload
        },
        newNotif: (state, action) => {
            state.value.notifs.push(action.payload)
        }, 
        emptyNotif: (state) => {
            state.value.notifs = [];
        },
        removePost: (state, action) => {
            state.value.allPosts.splice(action.payload, 1)
        },
        addUserPost: (state, action) => {
            state.value.userPosts.push(action.payload)
        }
    }
})

export const { addNewPosts, grabAllPosts, newNotif, emptyNotif, removePost, addUserPost } = postSlice.actions;

export const getPosts = (state) => state.posts.value.userPosts
export const showAll = (state) => state.posts.value.allPosts
export const getNotif = (state) => state.posts.value.notifs
export const getUserPosts = (state) => state.posts.value.userPosts

export default postSlice.reducer;