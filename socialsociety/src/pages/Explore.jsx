import LogOutModal from "../components/LogOutModal";
import SideBar from "../components/Sidebar";
import { Link } from 'react-router-dom';


function Explore() {
    return(
        <div className = 'main'>
            <SideBar/>
            <LogOutModal/>
            
            <div className = 'ProfileBox2'>
                <h2>SUGGESTED USERS</h2>
                <br />
                <Link to = '/profile2' className = 'fake'>SAM_I_AM</Link>
                    
            </div>           
        </div>
    )
}
export default Explore;