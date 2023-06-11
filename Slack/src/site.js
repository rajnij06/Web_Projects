"use strict";

import * as Service from './services.js'
import {render, renderLoggedIn, renderError, renderLogin, showLoading, updateMessagesList, updateUsersList, removeLoading} from './render';

(function() {
    const connectEl = document.querySelector('#page');
    const userMessages = {};
    connectEl.addEventListener('click', (event) => {
        if (event.target.classList.contains('submitLogin')) {
            const uname = document.getElementsByClassName("uname")[0].value;
            const submitLogin = Service.makeFetchCallWithBody('/api/v1/session', JSON.stringify({username : uname}), 'POST');
            submitLogin
            .then((res) => {
                const uname = res.username;
                const messages = res.messages;
                const userList = res.userList;
                renderLoggedIn(uname, messages, userList);
            })
            .catch((err) => { 
                renderError();
            })
            return;
        } 

        if (event.target.classList.contains('submitMessage')) {
            const messege = document.getElementsByClassName("messege")[0].value;
            if (!messege) return;
            const submitMessage = Service.makeFetchCallWithBody('/api/v1/submitMessage', JSON.stringify({message : messege}), 'POST');
            submitMessage
            .then((res) => {
                const uname = res.username;
                const messages = res.messages;
                const usersList = res.userList;
                renderLoggedIn(uname, messages, usersList);
            })
            .catch((err) => { 
                renderLogin();
            })
            return;
        }
        
        if (event.target.classList.contains('logout')) {
            Service.makeDELETEFetchCall('/api/v1/session');
            renderLogin();
        } 
    });

    let messageListDiv = document.getElementById("messagesList");
    messageListDiv && (messageListDiv.scrollTop = objDiv.scrollHeight);

    // Check for new users or messages every 5seconds.
    const interval = setInterval(function() { 
        showLoading(); // Showing loading spinner for 0.5 seconds achieved by using setTimeout in line 62.
        const isLoggedIn = Service.makeGETFetchCall('/api/v1/session');
        isLoggedIn
        .then((res) => {      
            const userList = res.userList; 
            const messages = res.messages;
            const uname = res.username;
            setTimeout(() => {
                removeLoading();
                updateUsersList(userList);
                updateMessagesList(uname, messages);
              }, "500")
        })
        .catch((err) => {
            renderLogin();
        })
    }, 5000);
    render();
})();