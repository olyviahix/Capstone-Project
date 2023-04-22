import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo_Full from '../Images/Logo_Full.png';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/loggedUserSlice";
import axios from "axios";

function LoginPage() {

  const url = 'http://localhost:7000';
  const dispatch = useDispatch();
  const [type, setType] = useState('password');
  const [display, setDisplay] = useState('Show');

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById('formUsername').value;

    axios.get(url+`/user/${username}`).then(response => {
      const foundUser = response.data;
      if(foundUser != null){
        localStorage.setItem('user', JSON.stringify(foundUser))
        dispatch(setCurrentUser(foundUser))
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <Form className="loginForm">
        <div className="formLogo">
            <img src={Logo_Full}/>
        </div>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={type} placeholder="Enter Password" />
        <input id='show-password' type='checkbox'/> <span>{display} Password</span>
      </Form.Group>
      <Button variant="secondary" type="submit" onClick={handleSubmit}>
        Login!
      </Button>
      <br></br>
      <div className="dontHaveAccount">
        <h6>Dont Have an Account? </h6>
            <Link variant="secondary" type="submit" to={'/createuser'}>
                Sign Up!
            </Link>
      </div>
    </Form> 
  );
}

export default LoginPage;