const geocode = require('./utils/geocode.js');
const weather = require('./utils/weather.js');
const address = process.argv[2];

geocode(address, (error, {latitude, longitude, location}) => {
// geocode(address, (error, {latitude, longitude, location} = {}) => {
    if(error){
        return console.log(error)
    }
    weather(latitude, longitude, (error, {description, temperature, feelslike}) => {
        if(error){
            return console.log(error);
        }
        console.log(`Welcome to ${location}. 
            Right now, it's ${description} 
            at ${temperature}, 
            but it feels like ${feelslike}`);
    })

});