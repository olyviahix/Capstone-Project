import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { currentUser } from '../features/loggedUserSlice';

function PostContent() {
  const loggedInUser = useSelector(currentUser);

  return (
    <Card className="userPost">
      <Card.Body>
        <Card.Title>{loggedInUser.username}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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