import SideBar from "../components/Sidebar";
import '../App.css';
import Notifications1 from "../components/Notifications";
import LogOutModal from "../components/LogOutModal"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { newNotif, getNotif, emptyNotif } from "../features/postSlice";
import io from 'socket.io-client'
const socket = io.connect('http://localhost:7000')


export default function Notifications() {

    // const [notification, setNotification] = useState([])
    const dispatch = useDispatch()
    const notification = useSelector(getNotif)
    const empty = () => {
        dispatch(emptyNotif())
    }

    useEffect(()=> {
        socket.on('recieve-notif', (data)=> {
            console.log('notif recieved')
            dispatch(newNotif(data))
        })
    }, [socket])
    return (
        <div className='main'>
            <SideBar/>
            <LogOutModal/>
            <div id="mobile-content" className='content' >
                <div id='mobile-fixed' className='fixed-container'>
                <button class="btn btn-light" style={{width: '12rem', marginTop: '1rem', marginBottom: '1rem'}} onClick={empty}>Clear Notifications</button>
                </div> 
                <div className="post-section" style={{textAlign: 'left', width: '100%', gap: '2rem', marginTop: '20px'}}>
                    {
                        notification.map((item, index) => (
                            <Notifications1 notif={item.notification}/>
                        ))
                    }
                    
                </div>
                
            </div>
            <div className='right-content' id='right-section'>
                <div className='fixed-container-right'>
                    <h2>SUGGESTIONS</h2>
                </div>
            </div>
        </div>
    )
}