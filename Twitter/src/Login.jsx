import './css/style.css';
import { useState } from 'react';
import { performLogin} from './data';
import twitterLogo from './image/logo.PNG';
import {isValidUser} from './data';


function handleLogin(props, username) {
    const value = isValidUser(username);
    if (value) {
        performLogin(username, props);
    }
    else {
        props.setIsErrorPage(true);
    }
}

function Login(props) {
    const [username, setUsername] = useState('');
    return (
        <div className="log-in">
            <nav className="login-logo">
                <img src={twitterLogo} alt="plants image" />									
            </nav>		
            <nav className="login-main">
                <span className="tag-line">Don’t miss what’s happening in the world right now</span>
                <span>Enter User Name</span>
                <input className="username" type="text" value={username} onInput={(e) => setUsername(e.target.value)}/>
                <button className="login-button" type="button"  onClick={ () => handleLogin(props, username)} >Next</button>
            </nav>
        </div>
    );
}

export default Login;
