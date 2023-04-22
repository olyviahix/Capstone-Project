import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openLogOut, setToggle } from "../features/toggleSlice";
import { Link } from "react-router-dom";
import { currentUser } from "../features/loggedUserSlice";
import SS_Logo from '../Images/SS_Logo(white).png'

export default function SideBar() {

    const loggedUser = useSelector(currentUser);
    const dispatch = useDispatch();
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
                            <div className='navItem'>
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
                <div className="footer">
                    <i className="bi bi-person-circle"></i>
                    {/* <span>{loggedUser.username}</span> */}
                </div>
            </div>
        </div>
    )
}