const request = require('request');
const apikeys = require('./apikeys.js');

const weather = (latitude, longitude, callback) => {
    const geocode = `${latitude},${longitude}`;
    const url = `http://api.weatherstack.com/current?access_key=${apikeys.weatherapikey}&query=${geocode}`;
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!');
        }else if(body.error){
            callback('Unable to find that location');
        }else{
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = weather;