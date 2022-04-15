const request = require("request");
const geocode = require('./utils/geocode')
const url =

console.log("starting");

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to weather service!", error);
//   } else if (response.body.error) {
//     console.log("Unable to find location.");
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees.`
//     );
//   }
// });

// const geoUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=&limit=1";
// request({ url: geoUrl, json: true }, (error, response) => {

//     if (error) {
//         console.log("unable to connect to weather service!", error);
//       } else if(response.body.features.length ==0){

//         console.log('unable to find location, sorry!')

//       }

//       else{
//   const latitude = response.body.features[0].center[0];

//   const longitude = response.body.features[0].center[1];

//   console.log(longitude, latitude);}
// });



geocode("Boston", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
