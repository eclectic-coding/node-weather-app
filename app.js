const request = require('request');
require('dotenv').config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=37.8267,-122.4233?units=f`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to the Weather API');
  } else {
    console.log(response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degrees out, with a ' + response.body.current.precip + '% chance of rain.');
  }
});

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.GEOCODE_API_KEY}`

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to the location services!');
  } else if (response.body.features.length === 0){
    console.log('Unable to find the location. Try another search.');
  } else {

  }
   const latitude = response.body.features[0].center[1]
   const longitude = response.body.features[0].center[0]
  console.log(latitude, longitude);
});
