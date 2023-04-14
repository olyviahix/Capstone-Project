import Bio from '../components/Bio';
import FollowMe from '../components/FollowMe';
import Popup from '../components/Popup';
import { useState } from 'react';
import Edit from '../components/Edit';

function Profile() {
    const [buttonPopup, setButtonPopup] = useState(false);

    // These are the useStates being used to handle the state changes of the profile
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    //This code will prevent the page from refreshing after clicking the button
    const handleSubmit = (e) => {
        e.preventDefault();
        const page = { username, bio}

        console.log(page);
    }

    return (
    <div className = 'ProfileBox'>
        {/* This code was going to be used to change the username dynamically but went a different route */}
           
        <h2>{username}</h2>
        
            {/* This code below is for the popup screen which has a separate css file from the App.css */}
            <button onClick = {() => setButtonPopup(true)}>Edit Profile</button>
        <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
            {/* <Edit /> */}

            {/* This code below was pulled from the Edit.jsx file so it could change the state of the profile without much effort */}
            <div className = 'edit'>
            <h2>Edit Profile</h2>
            <form onSubmit = {handleSubmit}>
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

                <button>Save Changes</button>

                
            </form>
        </div>

        </Popup>
        {/* <Bio /> */}
        
        
        <p>{bio}</p>
            <br />

            {/* I want to work on the FollowMe component to check how many followers the user have, if not maybe count how many likes the user
            has. */}
        <FollowMe />
        
        
    </div>
    )
}

export default Profile;
