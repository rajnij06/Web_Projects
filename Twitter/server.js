const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const sessions = require('./sessions');
const data = require('./serverData')

app.use(cookieParser());
app.use(express.static('./build'));
app.use(express.json());


app.get('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json({ username });
});

app.post('/api/v1/session', (req, res) => {
  const { username } = req.body;
  console.log(username);

  const sid = sessions.addSession(username);
  data.makeDefaultFollow(username);
  const followingList = data.getFollowingList(username);
  const posts = data.getPosts(followingList, username);
  const whoToFollow = data.whoToFollow(username);
  console.log(whoToFollow);

  res.cookie('sid', sid);
  res.json({ username, posts, followingList, whoToFollow });
});

app.delete('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(sid) {
    res.clearCookie('sid');
  }

  if(username) {
    sessions.deleteSession(sid);
  }
  res.json({ wasLoggedIn: !!username });
});

app.get('/api/v1/getPosts', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const followingList = data.getFollowingList(username);
  const posts = data.getPosts(followingList, username);
  const whoToFollow = data.whoToFollow(username);

  res.json({ username, posts, followingList, whoToFollow });
});

app.post('/api/v1/submitPost', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { post, love } = req.body;
  data.storePost(username, post, love);
  const followingList = data.getFollowingList(username);
  const posts = data.getPosts(followingList, username);
  const whoToFollow = data.whoToFollow(username);

  res.json({ posts: posts, followingList: followingList, whoToFollow: whoToFollow });
});

app.post('/api/v1/unFollow', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { followingUser } = req.body;
  data.unFollow(username, followingUser);
  const followingList = data.getFollowingList(username);
  const posts = data.getPosts(followingList, username);
  const whoToFollow = data.whoToFollow(username);

  res.json({ posts: posts, followingList: followingList, whoToFollow: whoToFollow });
});

app.post('/api/v1/follow', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { followingUser } = req.body;
  data.follow(username, followingUser);
  const followingList = data.getFollowingList(username);
  const posts = data.getPosts(followingList, username);
  const whoToFollow = data.whoToFollow(username);

  res.json({ posts: posts, followingList: followingList, whoToFollow: whoToFollow });
});

app.post('/api/v1/reTweet', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { post } = req.body;
  data.reTweet(username, post);
  const followingList = data.getFollowingList(username);
  const posts = data.getPosts(followingList, username);
  const whoToFollow = data.whoToFollow(username);

  res.json({ posts: posts, followingList: followingList, whoToFollow: whoToFollow });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));