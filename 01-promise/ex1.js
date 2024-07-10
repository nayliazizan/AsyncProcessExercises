// In this exercise, we would like you to build an simple program (no functions is needed)
// that call a simple API and print out the response from the API.
// You should use axios to call the API
// Do note that you will need to install the axios node module first

// Axios documentation: https://axios-http.com/docs/intro

// API to be call:
// GET https://jsonplaceholder.typicode.com/users

// Write you code below
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Axios error: ', error);
    });

// Expected output (it looks ugly but you should at least see status code of 200):
// {status: 200, statusText: 'OK', headers: {…}, config: {…}, request: ClientRequest, …}