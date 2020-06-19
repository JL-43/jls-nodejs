const request = require('request');
const apikeys = require('./apikeys.js');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${apikeys.geoapikey}`;
    request({ url: url, json: true}, (error, response) => {
        if(error){
            // undefined is implied when second argument is empty
            // callback('Unable to connect to location services', undefined);
            callback('Unable to connect to location services');
        }else if(response.body.features.length === 0){
            callback('Unable to find that location');
        }else{
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[1],
                longitude: response.body.features[0].geometry.coordinates[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;