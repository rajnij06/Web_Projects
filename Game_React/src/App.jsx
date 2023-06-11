import './css/App.css';
import Login from './Login';
import Game from './Game';
import Error from './Error';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [isvaliduser, setValiduser] = useState(true);
  return (
    <div className="app">
      { isLoggedIn ? <Game 
                      username={username} 
                      setUsername={setUsername} 
                      setIsLoggedIn={setIsLoggedIn} 
                      message={message} 
                      setMessage={setMessage}/> : 
      isvaliduser ? <Login username={username} 
             setUsername={setUsername} 
             setIsLoggedIn={setIsLoggedIn} 
             setValiduser={setValiduser}/> :
             <Error/>}
    </div>
  );
}

export default App;