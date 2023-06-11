const user = require('./user');
const words = require('./words.js');

const home = {
    loginPage: function() {
        return `
          <!doctype html>
          <html>
            <head>
                <link rel="stylesheet" type="text/css" href="css/style.css" />
            </head>
            <body>
                <div id="page">		
                    <h1>Guess The Word</h1>	
                    <div class="forms">
                        <h2>Login</h2>
                        <form action="/login" method="POST">
                            <nav class="log-in">
                                <div>Enter User Name</div>						
                                <input name="name" type="text">					
                            </nav>			
                            <button type="submit">Submit</button>				
                        </form>
                    </div>
                </div>
            </body>
        </html>
      `;
      },
      dataPage: function(score, userName, guessedWordFreq) {
        const htmlWordValue = words.map(function(word){
            return `
            <a>${word}</a>
            `
        })
        if (!score) {
            score = "0";
        } 
        const htmlTableValue = guessedWordFreq.map(function(wordFreq){
            const wordFreqArray = wordFreq.split("|");
            return `
            <tr>
            <td>${wordFreqArray[0]}</td>
            <td>${wordFreqArray[1]}</td>
            </tr>
            `
        }) 
        const htmlGuessValue = guessedWordFreq.map(function(guessFreq){
            const wordFreqArray = guessFreq.split("|");
            if (wordFreqArray[1].includes("Invalid")) {
                return;
            } else {
                return `
                <a>${wordFreqArray[0]}</a>
                `
            }
        })
        let isButtonDisabled = false;
        for (let i = 0; i < guessedWordFreq.length; i++) {
            const wordFreqArray = guessedWordFreq[i].split("|");
            if (wordFreqArray[1].includes("Win")) {
                isButtonDisabled = true;
            }
        }
        return `
            <!doctype html>
            <html>
            <head>
                <link rel="stylesheet" type="text/css" href="css/style.css"/>
            </head>
            <body>
                <div id="page">		
                    <nav class="new-game">
                        <form action="/new-game" method="POST">
                            <button type="submit" >Start New Game</button>
                        </form>
                    </nav>	
                    <h1>Guess The Word</h1> 
                    <nav class="log-out">
                        <form action="/logout" method="POST">
                            <button type="submit" >Log Out</button>
                        </form>
                    </nav>
                    <nav class="word-list">
                        <h2>Words</h2>
                        <div>
                            ${htmlWordValue.join(" ")}
                        </div>
                    </nav>            
                    <nav class="main">
                        <form action="/guess" method="POST">
                            <nav class="word">
                                    <div>Hello ${userName}, please enter a Word</div>						
                                    <input name="word" type="text" ${isButtonDisabled ? 'disabled' : ''}>	
                                    <button type="submit" ${isButtonDisabled ? 'disabled' : ''}>Submit</button>				
                            </nav>			                            				
                        </form>
                        <div class="score">
                            <li>Score : ${score}</li>
                        </div>
                        <nav class="recent-guess">
                            <li>Most recent guess</li>
                            <table>
                                <tr>
                                <th>Words</th>
                                <th>Match</th>
                                </tr>  
                                ${htmlTableValue.join(" ")}                            
                            </table>
                        </nav>
                    </nav>
                    <nav class="guess-list">
                        <h2>Guessed Words</h2>  
                        <div>
                        ${htmlGuessValue.join(" ")}
                        </div>
                    </nav> 
                </div>
            </body>
        </html>
      `;
      },
}

module.exports = home;