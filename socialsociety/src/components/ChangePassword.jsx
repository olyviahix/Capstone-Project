import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { currentUser, setCurrentUser } from "../features/loggedUserSlice"
import axios from "axios"

export default function ChangePassword() {
    
    const url = 'http://localhost:7000'
    const dispatch = useDispatch()
    const loggedInUser = useSelector(currentUser)
    const [type, setType] = useState('password')
   
    const handleEdit = async () => {
        const current = document.getElementById('current-pword').value
        const newPass = document.getElementById('new-pasword').value
        const confirmPass = document.getElementById('confirm-password').value
        try {
            if(current === loggedInUser.password && newPass === confirmPass){
                const response = await axios.put(url+`/update-password/${loggedInUser.username}/${confirmPass}`)
                if(response.data === 'password updated'){
                    const getResponse = await axios.get(url+`/user/${loggedInUser.username}`)
                    if(getResponse.data !== null){
                        localStorage.clear()
                        localStorage.setItem('user', JSON.stringify(getResponse.data))
                        dispatch(setCurrentUser(getResponse.data))
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
   const toggle = (e) => {
        if(e.target.checked){
            setType('text')
        }else{
            setType('password')
        }
   }

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', color: '#fff'}}>
            <label>
                <h6>Current Password:</h6>
                <input type='text' class="form-control me-2" id='current-pword' required/>
            </label>
            <label>
                <h6>New Password:</h6>
                <input type={type} class="form-control me-2" id='new-pasword' required/>
            </label>
            <label>
                <h6>Confirm Password:</h6>
                <input type={type} class="form-control me-2" id='confirm-password' required/>
            </label>
            <label style={{display: 'flex', justifyContent: 'flex-start', gap: '1rem'}}>
                <input type="checkbox" onChange={toggle}/><span>Show Passwords</span>
            </label>
            <button class="btn btn-light" style={{width: '17rem'}} onClick={handleEdit}>Save Change</button>
        </div>
    )
}