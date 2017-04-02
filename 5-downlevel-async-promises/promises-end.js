// import fetch from 'node-fetch';
// import {appId} from './secrets'
// // TypeScript 2.1: async/await for ES3/ES5
// // 
// function getWeatherForecast(cityName:string):Promise<any> {
//     if (typeof cityName === "undefined") {
//         return Promise.reject("city not passed");
//     }
//     return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=json&APPID=${appId}`);
// }
// async function main() {
//     let rawWeatherData = await getWeatherForecast("longon");
//     let weatherData = await rawWeatherData.json();
//     console.log(weatherData.list[0].weather[0])
// }
// main(); 
//# sourceMappingURL=promises-end.js.map