const request = require("request");
const config = require('../config/config')

const forecast = (lat, long, callback)=> {

    const url = `http://api.weatherstack.com/current?access_key=${config.API_KEY_WEATHER}&query=${lat},${long}&units=f`;
    console.log(url);
    
    
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
          callback("Unable to connect", undefined);
        } else if (response.body.error) {
          callback("Unable to find location. Please try another search", undefined);
        } else {
          callback(undefined, {
        message: `${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees.`
    
    
    
          });
        }
      });
    
    
    }
    module.exports= forecast;