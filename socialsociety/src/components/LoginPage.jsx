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
  const [ confirmation, setConfirmation] = useState('')
  
  const showAndHide = () => {
    if(document.getElementById('show-password').checked){
      setType('text');
      setDisplay('Hide');
    }else{
      setType('password');
      setDisplay('Show');
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById('formUsername').value;
    const password = document.getElementById("formBasicPassword").value
    const banner = document.getElementById("banner-pop")

    axios.get(url+`/user/${username}/${password}`).then(response => {
      const foundUser = response.data;
      console.log('api call')
      if(foundUser){
        localStorage.setItem('user', JSON.stringify(foundUser))
        dispatch(setCurrentUser(foundUser))
        setConfirmation('Login Successfull.')
        banner.style.color = 'green'
      }else if (foundUser === null){
        setConfirmation('Login Unsuccessful')
        banner.style.color = 'red'
      }
    }).catch(err => {
      setConfirmation('Login Unsuccessful')
      banner.style.color = 'red'
    })
  }

  return (
    <Form className="loginForm">
        <div className="formLogo">
            <img alt="logo" src={Logo_Full}/>
        </div>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
        <Form.Text className="text-muted">
          We'll never share your information with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={type} placeholder="Enter Password" />
        <input id="show-password" type='checkbox' onChange={showAndHide}/> <span>{display} Password</span>
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
            <span id="banner-pop" style={{marginTop: '3rem'}}>{confirmation}</span>
      </div>
       
    </Form> 
  );
}

export default LoginPage;