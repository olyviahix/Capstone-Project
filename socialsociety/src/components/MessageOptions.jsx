import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRoom } from '../features/socketRoomsSlice';
import { allUsers, sendToUser, currentUser } from '../features/loggedUserSlice';
import io from 'socket.io-client'
const socket = io.connect('http://localhost:7000')

export default function MessageOptions() {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(currentUser)
    const setAllUsers = useSelector(allUsers)
    const [chosen, setChosen] = useState('')
    const [options, setOptions] = useState([])
    const userChoice = (e) => {
        dispatch(sendToUser(e.target.innerText))
        setChosen(e.target.innerText)
    }
    const onInputChange = (e) => {
        setOptions(setAllUsers.filter((item)=> item.username.includes(e.target.value)))
    }
    const createRoom = () => {
        if(chosen !== ''){
            dispatch(setRoom(chosen))
            socket.emit('join', {user: chosen})
        }else {
            alert('no recipient selected')
        }
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem' , position: 'absolute', marginTop: '2rem'}}>
            <div className="search-bar-dropdown">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onInputChange}/>
                <ul className='list-group'>
                    {
                        options.map((item, index) => (
                            <button class="btn btn-outline-light my-2 my-sm-0 select-options" key={index} onClick={userChoice}>{item.username}</button>
                        ))
                    }
                </ul>
            </div>
            <i class="bi bi-plus-circle search-add" style={{fontSize: '2rem',}} onClick={createRoom}></i>
        </div>
    )
}