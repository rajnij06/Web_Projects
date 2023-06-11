"use strict";

import * as Service from './services.js'

export function render() {
    const isLoggedIn = Service.makeGETFetchCall('/api/v1/session');
    isLoggedIn
    .then((res) => {
        const uname = res.username;
        const messages = res.messages;
        const userList = res.userList;
        renderLoggedIn(uname, messages, userList);
    })
    .catch((err) => {
        renderLogin();
    })
}

export function renderLogin() {
    const connectEl = document.querySelector('#page');
    connectEl.innerHTML = `
        <nav class="log-in-page">
            <h1>Catchat</h1>	
            <div class="forms">
                <nav class="log-in">
                        <div>Enter User Name<span>*</span></div>						
                        <input class="uname" name="name" type="text">					
                </nav>			
                <button class="submitLogin" type="submit">Contine</button>	
            </div>
        </nav>
    `;
}

export function renderLoggedIn(username, message, users) {
    const listMessages = message && message.map((message) => {
        for(let details in message){
            const className = details == username ? "own" : "sender";
            return `
                <ul class="${className}">
                    <li>${details}</li>
                    <p>${message[details]}</p>
                </ul>
            `;
        }
    }).join('');
    const listUsers = users && users.map((user) => {
        return `
            <li>${user}</li>
        `;
    }).join('');
    const connectEl = document.querySelector('#page');
    connectEl.innerHTML = ` 
        <header>		
        <h1>CatChat</h1>
        <nav class="profile">
            <img height="30px" width="30px" class="profile-logo" src="images/profileLogo.png" alt="image">	
            <ul class="user-details">
                <li>Hello, ${username}</li>	
                <li>Status: Active</li>
            </ul>
        </nav>
        <nav class="log-out">
            <button data-uname="${username}" class="logout" type="submit" >Log Out</button>
        </nav>
    </header>					
    <div id="app">
        <div id="usersList">
            <nav class="group">
                <a class="active-members">Active members</a>
                <ul class="members">
                    ${listUsers}
                </ul>
            </nav>  
        </div>
        <nav class="chat-box">
            <div id="messagesList">
                <nav class="messeges">
                    ${listMessages}
                </nav>
            </div>
            <nav class="type-msg">
                <div class="showLoading">
                </div>
                <textarea class="messege" name="message" placeholder="Write something..." ></textarea><br>
                <input class="submitMessage" type="submit" value="Send">
            </nav>
        </nav>  
    </div>
    `;
    let objDiv = document.querySelector('.messeges');
    objDiv.scrollTop = objDiv.scrollHeight;
}

export function renderError() {
    const connectEl = document.querySelector('#page');
    connectEl.innerHTML = `
        <nav class="log-in-page">
            <nav class="error-message">
                <li>Incorrect log in user name</li>
                <li><a href="/">Go back to LogIn page</a></li>
            </nav>
        </nav>
    `;
}

export function updateUsersList(users) {
    const userList = document.querySelector('#usersList');
    const listUsers = users && users.map((user) => {
        return `
            <li>${user}</li>
        `;
    }).join('');
    userList.innerHTML = `
    <nav class="group">
        <a class="active-members">Active members</a>
        <ul class="members">
            <li>${listUsers}</li>
        </ul>
    </nav>  
    `;
}

export function showLoading() {
    const userList = document.querySelector('#usersList');
    userList.innerHTML = `
        <nav class="group">
            <a class="active-members">Active members</a>
            <ul class="members">
                <div class="loader"></div>
            </ul>
        </nav>  
    `;
    const messageLoading = document.querySelector('.showLoading');
    messageLoading.innerHTML = `
        <div class="loader"></div>
    `;
}

export function removeLoading() {
    const messageLoading = document.querySelector('.showLoading');
    messageLoading.innerHTML = ``;
}

export function updateMessagesList(username, message) {
    const messageList = document.querySelector('#messagesList');
    const listMessages = message && message.map((message) => {
        for(let details in message){
            const className = details == username ? "own" : "sender";
            return `
                <ul class="${className}">
                    <li>${details}</li>
                    <p>${message[details]}</p>
                </ul>
            `;
        }
    }).join('');
    messageList.innerHTML = `
        <nav class="messeges">
            ${listMessages}
        </nav>
    `;
    let objDiv = document.querySelector('.messeges');
    objDiv.scrollTop = objDiv.scrollHeight;
}