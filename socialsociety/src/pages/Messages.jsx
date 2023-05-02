import SideBar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { grabAllPosts } from "../features/postSlice";
import { setCurrentUser, currentUser, getAllUsers } from "../features/loggedUserSlice";
import LoginPage from "../components/LoginPage";
import InterestsModal from "../components/InterestsModal";
import LogOutModal from "../components/LogOutModal";
import MessageField from "../components/MessageField";
import MessageOptions from "../components/MessageOptions";
import axios from "axios";

export default function Messages() {
    
    const dispatch = useDispatch()
    const url = 'http://localhost:7000';
    const fetchUsers = async () => {
        try {
              const response = await axios.get(url+'/all-users')
              if(response.data !== null){
                  dispatch(getAllUsers(response.data))
              }
            } catch (err) {
            console.log(err)
          }
    }
    const fetchPost = async () => {
          try {
              const response = await axios.get(url+'/all-posts')
              if(response.data !== null){
                  dispatch(grabAllPosts(response.data))
              }
          } catch (err) {
              console.log(err)
          }
    }
    useEffect(()=> {
        const foundUser = localStorage.getItem('user');
        const user = JSON.parse(foundUser)
        if(foundUser != null){
            dispatch(setCurrentUser(user));
            fetchUsers()
            fetchPost()
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
        <div className='main' id='message-page'>
            <SideBar/>
            <LogOutModal/>
            <InterestsModal/>
            <div className="content" style={{width: '30%'}}>
                <MessageOptions/>
            </div>
            <div className='right-content' style={{width: '70%'}}>
                <MessageField/>
            </div>
        </div>
    )
}