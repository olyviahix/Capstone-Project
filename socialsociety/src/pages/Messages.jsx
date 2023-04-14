import SideBar from "../components/Sidebar";

export default function Messages() {
    return (
        <div className='main'>
            <SideBar/>
            <div className="content">
                <h2>Incoming Messages</h2>
            </div>
        </div>
    )
}