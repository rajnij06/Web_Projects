export function fetchLogin(username) {
  return fetch('/api/session/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify( { username } ),
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if(!response.ok) { 
      return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); 
  });
}

export function makeGETFetchCall(api) {
  return fetch(api)
    .catch( () => Promise.reject({ error: 'network' }) )
    .then( response => {
        if(response.ok) { return response.json(); }
        return response.json().then(err => Promise.reject(err) );
    })
    .catch( err => {
        return Promise.reject({ error: err });
    });        
}

export function makeDELETEFetchCall(api) {
  return fetch(api, {
        method: 'DELETE'
    })
    .catch( () => Promise.reject({ error: 'network' }) )
    .then( response => {
        if(response.ok) { return response.json(); }
        return response.json().then(err => Promise.reject(err) );
    })
    .catch( err => {
        return Promise.reject({ error: err });
    });        
}

export function makeFetchCallWithBody(api, body, type) {
  return fetch(api, {
        method: type,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: body,
    })
    .catch( () => Promise.reject({ error: 'network' }) )
    .then( response => {
        if(response.ok) { return response.json(); }
        return response.json().then(err => Promise.reject(err) );
    })
    .catch( err => {
        return Promise.reject({ error: err });
    });        
}