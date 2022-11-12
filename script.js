var displayCurrentTime = document.querySelector("#currentTime"); // querySelector for displaying time at top of page
var btn = document.querySelector(".btn");
var searchInput = document.querySelector("#search-input");
var searchNewCityApi = document.querySelector("#input-field");
var weatherInfo = document.querySelector(".main");
var apiKey = "e2529e3d1d19d0acec4d2f3fc131a3ec";
// let url = "https://api.openweathermap.org/data/2.5/forecast?q=san%20diego&appid=e2529e3d1d19d0acec4d2f3fc131a3ec";
let url = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=e2529e3d1d19d0acec4d2f3fc131a3ec";     //five day forecast
let updateCity = document.querySelector(".city")

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
    localStorage.setItem(cityInput, cityInput)
    localStorage.getItem(cityInput)
    // var userCities = localStorage.getItem(cityInput)      //probably dont need these two lines
    // userCities
  });
});


// Button to fecth weather

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
    // document.querySelector(".weatherInfoCurrentIcon").innerText = "Current Icon: " + icon;

    document.querySelector(".weatherInfoCurrentTemperature").innerText = "Current Temperature: " + temp + "°Fahrenheit";
    document.querySelector(".weatherInfoCurrentHumidity").innerText = "Current Humidity: " + humidity + "%";
    document.querySelector(".weatherInfoCurrentWindSpeed").innerText = "Current Wind Speed: " + speed + " mph";

    // document.querySelector(".mainPic").innerText = 
}

































//Code for 5 day weather forecast



// btn.addEventListener("click", fetchFiveDayForecastWeather);

function fetchFiveDayForecast(){

  function fetchWeatherAgain(){
    event.preventDefault();
    let citySearchFiveApi = searchNewCityApi.value
    console.log(citySearchFiveApi);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citySearchFiveApi}&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`, requestOptions)
      .then((response) => response.json())
      // .then(result => console.log(result))
      .then(result => displayFiveWeather(result))
      .catch(error => console.log('error', error));
    }
    
    
    function displayFiveWeather(result){
      const {name} = result; 
      const {icon} = result.weather[0]; 
      const {temp} = result.main;                                                            
      const {humidity} = result.main;
      const {speed} = result.wind;
    
        console.log(result, name, icon, temp, main, humidity, speed)
        document.querySelector(".city").innerText = "City: " + name;
        document.querySelector(".weatherInfoCurrentIcon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        // document.querySelector(".weatherInfoCurrentIcon").innerText = "Current Icon: " + icon;
    
        document.querySelector(".weatherInfoCurrentTemperature").innerText = "Current Temperature: " + temp + "°Fahrenheit";
        document.querySelector(".weatherInfoCurrentHumidity").innerText = "Current Humidity: " + humidity + "%";
        document.querySelector(".weatherInfoCurrentWindSpeed").innerText = "Current Wind Speed: " + speed + " mph";
    
        // document.querySelector(".mainPic").innerText = 
    }




}















// `https://api.openweathermap.org/data/2.5/weather?q=${citySearchApi}&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`




/* moment(data.list[i].dt_txt, 'YYYY-MM-DD HH:mm:ss').format(<insert desired format here>)

plugging in your desired format in that placeholder should get you what you want

moment(data.dt, "X").format("(MM/DD/YYYY)")
This would be for current weather api, previous message is for 5-day forecast api 
*/
