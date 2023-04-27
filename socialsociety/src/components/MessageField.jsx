import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { currentUser, sendThisUser } from '../features/loggedUserSlice'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:7000')

export default function MessageField() {

    const [text, setText] = useState('')
    const [recieved, setRecieved] = useState('')
    const loggedInUser = useSelector(currentUser)
    const recipientUser = useSelector(sendThisUser)

    
    const sendMessage = ()=> {
        socket.emit('send-message')
    }
    const setMessage = (e)=> {
        const textarea = document.getElementById('textarea-char')
        setText(textarea.innerText)
    }
    const onSubmit = () => {
        const chatBody = {
            message: text,
            author: loggedInUser.username,
            to: recipientUser,
            time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
        }
        socket.emit('private', chatBody)
    }

    useEffect(()=> {
        socket.on('recieve-message', (data)=> {
            setRecieved(data.text)
        })
    }, [socket])

    return (
        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', marginBottom: '1rem', justifyContent: 'center', alignItems: 'center'}}>
            <div id="" style={{width: '100%', height: '100%', overflowY: 'scroll', overflowX: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                <div className='message-board' style={{textAlign: 'left', marginLeft: '1rem'}}>{recieved}</div>
                <div className='message-board' style={{textAlign: 'right', marginRight: '1rem'}}>{text}</div>
            </div>
            <div className="message-container" style={{display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center'}}>
                <div className="message-post" id='textarea-char' contentEditable='true' onInput={setMessage}></div>
                <button class="message-btn" style={{width: '7rem', borderRadius: '8px', fontWeight: 'bolder', fontSize: '1rem'}} onClick={onSubmit}>
                    <i class="bi bi-send-fill"></i>
                </button>
            </div>
        </div>
    )
}