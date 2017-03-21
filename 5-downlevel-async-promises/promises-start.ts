import fetch from 'node-fetch';
import {appId} from './secrets'

// !!! open folder in separate vs code window

// Compile with ES6
// Compile with ES5
// removes arrow functions


// Convert to use promises

function getWeatherForecast(cityName:string, callback:(err, res?) => void) {
    if (typeof cityName === "undefined") {
        callback("city not passed");
    }

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=json&APPID=${appId}`)
        .then((result) => {
            callback(null, result);
        })
        .catch((error) => {
            callback(error);
        });
}

getWeatherForecast("london", ((err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res.json().then((weatherData) => {
        console.log(weatherData.list[0].weather[0])
    }));
}));