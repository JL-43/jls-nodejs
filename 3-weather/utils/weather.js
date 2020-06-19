const request = require('request');
const apikeys = require('./apikeys.js');

const weather = (latitude, longitude, callback) => {
    const geocode = `${latitude},${longitude}`;
    const url = `http://api.weatherstack.com/current?access_key=${apikeys.weatherapikey}&query=${geocode}`;
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!');
        }else if(response.body.error){
            callback('Unable to find that location');
        }else{
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            })
        }
    })
}

module.exports = weather;