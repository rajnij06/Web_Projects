import './css/Login.css';
import {isValidUser} from './Util';
import { useState } from 'react';

function handleLogin(props, username) {
    const value = isValidUser(username);
    if (value) {
        props.setValiduser(true);
        props.setUsername(username);
        props.setIsLoggedIn(true);
    }
    else {
        props.setValiduser(false);
    }
}

function Login(props) {
    const [username, setUsername] = useState('');
    return (
        <nav className="log-in">
            <div>Enter User Name<span>*</span></div>
            <input name="name" type="text" value={username}
            onInput={(e) => setUsername(e.target.value)}/>       
            <button type="button" onClick={ () => handleLogin(props, username)} >Submit</button>
        </nav>
    );
}
export default Login;