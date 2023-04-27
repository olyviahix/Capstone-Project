import SideBar from '../components/Sidebar';
import LogOutModal from '../components/LogOutModal';


function FollowPage() {

return (
 <div className = 'main'>
        <SideBar />
        <LogOutModal/>
          
        <div className = 'ProfileBox'>
            
            <h2>Follower/Following</h2> 

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
