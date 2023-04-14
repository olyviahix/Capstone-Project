import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Logo_Full from '../Images/Logo_Full.png';

function CreateUser() {
  const username = document.getElementById('formGridUsername');
  const userEmail = document.getElementById('formGridEmail');
  const firstName = document.getElementById('formGridFirstName');
  const lastName = document.getElementById('formGridLastName');
  const password = document.getElementById('formGridPassword');
  const passwordVerified = document.getElementById('formGridPassword-Verified');

  const check = () => {
    if (document.getElementById('formGridPassword').value ===
    document.getElementById('formGridPassword-Verified').value) {
      document.getElementById('formGridPassword-Verified').style.border = '2px solid lightgreen';
      document.getElementById('formGridPassword-Verified').style.borderRadius = '7px';
    } else {
      document.getElementById('formGridPassword-Verified').style.border = '2px solid red';
      document.getElementById('formGridPassword-Verified').style.borderRadius = '7px';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.value === passwordVerified.value && password.value != null){
      const user = {
        username: username.value,
        email: userEmail.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: passwordVerified.value
      }
    }

  }
  return (
    <Form className="createUserForm">
        <div className="formLogo">
            <img src={Logo_Full}/>
        </div>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Control type='email' placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridUsername">
        <Form.Control type='text' placeholder="Create Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPassword">
        <Form.Control type='password' placeholder="Create Password" onKeyUp={()=>{check()}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPassword-Verified">
        <Form.Control type='password' placeholder="Confirm Password" onKeyUp={()=>{check()}} />
      </Form.Group>

      <Button variant="secondary" type='submit'>
        Create User
      </Button>
      <div class="dontHaveAccount">
        <h6>Have an Account already? </h6>
            <Link variant="secondary" type="submit" to={'/'}>
                Log In!
            </Link>
      </div>
      
    </Form>
  );
}

export default CreateUser;

