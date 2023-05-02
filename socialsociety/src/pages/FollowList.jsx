import SideBar from '../components/Sidebar';
import LogOutModal from '../components/LogOutModal';
import { Link } from 'react-router-dom';

function FollowPage() {

return (
 <div className = 'main'>
        <SideBar />
        <LogOutModal/>
          
        <div className = 'societyList'>
            
            <div className = 'society-top'>
                <h2>MY SOCIETY</h2>
            </div> 
                    <br/>
                    <br/>
                    <div>
                    <Link to = '/profile2' className = 'fake'>SAM_I_AM</Link>
                    </div>
                    

        </div>
        
        <div className='right-content' id='right-section'>
                <div className='post-section-right'>
                    <div><p>Post</p></div>
                </div>
        </div>
</div>
    )
}

export default FollowPage;
