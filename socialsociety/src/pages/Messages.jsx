import SideBar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { setCurrentUser, currentUser } from "../features/loggedUserSlice";
import LoginPage from "../components/LoginPage";
import LogOutModal from "../components/LogOutModal";
import MessageField from "../components/MessageField";
import MessageOptions from "../components/MessageOptions";

export default function Messages() {
    
    const dispatch = useDispatch()
    useEffect(()=> {
        const foundUser = localStorage.getItem('user');
        const user = JSON.parse(foundUser)
        if(foundUser != null){
            dispatch(setCurrentUser(user));
        }
    }, []);

    const loggedInUser = useSelector(currentUser);
    if(loggedInUser === null){
        return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
            <LoginPage/>
        </div>
        )
    }

    return (
        <div className='main'>
            <SideBar/>
            <LogOutModal/>
            <div className="content" style={{width: '30%'}}>
                <MessageOptions/>
            </div>
            <div className='right-content' style={{width: '70%'}}>
                <MessageField/>
            </div>
        </div>
    )
}