var displayCurrentTime = document.querySelector("#currentTime"); // querySelector for displaying time at top of page
var btn = document.querySelector(".btn");
var searchInput = document.querySelector("#search-input");
var searchNewCityApi = document.querySelector("#input-field");
var weatherInfo = document.querySelector(".main");
var apiKey = "e2529e3d1d19d0acec4d2f3fc131a3ec";
// let url = "https://api.openweathermap.org/data/2.5/forecast?q=san%20diego&appid=e2529e3d1d19d0acec4d2f3fc131a3ec";
let url = "https://api.openweathermap.org/data/2.5/forecast?q=boston&appid=e2529e3d1d19d0acec4d2f3fc131a3ec";     //five day forecast


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




btn.addEventListener("click", fetchWeather);


function fetchWeather(){
event.preventDefault();
let citySearchApi = searchNewCityApi.value
console.log(citySearchApi);
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citySearchApi}&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`, requestOptions)
  .then((response) => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  
}


function displayWeather(result){
  const {city} = result;                                                            
  // const {main} = data;
  // const {weather} = data;

//     console.log(city)
    document.querySelector(".city").innerText = "Weather in " + city;
}













// let weather = {
//   "apiKey": "e2529e3d1d19d0acec4d2f3fc131a3ec",
//   fetchWeather: function (searchInput){
//       fetch(
//           "https://api.openweathermap.org/data/2.5/forecast?q="
//        + searchInput 
//        + "&units=metric&appid=" 
//        + this.apiKey)
//       .then((response) => response.json())
//       .then((data) => this.displayWeather(data));
//   },

  // displayWeather: function(data){                                                      
  //   const {city} = data;                                                            
    // const {main} = data;
    // const {weather} = data;

//     console.log(city)
//     document.querySelector(".city").innerText = "Weather in " + city;

//   },

// search: function(){
//   this.fetchWeather(document.querySelector(".search-input #button").value);
  
// }

// };

// document.querySelector(".search-input #button").addEventListener("click", function (){
//   document.querySelector(".search-input #button").value
//   weather.search();
// })

















































// Need function to fetch weather data when button is clicked

// btn.addEventListener("click", fetchWeather());

// function fetchWeather() {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) throw new Error(response.statusText);
//       return response.json();
//     })
//     .then((data) => {
//       showWeather(data);
//     })
//     .catch(console.err);
// }


// Function for showing weather data

// function showWeather(response) {
//   console.log(response);
//   let row = document.querySelector(".card-body");
  // row.innerhtml =  ' '; 
  // row.innerhtml = response.list.map(city =>{
  //   return '<p>Day</p>';
//   }).join(' ');

//   let html = `
// <div id = "fiveDayWeatherCardBody" class = "card-body">  
//           <p class="weatherInfo">Future Weather Icons:</p>
//           <p class="weatherInfo">Future Temperature:</p>
//           <p class="weatherInfo">Future Humidity:</p>
//           <p class="weatherInfo">Future Windspeed:</p>
//         </div>
// `;
// html
// }






//api.openweathermap.org/data/2.5/forecast?q=los%20angeles&appid=e2529e3d1d19d0acec4d2f3fc131a3ec

/* moment(data.list[i].dt_txt, 'YYYY-MM-DD HH:mm:ss').format(<insert desired format here>)

plugging in your desired format in that placeholder should get you what you want

moment(data.dt, "X").format("(MM/DD/YYYY)")
This would be for current weather api, previous message is for 5-day forecast api 
*/
