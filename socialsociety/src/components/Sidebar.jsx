import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openLogOut } from "../features/toggleSlice";
import { Link } from "react-router-dom";
import { currentUser } from "../features/loggedUserSlice";
import { useEffect } from 'react';
import { setCurrentUser } from "../features/loggedUserSlice";

export default function SideBar() {

    const dispatch = useDispatch();
    useEffect(()=> {
        const foundUser = localStorage.getItem('user');
        const user = JSON.parse(foundUser)
        if(foundUser != null){
            dispatch(setCurrentUser(user));
        }
    }, []);

    const loggedUser = useSelector(currentUser);
    const logout = () => {
        dispatch(openLogOut());
    }


    const navItem = [
        {
        path: '/',
        icon: <i class="bi bi-grid-3x3-gap-fill"></i>,
        linkText: 'Home'
        },
    {
        path: '/profile',
        icon: <i class="bi bi-person-circle profile" ></i>,
        linkText: 'Profile'
    },
    {
        path: '/notification',
        icon: <i class="bi bi-bell-fill"></i>,
        linkText: 'Notifications'
    },
    {
        path: '/messages',
        icon: <i class="bi bi-chat-left-fill"></i>,
        linkText: 'Messages'
    },
    {
        path: '/settings',
        icon: <i class="bi bi-gear-fill profile" ></i>,
        linkText: 'Settings'
    }
    ]
    return (
        <div className="side-container">
            <div className="sidebar" id='resp-sidebar'>
                <div className="top_section" id='top-sidebar'>
                    <h1 className="logo">Logo</h1>
                </div>
                {
                    navItem.map((item, index)=>(
                        <Link to={item.path} key={index} className='link'>
                            <div className='navItem'>
                                <div className="icon">{item.icon}</div>
                                <div className="link_text">{item.linkText}</div>
                            </div>
                        </Link>
                    ))
                }
                <Link className='link'>
                            <div className='navItem' onClick={logout}>
                                <div className="icon"><i class="bi bi-box-arrow-left profile"></i></div>
                                <div className="link_text">Logout</div>
                            </div>
                </Link>
                <div className="footer" id="mobile-footer">
                    <i class="bi bi-person-circle"></i>
                    <span>{loggedUser.firstName}</span>
                </div>
            </div>
        </div>
    )
}