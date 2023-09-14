"use strict";
mapboxgl.accessToken = MAPBOX_API_TOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 12,
    center: [-98.4916,  29.4252]
});
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
console.log(geocoder);
<!--enable location mapbox-->
function localWeather (lat, lng) {
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid: WEATHER_MAP_KEY,
        lat: lat,
        lon: lng,
        units: 'imperial',
        exclude: 'minutely,hourly',
    }).done(function localweatherData(data) {
        console.log(data);
        let html = "";
        for (let i = 0; i < data.daily.length - 3; i++) {
            let weekDay = new Date(data.daily[i].dt * 1000);
            html += `
        <ul>
            <h3>${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(weekDay)}</h3>
            <div><img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@4x.png"/></div>
            <div style="text">Conditions</div>
            <li>Temperature High  ${data.daily[i].max}°F</li>
            <li>Temperature Low  ${data.daily[i].temp.min}°F</li>
            <li>Description: ${data.daily[i].weather[0].description}</li>
            <li>Humidity: ${data.daily[i].humidity}</li>
            <li>Wind: ${data.daily[i].wind_speed.toFixed()}</li>
        </ul>
    `;
        }
        console.log();
        $('.card').html(html);
    }).fail(function (error) {
        console.log(error);
    });
}
localWeather(29.50, -98.50);
<!--end of mapbox-->
<!--start weather API-->
// const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/3.0/onecall?`

// const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?`

// $.get(BASE_CURRENT_WEATHER_URL + `lat=${29.433053770705534}&lon=${-98.50482711015165}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
//     console.log(BASE_CURRENT_WEATHER_URL + `lat=${29.433053770705534}&lon=${-98.50482711015165}&appid=${WEATHER_MAP_KEY}`);

// $.get(BASE_CURRENT_WEATHER_URL + `q=Nashville,TN,USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => console.log(data))

// $.get(BASE_CURRENT_WEATHER_URL + `q=Anaheim,CA,USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
//     // // current temp:
//     console.log(data.main.temp.toFixed(0));
//     // // humidity:
//     console.log(data.main.humidity);
//     // // city search result name:
//     console.log(data.name);
//     // // Description of weather [e.g., 'overcast']
//     console.log(data.weather[0].description);
//
//     let html = `
//     <div>City Searched: ${data.name}</div>
//     <div>Current Temp: ${data.main.temp.toFixed(0)}</div>
//     <div>Current Humidity: ${data.main.humidity}</div>
//     <div>Current conditions: ${data.weather[0].description}</div>
// `
//
//     $("#insert-weather").html(html);
// })
//
// // }
// // }
// //Here's a thing called fetch: ** Wow **; modern way to do AJAX!
//
// // fetch(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_MAP_KEY}`)
// //     .then((response) => response.json())
// //     .then((response) => console.log(response))
// // $("#insert-weather").html(html);
// fetch(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_MAP_KEY}`)
// .then((response) => response.json())
//     .then((response) => {
//         console.log(response);
// //         $("#insert-weather").html(response.html());
//     });