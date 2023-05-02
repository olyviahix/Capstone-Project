import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser, addLikedPost } from '../features/loggedUserSlice';
import { removePost, showAll } from '../features/postSlice';
import { useEffect } from 'react';
import io from 'socket.io-client'
import axios from 'axios';
import { add } from 'date-fns';
const socket = io.connect('http://localhost:7000')

function PostContent(props) {
  
  const url = 'http://localhost:7000';
  const dispatch = useDispatch()
  const imgTag = document.getElementById('post-image');
  const loggedInUser = useSelector(currentUser)
  const allPosts = useSelector(showAll)
  const [iconClass, setIconClass] = useState(props.likes >= 1 ? "bi bi-heart-fill icon-interact": "bi bi-heart icon-interact")
  const [deleteOptions, setDeleteOptions] = useState()

  const onNotify = async () => {
    const send = {
      notification: `${loggedInUser.username} liked ${props.username} post.`
    }
    if(iconClass === "bi bi-heart icon-interact"){
      try {
        const response = await axios.put(url+`/update-likes/${props.uuid}`)
        if(response.data === 'Success.'){
          socket.emit('send-notif', send)
          dispatch(addLikedPost(props.item))
          setIconClass("bi bi-heart-fill icon-interact")
        }
      } catch(err){
        console.log(err)
      }
    } else {
      try {
        const response = await axios.put(url+`/decrement-likes/${props.uuid}`)
        if(response.data === 'Success.'){
          setIconClass("bi bi-heart icon-interact")
        }
      } catch (err){
        console.log(err)
      }
    }
  }
  const respToggle = () => {
    const toggle = document.querySelector('.toggle-btn');
    const toggleIcon = document.querySelector('.toggle-btn i');
    const dropdown = document.getElementById(props.id);
    dropdown.classList.toggle('open')
    const isOpen = dropdown.classList.contains('open')

}
const deletePost = async () => {
  try {
    const response = await axios.delete(url+`/delete-post/${props.uuid}`)
      if(response.data === 'Success.'){
        const index = allPosts.map((item)=> item.uuid).indexOf(props.uuid)
        if(index != 1){
          console.log(index)
          return dispatch(removePost(index))
        }
      }
  } catch (err){
    console.log(err)
  }
}
const erasePost = async () => {
    const user = loggedInUser.username
    if(props.username === user){
      setDeleteOptions(<li className='remove-li' onClick={deletePost}>Delete Post</li>)
      
    }else {
      if(iconClass == "bi bi-heart icon-interact"){
        setDeleteOptions(<li className='remove-li' onClick={()=>{console.log('post liked')}}>Like post</li>)
      }else{
        setDeleteOptions(<li className='remove-li' onClick={()=>{console.log('post unliked')}}>Unlike post</li>)
        console.log(deleteOptions)
      }
    }
  }
  return (
    <>
    <Card className="userPost">
      <Card.Body>
        <Card.Title style={{display: 'flex', gap: '.5rem',textAlign: 'left', fontWeight: 'bold', }}><i class="bi bi-person-circle"></i><span>{props.username}</span></Card.Title>
        <Card.Text style={{textAlign: 'left'}}>
          {props.content}
        </Card.Text>
      </Card.Body>
      <Card.Body class="post-icons">
        {
          // like feature ---  some sort of axios api call needs to happen here.
        }
        <span>{props.time}</span>
        <span style={{fontWeight: 'bold', fontSize: '18px'}}>{props.likes}</span><i class={iconClass} style={{color: 'red'}} onClick={onNotify}></i>
        <div className="toggle-btn" onClick={respToggle}>
          <i class="bi bi-three-dots" onClick={erasePost}></i>
        </div>
      </Card.Body>
    </Card>
          <div className="dropdown" id={props.id}>
              {deleteOptions}
          </div>
    </>
    
  );
}

export default PostContent;