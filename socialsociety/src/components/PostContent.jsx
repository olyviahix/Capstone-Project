import Card from 'react-bootstrap/Card';

function PostContent() {
  return (
    <Card className="userPost" >
      <Card.Body>
        <Card.Title>USERNAME</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body className="icons">
      <button className="bi-heart-fill"></button>
      <button className="bi-chat-left-fill"></button>
      </Card.Body>
    </Card>
    
  );
}

export default PostContent;