import './App.css';
import Notifications from './pages/NotificationPage';
import LoginPage from './components/LoginPage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, currentUser, getAllUsers  } from './features/loggedUserSlice';
import axios from 'axios';
import Home from '../pages/Home'
// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:7000')

function App() {

  
  const dispatch = useDispatch();
  const loggedInUser = useSelector(currentUser);

  useEffect(()=> {
    
    const foundUser = localStorage.getItem('user');
    const user = JSON.parse(foundUser)
    if(foundUser != null){
        dispatch(setCurrentUser(user));
    }
  }, []);
  
  if(loggedInUser === null){
    return (
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
        <LoginPage/>
      </div>
    )
  }
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;