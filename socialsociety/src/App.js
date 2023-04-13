import React from 'react';
import './App.css';
import CreateUser from './Components/CreateUser'
import LoginPage from './Components/LoginPage'
import PostContent from './Components/PostContent';
// import './index.css'

function App() {
  return (
    
    <div>
     
      <LoginPage/>
      <CreateUser/>
      <PostContent/>
    </div>
  );
}

export default App;
