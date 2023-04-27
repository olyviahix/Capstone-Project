import './App.css';
import Notifications from './pages/NotificationPage';
import LoginPage from './components/LoginPage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './features/loggedUserSlice';
import { currentUser } from './features/loggedUserSlice';
import Home from './pages/Home';
import Popup from './components/Popup';
import InterestsModal from './components/InterestsModal';


function App() {
  // const dispatch = useDispatch();
  // const loggedInUser = useSelector(currentUser);
  // useEffect(()=> {
  //   const foundUser = JSON.parse(localStorage.getItem('user'));
  //   if(foundUser != null){
  //     dispatch(setCurrentUser(foundUser));
  //   }
  // }, 
  // [])
  // if(loggedInUser === null){
  //   return (
  //     <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
  //       <LoginPage/>
  //     </div>
  //   )
  // }
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
