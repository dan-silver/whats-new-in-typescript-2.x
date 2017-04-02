"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var secrets_1 = require("./secrets");
// !!! open folder in separate vs code window
// Compile with ES6
// Compile with ES5
// removes arrow functions
// Convert to use promises
function getWeatherForecast(cityName, callback) {
    if (typeof cityName === "undefined") {
        callback("city not passed");
    }
    node_fetch_1.default("http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&mode=json&APPID=" + secrets_1.appId)
        .then(function (result) {
        callback(null, result);
    })
        .catch(function (error) {
        callback(error);
    });
}
getWeatherForecast("london", (function (err, res) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res.json().then(function (weatherData) {
        console.log(weatherData.list[0].weather[0]);
    }));
}));
//# sourceMappingURL=promises-start.js.map