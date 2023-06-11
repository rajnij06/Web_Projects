const { v4: uuidv4 } = require('uuid');
const words = require('./words.js');

const userActive = {};
const userData = {};
const secretWord = {};
const userGuessedWords = {};
const guessedWordFreq = {};

function isLoggedIn(username, req, res, word) {
    if (userActive[username]) {
        return true;
    } 
    if (!secretWord[username]) {
        getSecretWord(username, word);
    }
    username = username.trim();
    const regexSpecialChars = /^[a-zA-Z0-9]*$/g;
    if (!username || username.toLowerCase() == "dog" || !   username.match(regexSpecialChars)) {
        return false;
    }
    const sid = uuidv4();
    userActive[sid] = username;
    res.cookie('sid', sid);
    return true;
} 

function isAlreadyLoggedIn(sid) {
    if (userActive[sid]) return true;
    return false;
}

function logOut(req, res) {
    const sid = req.cookies.sid;
    delete userActive[sid];
    res.clearCookie('sid');
}

function getUserData(username) {
    return userData[username];
}

function setUserData(uname, score = "login") {
    if (score == "login") {
        if (!userData[uname]) {
            userData[uname] = 0;
        }
    } else {
        userData[uname] = score;
    }
}

function checkWord(uname, word) {
    const recentWordArray = getGuessedWordFreq(uname);
    const wordList = getGuessedWord(uname);
    if (secretWord[uname] == word) {
        userData[uname] = userData[uname] + " You Win";        
        recentWordArray.unshift(word + "|You Win");
    }
    else if (wordList == "" && words.includes(word) && !checkIfWordIsGuessed(uname, word)) {
        userGuessedWords[uname] = word;
        recentWordArray.unshift(word + "|"+getNoOfMatches(word, secretWord[uname]));
    } else if (words.includes(word) && !checkIfWordIsGuessed(uname, word)) {
        userGuessedWords[uname] = wordList + ",  " + word;
        recentWordArray.unshift(word + "|"+getNoOfMatches(word, secretWord[uname]));
    } else {
        recentWordArray.unshift(word + "|Invalid");
    }
    guessedWordFreq[uname] = recentWordArray;
}

function checkIfWordIsGuessed(uname, word) {
    let wordArray = getGuessedWord(uname);
    if (wordArray.length && wordArray.includes(word)) {
        return true;
    }
    return false;
}

function checkIfInavlid(word) {
    if (words.includes(word)) return true;
    return false;
}

function getUserName(req) {
    const sid = req.cookies.sid;
    return userActive[sid];
}

function getGuessedWord(uname) {
    if (userGuessedWords[uname]) {
        return userGuessedWords[uname];
    } else {
        return "";
    }
}

function getSecretWord(uname, word) {
    const index = Math.floor(Math.random() * word.length);
    secretWord[uname] = word[index];
    console.log("User Name: " + uname + "\nSecret Word : " + word[index]);    //to print name and secret word
    userGuessedWords[uname] = "";
    guessedWordFreq[uname] = [];
}

function getNoOfMatches(word, secretWord) {
    word = word.toUpperCase();
    secretWord = secretWord.toUpperCase();
    let count = 0;
    const charObj = {};
    for (let index = 0; index < word.length; index++) {
        let currChar = word[index];
        if (charObj[currChar] === undefined) {
            charObj[currChar] = 1; 
        }   
        else {
            charObj[currChar] = charObj[currChar] + 1;
        }
    }
    for (let index = 0; index < secretWord.length; index++) {
        let currChar = secretWord[index];
        if (charObj[currChar] !== undefined && charObj[currChar] > 0) {
            count++;
            charObj[currChar] = charObj[currChar] - 1;
        }
    }
    return count;
}

function getGuessedWordFreq(uname) {
    if (guessedWordFreq[uname]) {
        return guessedWordFreq[uname];
    } else {
        return [];
    }
}

const user = {
    isLoggedIn,
    isAlreadyLoggedIn,
    logOut,
    getUserData,
    setUserData,
    checkWord,
    getUserName,
    getGuessedWord,
    getSecretWord,
    getNoOfMatches,
    getGuessedWordFreq,
    checkIfInavlid,
    checkIfWordIsGuessed,
};

module.exports = user;