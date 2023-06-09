import FollowMe from '../components/FollowMe';
import Popup from '../components/Popup';
import { useState } from 'react';
// import Edit from '../components/Edit';
import SideBar from '../components/Sidebar';
import LogOutModal from '../components/LogOutModal';
// import PostContent from '../components/PostContent';
import ProfilePost from '../components/ProfilePost';
import CoverPic2 from '../components/CoverPhoto2';
import Avatar from '../components/Avatar';
// import FollowBtn from '../components/FollowButton';
import MessageBtn from '../components/MessageButton';
import PsuedoFol from '../components/PsuedoFollow';
import PostContent from '../components/PostContent';
import { useDispatch, useSelector } from 'react-redux';
import { addUserPost, getUserPosts } from '../features/postSlice';

function Profile() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const dispatch = useDispatch()
    const allUserPosts = useSelector(getUserPosts)

    // These are the useStates being used to handle the state changes of the profile
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    //This code will prevent the page from refreshing after clicking the button
    const handleSubmit = (e) => {
        e.preventDefault();
        // axios api call needs to go here
        const page = { username, bio}
        setButtonPopup(false)
        console.log(page);

    }

    return (

    <div className = 'main'>
        <SideBar />
        <LogOutModal/>
          
        <div className = 'ProfileBox'>
            
                <CoverPic2 />
                
            <br /> 
            <div className = 'joinProfile'>
                {/* This code was going to be used to change the username dynamically but went a different route */}
                    <Avatar /> 
                <div className = 'FolMess'>     
                
                    {/* <MessageBtn /> */}
                    {/* <PsuedoFol /> */}
                        {/* I want to work on the FollowMe component to check how many followers the user have, if not maybe count how many likes the user
                        has. */}
                    <FollowMe /> 
                    
                </div>
          
            </div>

            <h2>{username}</h2>
                <p>{bio}</p>
                {/* This code below is for the popup screen which has a separate css file from the App.css */}
                <button className = 'editBtn' onClick = {() => setButtonPopup(true)}>Edit Profile</button>
            <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>


                {/* This code below was pulled from the Edit.jsx file so it could change the state of the profile without much effort */}
                <div className = 'edit'>
                <h2>Edit Profile</h2>

                <form id='edit-form' onSubmit = {handleSubmit}>

                    {/* <Avatar
                        value = {propic}
                        onChange={(e) => setPropic(e.target.value)}
                    /> */}

                    <label>Edit User Name:</label>
                    <input 
                        type = 'text' 
                        required //This makes this field required 
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                    <label>Bio:</label>

                    <textarea 
                        required //This makes this field required 
                        value = {bio}
                        onChange={(e) => setBio(e.target.value)}
                    ></textarea>

                    <button form='edit-form' type='submit' >Save Changes</button>

                    
                </form>
            </div>

            </Popup>
            

            <br />

            <div className = 'profile-post'>
                {
                    allUserPosts.slice().reverse().map((item, index) => (
                        <PostContent username={item.username} content={item.content} key={index} item={item} likes={item.likes} id={index+'li'} time={item.date} uuid={item.uuid}/>
                    ))
                }
                <div><p></p></div>
            </div>

        </div>
        {/* <div className = 'profile-post'>
            <ProfilePost />
            <div><p></p></div>
        </div> */}
           
        
        <div className='right-content' id='right-section'>
                <div className='post-section-right'>
                    <div><p>Post</p></div>
                </div>
        </div>
    </div>
    )
}

export default Profile;
