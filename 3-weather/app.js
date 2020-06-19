const request = require('request');
const geocode = require('./utils/geocode.js');
// const location = `${latitude},${longitude}`;
// const location = '14.58333,121';
// const weather_query = `http://api.weatherstack.com/current?access_key=${apikeys.weatherapikey}&query=${location}`;

// request({url: weather_query, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!');
//     }else if(response.body.error){
//         console.log('Unable to find location');
//     }else{
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature}C outside. It feels like ${response.body.current.feelslike}C though`);
//     }
// });

geocode('Manila', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
});