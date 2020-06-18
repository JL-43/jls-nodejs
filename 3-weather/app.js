const request = require('request');
const apikey = require('./apikey.js')
const query = '14.5995,120.9842'

const url = `http://api.weatherstack.com/current?access_key=${apikey}&query=${query}`;

request({url: url, json: true}, (error, response) => {
    // console.log(response.body.current)
    console.log(`It is currently ${response.body.current.temperature}C outside. It feels like ${response.body.current.feelslike}C though`)
});
