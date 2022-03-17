
//Get API key from
const api = {
  key: 'd59885c116c94800136f7045f74ff77e',
  baseUrl: 'https://home.openweathermap.org/api_keys'
}

const search = document.querySelector(".search")
search.addEventListener('keypress', setQuery);

function setQuery(evt){
  if (evt.keyCode === 13){
    getResults(search.value);
    console.log(search.value);
  }
}

function getResults(query){
  fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => {
    return weather.json();
  }).then(displayResults);
}

function displayResults(weather){
  console.log(weather);
}
// GIVEN a weather dashboard with form inputs
var card_1 = document.querySelector(".card-1")
var card_2 = document.querySelector(".card-2")
var card_3 = document.querySelector(".card-3")
var card_4 = document.querySelector(".card-4")
var btn = onClick(btn);
// WHEN I search for a city

function citySearch() {

  }
// THEN I am presented with current and future conditions for that city and that city is added to the search history
function furtureConditions() { 
    
 }
// WHEN I view current weather conditions for that city
function veiwWeatherConditions() {

}
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
fetch api function
// WHEN I view the UV index
function veiwUVIndex() {}
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
function colorCode(){

}
// WHEN I view future weather conditions for that city
function future() {

}
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
function fiveDayForcast(){

}
// WHEN I click on a city in the search history
btn.document.onClick
// THEN I am again presented with current and future conditions for that city
future() 