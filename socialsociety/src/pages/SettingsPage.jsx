import SideBar from "../components/Sidebar"
import LogOutModal from "../components/LogOutModal"
import SettingsTab from "../components/SettingsTab"
import LoginPage from "../components/LoginPage";
import AccountInfo from "../components/AccountInformation";
import DeleteAccountModal from "../components/DeleteAccountModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { setCurrentUser, currentUser } from "../features/loggedUserSlice";
import { setToggle } from "../features/toggleSlice";

export default function SettingsPage() {
    const dispatch = useDispatch();
    const chosenOption = useSelector(setToggle);
    const loggedInUser = useSelector(currentUser);
    let [component, setComponent] = useState(null);

    useEffect(()=> {
        const foundUser = localStorage.getItem('user');
        const user = JSON.parse(foundUser)
        if(foundUser != null){
            dispatch(setCurrentUser(user));
        }
    }, []);

    const settings = [
    {
        name: 'Account information'
    },
    {
        name: 'Change password'
    },
    {
        name: 'Your interests'
    },
    {
        name: 'Delete account'
    }
    ]
    
    if(loggedInUser === null){
        return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
            <LoginPage/>
        </div>
        )
    }
    return (
        <div class='main' id="settings-main">
            <SideBar/>
            <LogOutModal/>
            <DeleteAccountModal/>
            <div id="mobile-content" className='content' style={{width: '40%'}}>
                <div id='mobile-fixed' className='fixed-container' style={{border: 'none', margin: '20px 0'}}>
                    <h3 style={{fontWeight: 'bold'}}>Settings</h3>
                </div>
                <div className='post-section' style={{textAlign: 'left', width: '100%', gap: '2rem', marginTop: '50px'}}>
                {
                    settings.map((item, index) => (
                        <SettingsTab key={index} setting={item.name}/>
                    ))
                } 
                </div>
            </div>
            <div className='right-content'  style={{width: '60%'}}>
                <div className='post-section-right'>
                    <div>{chosenOption.settingElement}</div>
                </div>
            </div>
        </div>
    )
}