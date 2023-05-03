import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openLogOut } from "../features/toggleSlice";
import { Link, NavLink } from "react-router-dom";
import { allUsers, currentUser } from "../features/loggedUserSlice";
import { grabAllPosts, getUserPosts } from "../features/postSlice";
import { useEffect, useState } from 'react';
import { setCurrentUser, getAllUsers } from "../features/loggedUserSlice";
import axios from "axios";
import SS_Logo from '../Images/SS_Logo(white).png'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:7000')



export default function SideBar() {
    
    const dispatch = useDispatch();
    const url = 'http://localhost:7000';
    const loggedUser = useSelector(currentUser);

    const fetchUserPosts = async (userID) => {
        try {
            const response = await axios.get(url+`/get-user-post/${userID}`)
            if(response.data !== null){
                response.data.map((item) => {
                    dispatch(getUserPosts(item))
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
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
    const [active, setActive] = useState(null);
    let [notif_count,setNotifCount] = useState(0)

    useEffect(()=> {
        const foundUser = localStorage.getItem('user');
        const user = JSON.parse(foundUser)
        if(foundUser != null){
            dispatch(setCurrentUser(user));
            fetchUsers();
            fetchPost();
            fetchUserPosts(user.id);
            console.log('useefect done')
        }
    }, []);

    const logout = () => {
        dispatch(openLogOut());
    }


    const navItem = [
    {
        path: '/',
        icon: <i className="bi bi-grid-3x3-gap-fill"></i>,
        linkText: 'Home'
    },
    {
        path: '/explore',
        icon: <i className="bi bi-hash"></i>,
        linkText: 'Explore'
    },
    {
        path: '/profile',
        icon: <i className="bi bi-person-circle profile" ></i>,
        linkText: 'Profile'
    },
    {
        path: '/notification',
        icon: <i className="bi bi-bell-fill"></i>,
        linkText: 'Notifications'
    },
    {
        path: '/messages',
        icon: <i className="bi bi-chat-left-fill"></i>,
        linkText: 'Messages'
    },
    {
        path: '/settings',
        icon: <i className="bi bi-gear-fill profile" ></i>,
        linkText: 'Settings'
    }
    ]
    return (
        <div className="side-container">
            <div className="sidebar" id='resp-sidebar'>
                <div className="top_section" id='top-sidebar'>
                    <img className="logo" src = {SS_Logo} alt = 'logo'></img>
                </div>
                {
                    navItem.map((item, index)=>(
                        <Link to={item.path} key={index} className='link'>
                            <div className={`navItem ${active == item ? "active" : ''}`} onClick={()=> {setActive(item)}}>
                                <div className="icon">{item.icon}</div>
                                <div className="link_text">{item.linkText}</div>
                            </div>
                        </Link>
                    ))
                }
                <Link className='link'>
                            <div className='navItem' onClick={logout}>
                                <div className="icon"><i className="bi bi-box-arrow-left profile"></i></div>
                                <div className="link_text">Logout</div>
                            </div>
                </Link>
            </div>
        </div>
    )
}