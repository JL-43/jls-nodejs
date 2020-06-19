const request = require('request');
const geocode = require('./utils/geocode.js');
const weather = require('./utils/weather.js');

geocode('Manila', (error, data) => {
    if(data){
        weather(data.latitude, data.longitude, data.location, (error, data) => {
            if(data){
                console.log(`Welcome to ${data.location}. 
                    Right now, it's ${data.description} 
                    at ${data.temperature}, 
                    but it feels like ${data.feelslike}`);
            }else{
                console.log(error);
            }
        })
    }else{
        console.log(error);
    }
});