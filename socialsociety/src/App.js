import './App.css';
import Home from './pages/Home';
import LoginPage from './components/LoginPage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './features/loggedUserSlice';
import { currentUser } from './features/loggedUserSlice';

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(currentUser);

  useEffect(()=> {
    console.log('hello')
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
