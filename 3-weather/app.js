const request = require('request');
const apikey = require('./apikey.js')
const query = '14.5995,120.9842'

const url = `http://api.weatherstack.com/current?access_key=${apikey}&query=${query}`;

request({url: url}, (error, response) => {
    console.log(response)
});
