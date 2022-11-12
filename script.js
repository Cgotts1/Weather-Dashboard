var displayCurrentTime = document.querySelector("#currentTime"); // querySelector for displaying time at top of page
var btn = document.querySelector(".btn");
var searchInput = document.querySelector("#search-input");
var searchNewCityApi = document.querySelector("#input-field");
var apiKey = "e2529e3d1d19d0acec4d2f3fc131a3ec";
// let url = "https://api.openweathermap.org/data/2.5/forecast?q=san%20diego&appid=e2529e3d1d19d0acec4d2f3fc131a3ec";
let url = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=e2529e3d1d19d0acec4d2f3fc131a3ec";     //five day forecast

//Sets the date at the top of the page upon loading of the page
setInterval(function () {
  var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  displayCurrentTime.textContent = time;
}, 1000);

// Appends user city searches to page
$(document).ready(function(){
  $("#button").click(function(){
    event.preventDefault();
    var cityInput = $("input[name=recentCities]").val();
    $("ol").append("<li>" + cityInput + "</li>");         

    // Local storage 
    localStorage.setItem(cityInput, "selectedCity")
    localStorage.getItem(cityInput)
    var userCities = localStorage.getItem("selectedCity")      //probably dont need these two lines
    userCities 
  });
});

// Button to fetch weather
btn.addEventListener("click", fetchWeather);

function fetchWeather(){
event.preventDefault();
let citySearchApi = searchNewCityApi.value
console.log(citySearchApi);
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearchApi}&units=imperial&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`, requestOptions)
  .then((response) => response.json())
  // .then(result => console.log(result))
  .then(result => displayWeather(result))
  .catch(error => console.log('error', error));
}

function displayWeather(result){
  const {name} = result; 
  const {icon} = result.weather[0]; 
  const {temp} = result.main;                                                            
  const {humidity} = result.main;
  const {speed} = result.wind;

    console.log(result, name, icon, temp, main, humidity, speed)
    document.querySelector(".city").innerText = "City: " + name;
    document.querySelector(".weatherInfoCurrentIcon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".weatherInfoCurrentTemperature").innerText = "Current Temperature: " + temp + "°Fahrenheit";
    document.querySelector(".weatherInfoCurrentHumidity").innerText = "Current Humidity: " + humidity + "%";
    document.querySelector(".weatherInfoCurrentWindSpeed").innerText = "Current Wind Speed: " + speed + " mph";
}

//Code for 5 day weather forecast


// Second btn listener for fetching five day forecast
btn.addEventListener("click", fetchFiveDayForecast);

function fetchFiveDayForecast(){

  function fetchWeatherAgain(){
    // event.preventDefault();
    let citySearchFiveApi = searchNewCityApi.value
    console.log(citySearchFiveApi);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citySearchFiveApi}&units=imperial&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`, requestOptions)
      .then((response) => response.json())
      // .then(result => console.log(result))
      .then(result => displayFiveWeather(result))
      .catch(error => console.log('error', error));
    }

    fetchWeatherAgain()
       
    function displayFiveWeather(result){
      const {dt_txt} = result.list[22].clouds; 
      const {icon} = result.list[22].weather[0]; 
      const {temp} = result.list[22].main;                                                            
      const {humidity} = result.list[22].main;
      const {speed} = result.list[22].wind;
    
        console.log(result, dt_txt, temp, humidity, speed, icon)
        document.querySelector(".weatherInfo1Date").innerText = "Date: " + dt_txt;
        document.querySelector(".weatherInfo1Icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".weatherInfo1Temp").innerText = "Temperature: " + temp + "°Fahrenheit";
        document.querySelector(".weatherInfo1Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".weatherInfo1Windspeed").innerText = "Wind Speed: " + speed + " mph";
    }
}

// `https://api.openweathermap.org/data/2.5/weather?q=${citySearchApi}&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`

/* moment(data.list[i].dt_txt, 'YYYY-MM-DD HH:mm:ss').format(<insert desired format here>)

plugging in your desired format in that placeholder should get you what you want

moment(data.dt, "X").format("(MM/DD/YYYY)")
This would be for current weather api, previous message is for 5-day forecast api 
*/
