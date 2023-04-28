import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';

function PostContent(props) {
  
  const imgTag = document.getElementById('post-image');
 
  return (
    <Card className="userPost">
      <Card.Body>
        <Card.Title>{props.username}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
      </Card.Body>
      <Card.Body class="post-icons">
        {
          // like feature ---  some sort of axios api call needs to happen here.
        }
        <i class="bi bi-heart icon-interact" style={{color: 'red'}}></i>
        <i class="bi-chat-left icon-interact"></i>
      </Card.Body>
    </Card>
    
  );
}

export default PostContent;