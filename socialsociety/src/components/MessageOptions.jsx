import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allUsers, sendToUser } from '../features/loggedUserSlice';

export default function MessageOptions() {
    const dispatch = useDispatch()
    const setAllUsers = useSelector(allUsers)
    const [options, setOptions] = useState([])
    const onInputChange = (e) => {
        setOptions(setAllUsers.filter((item)=> item.username.includes(e.target.value)))
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem' , position: 'absolute', marginTop: '2rem'}}>
            <div className="search-bar-dropdown">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onInputChange}/>
                <ul className='list-group'>
                    {
                        options.map((item, index) => (
                            <button class="btn btn-outline-light my-2 my-sm-0 select-options" key={index} onClick={(e)=> {dispatch(sendToUser(e.target.innerText))}}>{item.username}</button>
                        ))
                    }
                </ul>
            </div>
            <i class="bi bi-plus-circle search-add" style={{fontSize: '2rem',}}></i>
        </div>
    )
}