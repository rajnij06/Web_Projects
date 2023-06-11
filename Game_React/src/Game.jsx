import './css/Game.css';
import {matchWords} from './Util';
import { useState } from 'react';

function handleLogout(props) {
    props.setUsername(null);
    props.setIsLoggedIn(false);
}

function handleSubmit(props, word, setWord) {
    props.setMessage(matchWords(word));
    setWord('');
}

function Game(props) {
    const [word, setWord] = useState('');
    return (
    <nav className="game">
        <header>
            <p>Welome {props.username}!</p>
            <nav className="log-out">
                <button type="button" onClick={() => handleLogout(props)}>Log Out</button>
            </nav>
        </header>
        <nav className="secret-word">
            <div>Type 5 letter word</div>
            <input name="word" type="text" value={word} 
            onInput={(e) => setWord(e.target.value)}/>
        </nav>
        <button type="button" onClick={ () => handleSubmit(props, word, setWord)} >Submit</button>
        <p>{props.message}</p>
    </nav>
    );
}
export default Game;