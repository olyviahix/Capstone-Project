import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo_Full from '/Users/olyviahix/Desktop/DigitalCrafts/Capstone-Project/socialsociety/src/Images/Logo_Full.png'

function LoginPage() {
  return (
    <Form className="loginForm">
        <div className="formLogo">
            <img src={Logo_Full}/>
        </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Login!
      </Button>
      <br></br>
      <div class="dontHaveAccount">
        <h6>Dont Have an Account? </h6>
            <Button variant="secondary" type="submit">
                Sign Up!
            </Button>
      </div>
    </Form> 
  );
}

export default LoginPage;