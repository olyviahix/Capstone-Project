import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        logOutModal: false,
    }
}

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        openLogOut: (state) => {
            state.value.logOutModal = !state.value.logOutModal;
        }
    }
});

export const { openLogOut } = toggleSlice.actions;

export const setToggle = (state) => state.toggle.value;

export default toggleSlice.reducer;