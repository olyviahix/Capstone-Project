import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';

export default function AddPosts() {

    
    const maxChar = 280
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
    return (
        <div style={{border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>Posts</h3>
            <div className="textarea-post" id='textarea-char' contentEditable='true' placeholder="What's happening? (Type text here.)" onKeyUp={countChar}></div>
            <div className="post-options">
                <div style={{margin: '15px 0 0 30px', display: 'flex', gap: '2rem', alignItems: 'center'}}>
                    <i className="bi bi-image-fill pointer"></i>
                    <i className="bi bi-emoji-smile-fill pointer"></i>
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '12rem'}}>
                        <ProgressBar style={{width: '4rem'}} now={progress}  max={maxChar}/>
                        <span id='charCount'>{maxChar}</span>
                    </div>
                </div>
                <div>
                    <button className="post-button"><i className="bi bi-plus-lg plus-icon"></i> POST</button>
                </div>
            </div>
        </div>
    )
}