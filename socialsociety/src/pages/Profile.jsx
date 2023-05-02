import FollowMe from '../components/FollowMe';
// import { useState } from 'react';
import SideBar from '../components/Sidebar';
import LogOutModal from '../components/LogOutModal';
// import PostContent from '../components/PostContent';
import ProfilePost from '../components/ProfilePost';
import CoverPic2 from '../components/CoverPhoto2';
import MessageBtn from '../components/MessageButton';
import PsuedoFol from '../components/PsuedoFollow';
import Male from '../Images/MaleIcon.png';
import Movies from '../Images/movies1.jpeg';

function Profile2() {

    return (

    <div className = 'main'>
        <SideBar />
        <LogOutModal/>
          
        <div className = 'ProfileBox'>
            
                <img className = 'cover' src = {Movies} alt =''/> 
                
            <br /> 
            <div className = 'joinProfile'>
                {/* This code was going to be used to change the username dynamically but went a different route */}
                <img className = 'avatar' src={Male} alt = ''/>
                <div className = 'FolMess'>     
                
                    <MessageBtn />
                    <PsuedoFol />
                        {/* I want to work on the FollowMe component to check how many followers the user have, if not maybe count how many likes the user
                        has. */}
                    <FollowMe /> 
                    
                </div>
          
            </div>

            <h2>SAM_I_AM</h2>
               <p>I like to watch horror films and supernatural tv series. My top three shows are Charmed, Buffy, and Scream
                the series. I'm hoping to find some like minded ppl like myself.</p> 
               
             
        

            <br />

            <div className = 'profile-post'>
                <ProfilePost />
                <div><p></p></div>
            </div>

        </div>
    </div>
    )
}

export default Profile2;
