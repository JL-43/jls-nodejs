const request = require('request');
const apikeys = require('./apikeys.js')
// const location = `${latitude},${longtitude}`;
const location = '14.58333,121';
const weather_query = `http://api.weatherstack.com/current?access_key=${apikeys.weatherapikey}&query=${location}`;

request({url: weather_query, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service!');
    }else if(response.body.error){
        console.log('Unable to find location');
    }else{
        console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature}C outside. It feels like ${response.body.current.feelslike}C though`);
    }
});

const geo_query = `https://api.mapbox.com/geocoding/v5/mapbox.places/Manila.json?access_token=${apikeys.geoapikey}`
request({url: geo_query, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to Geocode Service');
    }else if(response.body.features.length == 0){
        console.log('Unable to find that location')
    }else{
        const longtitude = response.body.features[0].geometry.coordinates[0];
        const latitude = response.body.features[0].geometry.coordinates[1];
        console.log(`Latitude: ${latitude} & Longtitude: ${longtitude}`)
    }
});

