import SideBar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { setCurrentUser, currentUser } from "../features/loggedUserSlice";
import LoginPage from "../components/LoginPage";
import MessageField from "../components/MessageField";

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
            <div className="content" style={{width: '30%'}}>
                <h2>Incoming Messages</h2>
            </div>
            <div className='right-content' style={{width: '70%'}}>
                <MessageField/>
            </div>
        </div>
    )
}