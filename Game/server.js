const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

// HTML pages
const home = require('./home');
const error = require('./error');
const user = require('./user');
const words = require('./words.js');

app.use(express.static('./public'));
app.use(cookieParser());

app.get('/', (req, res) => {
    const sid = req.cookies.sid;
    if (sid && user.isAlreadyLoggedIn(sid)) {
        const userName = user.getUserName(req);
        const guessedWordFreq = user.getGuessedWordFreq(userName);
        res.send(home.dataPage(user.getUserData(userName), userName, guessedWordFreq));    
    } else {
        res.send(home.loginPage());
    }
});

app.get('/error', (req, res) => {
    res.status(401);    
    res.send(error.errorPage());
})

app.post('/login', express.urlencoded({ extended: false }), (req, res) => {
    const { name } = req.body;
    if (user.isLoggedIn(name, req, res, words)) {
        res.redirect('/');
        user.setUserData(name);
    } else {
        res.redirect('/error');
    }
});

app.post('/new-game', express.urlencoded({ extended: false }), (req, res) => {
    const userName = user.getUserName(req);
    user.setUserData(userName, 0);
    user.getSecretWord(userName, words);
    res.redirect('/');
});

app.post('/guess', express.urlencoded({ extended: false }), (req, res) => {
    const userName = user.getUserName(req);
    const { word } = req.body;
    if (!word) {
        return;
    }
    const isWordPresent = user.checkIfWordIsGuessed(userName, word);
    user.checkWord(userName, word);
    if (!user.checkIfInavlid(word)) {
        res.redirect('/');
        return;
    }
    const scoreCur = (isNaN(user.getUserData(userName)) || isWordPresent) ? user.getUserData(userName) : parseInt(user.getUserData(userName)) + 1;
    user.setUserData(userName, scoreCur);
    res.redirect('/');
});

app.post('/logout', (req, res) => {
    user.logOut(req, res);
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));