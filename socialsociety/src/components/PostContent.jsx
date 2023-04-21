import Card from 'react-bootstrap/Card';


function PostContent(props) {
  

  return (
    <Card className="userPost">
      <Card.Body>
        <Card.Title>{props.username}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
      </Card.Body>
      <Card.Body class="post-icons">
      <i class="bi bi-heart icon-interact" style={{color: 'red'}}></i>
      <i class="bi-chat-left icon-interact"></i>
      </Card.Body>
    </Card>
    
  );
}

export default PostContent;