import {  createSlice } from '@reduxjs/toolkit';
import AccountInfo from '../components/AccountInformation';
import DeactivateAccount from '../components/DeactivateAccount';
import SettingsInterest from '../components/SettingsInterest';
import ChangePassword from '../components/ChangePassword';

const initialState = {
    value: {
        logOutModal: false,
        deleteModal: false,
        interestsModal: false,
        settingsTab: [
            {
                name: 'Account information',
                element: <AccountInfo/>
            },
            {
                name: 'Change password',
                element: <ChangePassword/>
            },
            {
                name: 'Your interests',
                element: <SettingsInterest/>
            },
            {
                name: 'Delete account',
                element: <DeactivateAccount/>
            }
        ],
        settingElement: null,
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
            state.value.settingsTab.map((item, index) => {
                if(action.payload === item.name){
                    state.value.settingElement = item.element;
                }
            })
        },
        openDeleteModal: (state) => {
            state.value.deleteModal = !state.value.deleteModal;
        },
        openInterestsModal: (state) => {
            state.value.interestsModal = !state.value.interestsModal;
        }
    }
});

export const { openLogOut, settingsChosen, openDeleteModal, openInterestsModal } = toggleSlice.actions;

export const setToggle = (state) => state.toggle.value;

export default toggleSlice.reducer;