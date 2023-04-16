import SideBar from "../components/Sidebar"
import LogOutModal from "../components/LogOutModal"
export default function SettingsPage() {
    return (
        <div class='main'>
            <SideBar/>
            <LogOutModal/>
            <div id="mobile-content" className='content' style={{width: '100%', border: 'none'}}>
                <div className='post-section'>
                    Settings
                </div>
            </div>
        </div>
    )
}