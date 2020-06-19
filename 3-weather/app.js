const geocode = require('./utils/geocode.js');
const weather = require('./utils/weather.js');
const address = process.argv[2];

geocode(address, (error, data) => {
    if(error){
        return console.log(error)
    }
    weather(data.latitude, data.longitude, (error, weatherdata) => {
        if(error){
            return console.log(error);
        }
        console.log(`Welcome to ${data.location}. 
            Right now, it's ${weatherdata.description} 
            at ${weatherdata.temperature}, 
            but it feels like ${weatherdata.feelslike}`);
    })

});