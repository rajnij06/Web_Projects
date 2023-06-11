"use strict";

const postData = [
    {name: "Elon Musk", post : "How are you doing ??", love: 5},
    {name: "Grumpy Cat", post : "How is the weather ??", love: 200},
    {name: "Fiona", post : "I have got some catitude.", love: 100},
];
const userList = ["Elon Musk", "Grumpy Cat", "Fiona"];
const followingList = { };

function storePost(username, post, love) {
    const messageObject = {};
    messageObject.name = username;
    messageObject.post = post;
    messageObject.love = love;
    postData.push(messageObject);    
}

function getPosts(followingList, username) {
    let postObject = [];
    for (let i = 0; i < postData.length; i++) {
        if (followingList.includes(postData[i].name) || username == postData[i].name) {
            postObject.push(postData[i]);
        }
    }
    return postObject;
}

function whoToFollow(userName) {
    const currentlyFollowing = followingList[userName];
    let listToFollow = currentlyFollowing && userList.filter(function (user) {
        return !currentlyFollowing.includes(user) && user !=userName;
    });
    return listToFollow ?? [];
}

function addUser(username) {
    if (!userList.includes(username)) {
        userList.push(username);
    }
}

function getUsers() {
    return userList;
}

function removeUser(username) {
    const index = userList.indexOf(username);
    if (index > -1) { 
        userList.splice(index, 1);
    }
}

function isValidUsername(username) {
    let isValid = true;
    isValid = isValid && username.trim();
    isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
    return isValid;
}

function makeDefaultFollow(username) {
    if (!userList.includes(username)) {
        userList.push(username);
        followingList[username] = ["Grumpy Cat", "Fiona"];
    }
}

function getFollowingList(username) {
    return followingList[username] ?? [];
}

function unFollow(username, followingUser) {
    let currentList = followingList[username];
    const index = currentList.indexOf(followingUser);
    if (index > -1) { 
        currentList.splice(index, 1); 
    }
    followingList[username] = currentList;
}

function follow(username, followingUser) {
    let currentList = followingList[username];
    currentList.push(followingUser);
    followingList[username] = currentList;
}

function reTweet(username, post) {
    const messageObject = {};
    messageObject.name = username;
    messageObject.post = post;
    messageObject.love = 0;
    postData.push(messageObject); 
}

module.exports = {
    storePost,
    getPosts,
    addUser,
    getUsers,
    removeUser,
    isValidUsername,
    makeDefaultFollow,
    getFollowingList,
    unFollow,
    whoToFollow,
    follow,
    reTweet,
};