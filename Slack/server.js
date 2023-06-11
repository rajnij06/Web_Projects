const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const sessions = require('./sessions');
const data = require('./src/data')

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json());

app.get('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const messages = data.getMessages();
  const userList = data.getUsers();
  res.json({ username, messages, userList });
});

app.post('/api/v1/session', (req, res) => {
  const { username } = req.body;

  if(!data.isValidUsername(username)) {
    res.status(400).json({ error: 'required-username' });
    return;
  }

  if(username === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }

  const sid = sessions.addSession(username);
  const messages = data.getMessages();
  data.addUser(username);
  const userList = data.getUsers();

  res.cookie('sid', sid);
  res.json({ username, messages, userList});
});

app.delete('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(sid) {
    res.clearCookie('sid');
  }

  if(username) {
    sessions.deleteSession(sid);
    data.removeUser(username);
  }

  res.json({ wasLoggedIn: !!username });
});

app.get('/api/v1/getMessages', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const messege = data.getMessages();

  res.json({ username, messege });
});

app.get('/api/v1/getUserName', (req, res) => {
  const sid = req.cookies.sid;
  const uname = sid ? sessions.getSessionUser(sid) : '';

  if(!sid || !uname) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json({ uname });
});

app.post('/api/v1/submitMessage', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { message } = req.body;

  data.storeMessage(username, message);
  data.addUser(username);
  const messageData = data.getMessages();
  data.addUser(username);
  const userList = data.getUsers();

  if(!message && message !== '') {
    res.status(400).json({ error: 'required-word' });
    return;
  }

  res.json({ username: username, messages: messageData, userList: userList });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));