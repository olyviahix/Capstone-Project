import SideBar from "../components/Sidebar";
import '../App.css';
import Notifications1 from "../components/Notifications";


export default function Notifications() {
    return (
        
        <div className='main'>
            <SideBar/>
            
            <div id="mobile-content" className='content' >
                <div id='mobile-fixed' className='fixed-container'>
                <h2>NOTIFICATIONS</h2>
                </div> 
                <div className="post-section" style={{textAlign: 'left', width: '100%', gap: '2rem', marginTop: '20px'}}>
                    <Notifications1/>
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