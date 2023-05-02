import './App.css';
import LoginPage from './components/LoginPage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { grabAllPosts } from './features/postSlice';
import { setCurrentUser, currentUser, getAllUsers  } from './features/loggedUserSlice';
import axios from 'axios';
import Home from './pages/Home'
// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:7000')

function App() {

  const url = 'http://localhost:7000';
  const dispatch = useDispatch();
  const loggedInUser = useSelector(currentUser);
  
  const fetchUsers = async () => {
    try {
          const response = await axios.get(url+'/all-users')
          if(response.data !== null){
              dispatch(getAllUsers(response.data))
          }
        } catch (err) {
        console.log(err)
      }
  }
  const fetchPost = async () => {
      try {
          const response = await axios.get(url+'/all-posts')
          if(response.data !== null){
              dispatch(grabAllPosts(response.data))
          }
      } catch (err) {
          console.log(err)
      }
  }

  useEffect(()=> {
    
    const foundUser = localStorage.getItem('user');
    const user = JSON.parse(foundUser)
    if(foundUser != null){
        dispatch(setCurrentUser(user));
        fetchUsers()
        fetchPost()
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