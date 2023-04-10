import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        sideBarOpen: false
    }
}

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        openSideBar: (state) => {
            state.value.sideBarOpen = !state.value.sideBarOpen;
        }
    }
})

export const { openSideBar } = toggleSlice.actions;

export const setToggle = (state) => state.toggle.value;

export default toggleSlice.reducer;