import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        userPosts: []
    }
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPosts: (state, action) => {
            state.value.userPosts.push(action.payload)
        }
    }
})

export const { addNewPosts } = postSlice.actions;

export const getPosts = (state) => state.posts.value.userPosts

export default postSlice.reducer;