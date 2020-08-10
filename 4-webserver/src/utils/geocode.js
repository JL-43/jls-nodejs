const request = require('request');
const apikeys = require('./apikeys.js');

const geocode = (address, callback) => {
    if(!address){
        return  console.log('Please add a place to find the forecast!');
    }
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${apikeys.geoapikey}`;
    request({url, json: true}, (error, {body}) => {
        if(error){
            // undefined is implied when second argument is empty
            // callback('Unable to connect to location services', undefined);
            callback('Unable to connect to location services');
        }else if(body.features.length === 0){
            callback('Unable to find that location');
        }else{
            callback(undefined, {
                latitude: body.features[0].geometry.coordinates[1],
                longitude: body.features[0].geometry.coordinates[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;