import {  createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    value: {
        rooms: null
    }
}

export const socketRoomsSlice = createSlice({
    name: 'socket',
    initialState, 
    reducers: {
        setRoom: (state, action) => {
            state.value.rooms = action.payload
        }
    }
})

export const { setRoom } = socketRoomsSlice.actions;
export const getRoom = (state) => state.socket.value.rooms

export default socketRoomsSlice.reducer