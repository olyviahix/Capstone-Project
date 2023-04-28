import { useSelector } from "react-redux";
import { currentUser } from "../features/loggedUserSlice";
import { useState } from "react";

export default function AccountInfo() {
    const loggedInUser = useSelector(currentUser);
    const [show, setShow] = useState('Show');
    const [type, setType] = useState('password');
    const hideAndShow = (e) => {
        e.preventDefault()
        if(show === 'Show'){
            setType('text');
            setShow('Hide');
        }else{
            setType('password')
            setShow('Show')
        }
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center'}}>
            <form className="settings-account">
                Username: <input type='text' class="form-control me-2" value={loggedInUser.username} disabled/>
                Password:  <div class="input-group mb-3">
                                <input type={type} class="form-control" value={loggedInUser.password} aria-label="Recipient's username" aria-describedby="basic-addon2" disabled/>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" onClick={hideAndShow}>{show}</button>
                                    </div>
                            </div>
                        <br/>
                First Name: <input type='text' class="form-control me-2" value={loggedInUser.firstName} disabled/>
                Last Name: <input type='text' class="form-control me-2" value={loggedInUser.lastName} disabled/>
                        <br/>
                Email: <input type='text' class="form-control me-2" value={loggedInUser.email} disabled/>
                Interests: <input type="text" class="form-control me-2"  value={loggedInUser.interests}/>
            </form>
            <p style={{color: '#fff'}}>This information is view only.</p>
        </div>
        
    )
}