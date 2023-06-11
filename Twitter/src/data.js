const fetch = require('./services');
 
function checkLogin(setIsLoggedIn, setUserName) {
    return fetch.fetchGet('/api/v1/session')
        .then((res) => {
            setIsLoggedIn(true);
            setUserName(res.username);
        })
        .catch((err) => {
            setIsLoggedIn(false);
        });
}

function performLogin(userName, props) {
    return fetch.fetchPost('/api/v1/session', { username: userName})
        .then((res) => {
            props.setIsLoggedIn(true);
            props.setUserName(userName);
            props.setFollowing(res.followingList);
            props.setPosts(res.posts);
            props.setWhoToFollow(res.whoToFollow);
            props.setIsErrorPage(false);
        })
        .catch((err) => {
            props.setIsLoggedIn(false);
        });
}

function performLogout(props) {
    fetch.fetchDelete('/api/v1/session')
    props.setIsLoggedIn(false);
}

function isValidUser(userName) {
    userName = userName.trim();
    const regexSpecialChars = /^[a-zA-Z0-9]*$/g;
    if (!userName || userName.toLowerCase() === "dog" || !userName.match(regexSpecialChars)) {
        return false;
    }
    return true;
}

function getPosts(setPosts, setIsLoggedIn, setIsPostDataValid, setFollowing) {
    return fetch.fetchGet('/api/v1/getPosts')
        .then((res) => {
            setFollowing(res.followingList);
            setPosts(res.posts);
            setIsPostDataValid(true);
        })
        .catch((err) => {
            setIsLoggedIn(false);
        });
}

function submitPost(username, post, props) {
    return fetch.fetchPost('/api/v1/submitPost', { username: username, post: post, love: 0})
        .then((res) => {
            props.setPosts(res.posts);
        })
        .catch((err) => {
        });
}

function unFollowUser(username, followingUser, props) {
    return fetch.fetchPost('/api/v1/unFollow', { username: username, followingUser: followingUser})
        .then((res) => {
            props.setFollowing(res.followingList);
            props.setPosts(res.posts);
            props.setWhoToFollow(res.whoToFollow);
        })
        .catch((err) => {
            console.log(err);
        });
}

function followUser(username, followingUser, props) {
    return fetch.fetchPost('/api/v1/follow', { username: username, followingUser: followingUser})
        .then((res) => {
            props.setFollowing(res.followingList);
            props.setPosts(res.posts);
            props.setWhoToFollow(res.whoToFollow);
        })
        .catch((err) => {
            console.log(err);
        });
}

function reTweet(username, post, props) {
    return fetch.fetchPost('/api/v1/reTweet', { username: username, post: post})
        .then((res) => {
            props.setFollowing(res.followingList);
            props.setPosts(res.posts);
            props.setWhoToFollow(res.whoToFollow);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    checkLogin,
    performLogin,
    isValidUser,
    performLogout,
    getPosts,
    submitPost,
    unFollowUser,
    followUser,
    reTweet
};