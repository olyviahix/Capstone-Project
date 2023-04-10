import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openSideBar, setToggle } from "../features/toggleSlice";
import { Link } from "react-router-dom";

export default function SideBar() {

    const dispatch = useDispatch();
    const sideOpen = useSelector(setToggle);

    const toggle = () => {
        dispatch(openSideBar())
    }
    const navItem = [
        {
        path: '/home',
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
        linkText: 'Notification'
    },
    {
        path: '/settings',
        icon: <i class="bi bi-gear-fill profile" ></i>,
        linkText: 'Settings'
    },
    {
        path: '/messages',
        icon: <i class="bi bi-chat-left-fill"></i>,
        linkText: 'Messages'
    }
    ]
    return (
        <div className="side-container">
            <div style={{width: sideOpen.sideBarOpen ? "300px" : "50px"}} className="sidebar">
                <div className="top_section" style={{justifyContent: sideOpen.sideBarOpen ? "center": "none"}}>
                    <h1 className="logo" style={{display: sideOpen.sideBarOpen ? "block" : "none"}}>(Logo)</h1>
                    <div className="bar" style={{marginLeft: sideOpen.sideBarOpen ? "90px" : "0px", display: sideOpen.sideBarOpen ? "flex":"block"}}>
                    <i class="bi bi-list" onClick={toggle}></i>
                    </div>
                </div>
                {
                    navItem.map((item, index)=>(
                        <Link to={item.path} key={index} className='link'>
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{display: sideOpen.sideBarOpen ? "block" : "none"}}>{item.linkText}</div>
                        </Link>
                    ))
                }
                <div className="footer" style={{flexDirection: sideOpen.sideBarOpen ? "row" : "column", justifyContent: sideOpen.sideBarOpen ? "center" : "none",marginTop: sideOpen.sideBarOpen ? "270px" : "170px", fontSize: sideOpen.sideBarOpen ? "30px" : "20px"}}>
                    <i class="bi bi-box-arrow-left profile"></i>
                </div>
            </div>
        </div>
    )
}