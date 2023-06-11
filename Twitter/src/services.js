// This is a sample file that demonstrates
// how you can write an abstraction around
// a fetch() call
// This exported function returns a promise
// that resolves with data
// or rejects with an error object
//
// The caller of this function can decide
// what to do with the data
// or what to do with the error
//
// You can add to this file and use this function
// or write your own files/functions

function fetchPost(api, body) {
  return fetch(api, {
    method: 'POST',
    headers: {
      'content-type': 'application/json', // set this header when sending JSON in the body of request
    },
    body: JSON.stringify(body),
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if(!response.ok) { 
      return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); // happy status code means resolve with data from service
  });
}

function fetchGet(api) {
    return fetch(api)
    .catch( err => Promise.reject({ error: 'network-error' }) )
    .then( response => {
      if(!response.ok) {
        return response.json().then( err => Promise.reject(err) );
      }
      return response.json(); // happy status code means resolve with data from service
    });
}

function fetchDelete(api) {
    return fetch(api,  {
        method: 'DELETE',
    })
    .catch( err => Promise.reject({ error: 'network-error' }) )
    .then( response => {
      if(!response.ok) {
        return response.json().then( err => Promise.reject(err) );
      }
      return response.json(); // happy status code means resolve with data from service
    });
}

module.exports = {
    fetchGet,
    fetchPost,
    fetchDelete
}