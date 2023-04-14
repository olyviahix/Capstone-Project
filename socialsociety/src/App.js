import './App.css';
import Home from './pages/Home';
import LoginPage from './components/LoginPage';

function App() {
  const loggedInUser = false;

  if(loggedInUser === false){
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
