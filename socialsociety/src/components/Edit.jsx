import { useState } from 'react';

function Edit() {
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
                    required
                    value = {bio}
                    onChange={(e) => setBio(e.target.value)}
                ></textarea>

                <button>Save Changes</button>

                <p>{username}</p>
                
                <p>{bio}</p> 
            </form>
        </div>
    )
}
export default Edit;
