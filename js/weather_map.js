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
<!--end of mapbox-->
<!--start weather API-->
// const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/3.0/onecall?`

const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`

$.get(BASE_CURRENT_WEATHER_URL + `lat=${29.433053770705534}&lon=${-98.50482711015165}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
    console.log(BASE_CURRENT_WEATHER_URL + `lat=${29.433053770705534}&lon=${-98.50482711015165}&appid=${WEATHER_MAP_KEY}`);

// $.get(BASE_CURRENT_WEATHER_URL + `q=Nashville,TN,USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => console.log(data))

// $.get(BASE_CURRENT_WEATHER_URL + `lat=${29.4252}&lon=${-98.4916}USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {

    let html = `
    <div>${data.name}</div>
    <div>Current Temp: ${data.main.temp.toFixed(0)}</div>      
    <div>Current Humidity: ${data.main.humidity}</div>
    <div>Feels Like: ${data.main.feels_like}</div>
    <div>Current conditions: ${data.weather[0].description}</div>
    <div>Wind Speed: ${data.wind.speed}</div>
`
    $("#insert-weather").html(html);
})
// for (let i = 0; i < data.length ; i+8) {

// }
//Here's a thing called fetch: ** Wow **; modern way to do AJAX!

// fetch(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_MAP_KEY}`)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
