import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRoom } from '../features/socketRoomsSlice'
import { currentUser, sendThisUser, addSocket } from '../features/loggedUserSlice'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:7000')

export default function MessageField() {

    const dispatch = useDispatch()
    const [text, setText] = useState([])
    const [recieved, setRecieved] = useState([])
    const loggedInUser = useSelector(currentUser)
    const recipientUser = useSelector(sendThisUser)
    const room = useSelector(getRoom)

    socket.emit('join', {user: loggedInUser.username})

    const sendMessage = ()=> {
        socket.emit('send-message')
    }
    const setMessage = (e)=> {
        
    }
    const onSubmit = async () => {
        const textarea = document.getElementById('textarea-char')
        const chatBody = {
            message: text,
            author: loggedInUser.username,
            to: recipientUser,
            room: room,
            time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
        }
       await socket.emit('send-message', chatBody)
        setText(text => [...text, textarea.innerText])
    }

    useEffect(()=> {
        // socket.on('recieve-message', (data)=> {
        //     setRecieved(data.message)
        //     console.log(data)
        // })
        socket.on('recieve-message', data => {
            setRecieved(recieved => [...recieved, data.message])
        } )
    }, [socket])

    return (
        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', marginBottom: '1rem', justifyContent: 'center', alignItems: 'center'}}>
            <div id="" style={{width: '100%', height: '100%', overflowY: 'scroll', overflowX: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                {
                    recieved.map((item)=> (
                        <div className='message-board' style={{textAlign: 'left', marginLeft: '1rem'}}>
                            <span style={{background: '#fff', color: '#000', borderRadius: '1rem', padding: '5px'}}>{item}</span>
                        </div>
                    ))
                }
                {
                    text.map(item => (
                        <div className='message-board' style={{textAlign: 'right', marginRight: '1rem'}}>
                            <span style={{background: '#fff', color: '#000', borderRadius: '1rem', padding: '5px'}}>{item}</span>
                        </div>
                    ))
                }
                
            </div>
            <div className="message-container" id='msg-contain-resp' style={{display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center'}}>
                <div className="message-post" id='textarea-char' contentEditable='true' onInput={setMessage}></div>
                <button class="message-btn" style={{width: '7rem', borderRadius: '8px', fontWeight: 'bolder', fontSize: '1rem'}} onClick={onSubmit}>
                    <i class="bi bi-send-fill"></i>
                </button>
            </div>
        </div>
    )
}