import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        logOutModal: false,
        settingsTab: ''
    }
}

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        openLogOut: (state) => {
            state.value.logOutModal = !state.value.logOutModal;
        }, 
        settingsChosen: (state, action) => {
            state.value.settingsTab = action.payload;
        }
    }
});

export const { openLogOut, settingsChosen } = toggleSlice.actions;

export const setToggle = (state) => state.toggle.value;

export default toggleSlice.reducer;