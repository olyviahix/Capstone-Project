import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';

export default function AddPosts() {

    
    const maxChar = 280
    const input = document.getElementById('file-upload');
    const [progress, setProgress] = useState(0);

    const uploadImage = () => {
        const display = document.getElementById('display-image');
        const file = input.files;

        console.log(file);
        display.setAttribute('src', URL.createObjectURL(file[0]))
        display.style.display = 'block';
    }

    const removeImage = () => {
        const display = document.getElementById('display-image');
        const textarea = document.getElementById('textarea-char');

        display.removeAttribute('src')
        textarea.innerText = ''
        display.style.display = 'none'
    }

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
        if((textarea.innerText.length <= 0) && 
        (display.style.display === '' || display.style.display === 'none')){
            console.log('cannot post')
        }else{
            axios.post()
        }
    }

    return (
        <div style={{border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Posts</h3>
            <div className="textarea-post" id='textarea-char' contentEditable='true' placeholder="What's happening? (Type text here.)" onKeyUp={countChar}></div>

                <div className='image-cont'>
                    <img id='display-image' className='image-src'/>
                </div>
                <div className="post-options">
                    <div style={{display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                        <label for='file-upload' className='pointer' onChange={uploadImage}>
                            <i className="bi bi-image-fill pointer">
                                <input id='file-upload' type='file' accept='image/jpeg, image/png, image/jpg' style={{display: 'none'}}/>
                            </i>
                        </label>
                        <div style={{display: 'flex', gap: '1rem'}}>
                            <i className="bi bi-emoji-smile-fill pointer"></i>
                            <i id='closeButton' class="bi bi-x-circle-fill pointer" onClick={removeImage}></i>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '8rem'}}>
                            <ProgressBar style={{width: '4rem'}} now={progress}  max={maxChar}/>
                            <span id='charCount'>{maxChar}</span>
                        </div>
                        <div>
                            <button className="post-button" onClick={post}><i className="bi bi-plus-lg plus-icon"></i> POST</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}