/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeLoading": () => (/* binding */ removeLoading),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderError": () => (/* binding */ renderError),
/* harmony export */   "renderLoggedIn": () => (/* binding */ renderLoggedIn),
/* harmony export */   "renderLogin": () => (/* binding */ renderLogin),
/* harmony export */   "showLoading": () => (/* binding */ showLoading),
/* harmony export */   "updateMessagesList": () => (/* binding */ updateMessagesList),
/* harmony export */   "updateUsersList": () => (/* binding */ updateUsersList)
/* harmony export */ });
/* harmony import */ var _services_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.js */ "./src/services.js");



function render() {
  var isLoggedIn = _services_js__WEBPACK_IMPORTED_MODULE_0__.makeGETFetchCall('/api/v1/session');
  isLoggedIn.then(function (res) {
    var uname = res.username;
    var messages = res.messages;
    var userList = res.userList;
    renderLoggedIn(uname, messages, userList);
  })["catch"](function (err) {
    renderLogin();
  });
}
function renderLogin() {
  var connectEl = document.querySelector('#page');
  connectEl.innerHTML = "\n        <nav class=\"log-in-page\">\n            <h1>Catchat</h1>\t\n            <div class=\"forms\">\n                <nav class=\"log-in\">\n                        <div>Enter User Name<span>*</span></div>\t\t\t\t\t\t\n                        <input class=\"uname\" name=\"name\" type=\"text\">\t\t\t\t\t\n                </nav>\t\t\t\n                <button class=\"submitLogin\" type=\"submit\">Contine</button>\t\n            </div>\n        </nav>\n    ";
}
function renderLoggedIn(username, message, users) {
  var listMessages = message && message.map(function (message) {
    for (var details in message) {
      var className = details == username ? "own" : "sender";
      return "\n                <ul class=\"".concat(className, "\">\n                    <li>").concat(details, "</li>\n                    <p>").concat(message[details], "</p>\n                </ul>\n            ");
    }
  }).join('');
  var listUsers = users && users.map(function (user) {
    return "\n            <li>".concat(user, "</li>\n        ");
  }).join('');
  var connectEl = document.querySelector('#page');
  connectEl.innerHTML = " \n        <header>\t\t\n        <h1>CatChat</h1>\n        <nav class=\"profile\">\n            <img height=\"30px\" width=\"30px\" class=\"profile-logo\" src=\"images/profileLogo.png\" alt=\"image\">\t\n            <ul class=\"user-details\">\n                <li>Hello, ".concat(username, "</li>\t\n                <li>Status: Active</li>\n            </ul>\n        </nav>\n        <nav class=\"log-out\">\n            <button data-uname=\"").concat(username, "\" class=\"logout\" type=\"submit\" >Log Out</button>\n        </nav>\n    </header>\t\t\t\t\t\n    <div id=\"app\">\n        <div id=\"usersList\">\n            <nav class=\"group\">\n                <a class=\"active-members\">Active members</a>\n                <ul class=\"members\">\n                    ").concat(listUsers, "\n                </ul>\n            </nav>  \n        </div>\n        <nav class=\"chat-box\">\n            <div id=\"messagesList\">\n                <nav class=\"messeges\">\n                    ").concat(listMessages, "\n                </nav>\n            </div>\n            <nav class=\"type-msg\">\n                <div class=\"showLoading\">\n                </div>\n                <textarea class=\"messege\" name=\"message\" placeholder=\"Write something...\" ></textarea><br>\n                <input class=\"submitMessage\" type=\"submit\" value=\"Send\">\n            </nav>\n        </nav>  \n    </div>\n    ");
  var objDiv = document.querySelector('.messeges');
  objDiv.scrollTop = objDiv.scrollHeight;
}
function renderError() {
  var connectEl = document.querySelector('#page');
  connectEl.innerHTML = "\n        <nav class=\"log-in-page\">\n            <nav class=\"error-message\">\n                <li>Incorrect log in user name</li>\n                <li><a href=\"/\">Go back to LogIn page</a></li>\n            </nav>\n        </nav>\n    ";
}
function updateUsersList(users) {
  var userList = document.querySelector('#usersList');
  var listUsers = users && users.map(function (user) {
    return "\n            <li>".concat(user, "</li>\n        ");
  }).join('');
  userList.innerHTML = "\n    <nav class=\"group\">\n        <a class=\"active-members\">Active members</a>\n        <ul class=\"members\">\n            <li>".concat(listUsers, "</li>\n        </ul>\n    </nav>  \n    ");
}
function showLoading() {
  var userList = document.querySelector('#usersList');
  userList.innerHTML = "\n        <nav class=\"group\">\n            <a class=\"active-members\">Active members</a>\n            <ul class=\"members\">\n                <div class=\"loader\"></div>\n            </ul>\n        </nav>  \n    ";
  var messageLoading = document.querySelector('.showLoading');
  messageLoading.innerHTML = "\n        <div class=\"loader\"></div>\n    ";
}
function removeLoading() {
  var messageLoading = document.querySelector('.showLoading');
  messageLoading.innerHTML = "";
}
function updateMessagesList(username, message) {
  var messageList = document.querySelector('#messagesList');
  var listMessages = message && message.map(function (message) {
    for (var details in message) {
      var className = details == username ? "own" : "sender";
      return "\n                <ul class=\"".concat(className, "\">\n                    <li>").concat(details, "</li>\n                    <p>").concat(message[details], "</p>\n                </ul>\n            ");
    }
  }).join('');
  messageList.innerHTML = "\n        <nav class=\"messeges\">\n            ".concat(listMessages, "\n        </nav>\n    ");
  var objDiv = document.querySelector('.messeges');
  objDiv.scrollTop = objDiv.scrollHeight;
}

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchLogin": () => (/* binding */ fetchLogin),
/* harmony export */   "makeDELETEFetchCall": () => (/* binding */ makeDELETEFetchCall),
/* harmony export */   "makeFetchCallWithBody": () => (/* binding */ makeFetchCallWithBody),
/* harmony export */   "makeGETFetchCall": () => (/* binding */ makeGETFetchCall)
/* harmony export */ });
function fetchLogin(username) {
  return fetch('/api/session/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function makeGETFetchCall(api) {
  return fetch(api)["catch"](function () {
    return Promise.reject({
      error: 'network'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  })["catch"](function (err) {
    return Promise.reject({
      error: err
    });
  });
}
function makeDELETEFetchCall(api) {
  return fetch(api, {
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      error: 'network'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  })["catch"](function (err) {
    return Promise.reject({
      error: err
    });
  });
}
function makeFetchCallWithBody(api, body, type) {
  return fetch(api, {
    method: type,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body
  })["catch"](function () {
    return Promise.reject({
      error: 'network'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  })["catch"](function (err) {
    return Promise.reject({
      error: err
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.js */ "./src/services.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");




(function () {
  var connectEl = document.querySelector('#page');
  var userMessages = {};
  connectEl.addEventListener('click', function (event) {
    if (event.target.classList.contains('submitLogin')) {
      var uname = document.getElementsByClassName("uname")[0].value;
      var submitLogin = _services_js__WEBPACK_IMPORTED_MODULE_0__.makeFetchCallWithBody('/api/v1/session', JSON.stringify({
        username: uname
      }), 'POST');
      submitLogin.then(function (res) {
        var uname = res.username;
        var messages = res.messages;
        var userList = res.userList;
        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderLoggedIn)(uname, messages, userList);
      })["catch"](function (err) {
        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderError)();
      });
      return;
    }
    if (event.target.classList.contains('submitMessage')) {
      var messege = document.getElementsByClassName("messege")[0].value;
      if (!messege) return;
      var submitMessage = _services_js__WEBPACK_IMPORTED_MODULE_0__.makeFetchCallWithBody('/api/v1/submitMessage', JSON.stringify({
        message: messege
      }), 'POST');
      submitMessage.then(function (res) {
        var uname = res.username;
        var messages = res.messages;
        var usersList = res.userList;
        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderLoggedIn)(uname, messages, usersList);
      })["catch"](function (err) {
        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderLogin)();
      });
      return;
    }
    if (event.target.classList.contains('logout')) {
      _services_js__WEBPACK_IMPORTED_MODULE_0__.makeDELETEFetchCall('/api/v1/session');
      (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderLogin)();
    }
  });
  var messageListDiv = document.getElementById("messagesList");
  messageListDiv && (messageListDiv.scrollTop = objDiv.scrollHeight);

  // Check for new users or messages every 5seconds.
  var interval = setInterval(function () {
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.showLoading)(); // Showing loading spinner for 0.5 seconds achieved by using setTimeout in line 62.
    var isLoggedIn = _services_js__WEBPACK_IMPORTED_MODULE_0__.makeGETFetchCall('/api/v1/session');
    isLoggedIn.then(function (res) {
      var userList = res.userList;
      var messages = res.messages;
      var uname = res.username;
      setTimeout(function () {
        (0,_render__WEBPACK_IMPORTED_MODULE_1__.removeLoading)();
        (0,_render__WEBPACK_IMPORTED_MODULE_1__.updateUsersList)(userList);
        (0,_render__WEBPACK_IMPORTED_MODULE_1__.updateMessagesList)(uname, messages);
      }, "500");
    })["catch"](function (err) {
      (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderLogin)();
    });
  }, 5000);
  (0,_render__WEBPACK_IMPORTED_MODULE_1__.render)();
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map