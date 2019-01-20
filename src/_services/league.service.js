import {AXIOS} from '../http-common';

export const leagueService = {
  loadData
};



function login(cookie, userName, password) {

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`http://s3.eu-central-1.amazonaws.com/js-assignment/data.json`, requestOptions)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.session) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });

}

function loadData() {

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://s3.eu-central-1.amazonaws.com/js-assignment/data.json'
  return fetch(proxyUrl + targetUrl)
    .then(blob => blob.json())
    .then(data => {
      console.table(data);
      return JSON.stringify(data);
    })
    .catch(e => {
      return e;
    });
}

