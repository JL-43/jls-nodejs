const geocode = require('./utils/geocode.js');
const weather = require('./utils/weather.js');

geocode('Makati', (error, data) => {

    if(error){
        return console.log(error)
    }

    weather(data.latitude, data.longitude, data.location, (error, data) => {
        if(error){
            return console.log(error);
        }
        console.log(`Welcome to ${data.location}. 
            Right now, it's ${data.description} 
            at ${data.temperature}, 
            but it feels like ${data.feelslike}`);
    })

});