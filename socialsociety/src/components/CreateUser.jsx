import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import Logo_Full from '../Images/Logo_Full.png'

function CreateUser() {
  return (
    <Form className="createUserForm">
        <div className="formLogo">
            <img src={Logo_Full}/>
        </div>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Control type="firstName" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Control type="lastName" placeholder="Last Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Control placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridUsername">
        <Form.Control placeholder="Create Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPassword">
        <Form.Control placeholder="Create Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPassword">
        <Form.Control placeholder="Confirm Password" />
      </Form.Group>

      <Button variant="secondary" type="submit">
        Create User
      </Button>
      
    </Form>
  );
}

export default CreateUser;

