"use strict";

const messageData = [];
const userList = [];

function storeMessage(username, message) {
    const messageObject = {};
    messageObject[username] = message;
    messageData.push(messageObject);    
}

function getMessages() {
    return messageData;
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

module.exports = {
    storeMessage,
    getMessages,
    addUser,
    getUsers,
    removeUser,
    isValidUsername,
};