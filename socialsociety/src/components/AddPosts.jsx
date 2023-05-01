import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewPosts } from '../features/postSlice';
import { currentUser } from '../features/loggedUserSlice';
import axios from 'axios';
import io from 'socket.io-client'
const socket = io.connect('http://localhost:7000')

export default function AddPosts() {

    const url = 'http://localhost:7000';
    const loggedInUser = useSelector(currentUser)
    const dispatch = useDispatch();
    const maxChar = 280
    const input = document.getElementById('file-upload');
    const [progress, setProgress] = useState(0);



    const countChar = () => {
        const textarea = document.getElementById('textarea-char');
        const charCount = document.getElementById('charCount');
        
        const char = textarea.innerHTML.length;
        const remaining = maxChar - char;

        charCount.innerText = remaining
        setProgress(char);

       if(remaining <= 10){
            charCount.style.color = 'red';
        }else if(remaining >= 10){
            charCount.style.color = '#fff';
        }
    }

    const post = () => {
        const postBtn = document.querySelector('post-button');
        const textarea = document.getElementById('textarea-char');
        const display = document.getElementById('display-image');
        const uuid = crypto.randomUUID()

        if((textarea.innerText.length <= 0) && 
            (display.style.display === '' || display.style.display === 'none')){

            console.log('cannot post')

        }else{

            // const file = input.files;
            // const formData = new FormData();
            // formData.append('image', file[0])

            const addPost = {
                content: textarea.innerText,
                username: loggedInUser.username,
                date: new Date().toLocaleString('en-US', {
                    hour12: true,
                    hour: 'numeric',
                    minute: 'numeric'
                }),
                likes: '0',
                uuid: uuid
            }

            axios.post(url+'/create-post', addPost).then(response => {
                console.log('api call')
                if(response.data === 'Success.'){
                    console.log('Post added successfully')
                    textarea.innerText = ''

                    axios.get(url+`/post/${addPost.uuid}`).then(response => {
                        console.log(response.data);
                        if(response.data !== 'Request failed.'){
                            dispatch(addNewPosts(response.data));
                            console.log(response.data);
                        }
                    })
                }
            })
        }
    }

    return (
        <div style={{border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div id='textarea-char' className="textarea-post" contentEditable='true' placeholder="What's happening?" style={{marginTop: '2rem'}}></div>
            <div className="post-options">
                <div style={{margin: '15px 0 0 30px', display: 'flex', gap: '.5rem', fontWeight: 'bold'}}>
                    <i class="bi bi-person-circle"></i> <span>{loggedInUser.username}</span>
                </div>
                <div>
                    <button className="post-button" onClick={post}><i className="bi bi-plus-lg plus-icon"></i> POST</button>
                </div>
            </div>
        </div>
    )
}