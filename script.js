var displayCurrentTime = document.querySelector("#currentTime"); // querySelector for displaying time at top of page
var btn = document.querySelector(".btn");
var searchInput = document.querySelector("#search-input");
var option = document.querySelector("#format-input");
var weatherInfo = document.querySelector(".main");
var apiKey = "e2529e3d1d19d0acec4d2f3fc131a3ec";
let url = "https://api.openweathermap.org/data/2.5/forecast?q=san%20diego&appid=e2529e3d1d19d0acec4d2f3fc131a3ec";






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
  });
});

























































































































// Code for local storage

// let cities = " " ;
// const addCity = (ev)=>{
//   ev.preventDefault();
//   let city = {
//     cityName: document.querySelector('#savedLocations').value
//   }
//   cities.push(city);
//   document.querySelector('form').reset; 


  //display purposes



  // console.warn('added' , {cities});
  // let pre = document.querySelector('#savedLocations');
  // pre.textContent = '\n' + JSON.stringify(cities, '\t', 2);

  //Saving to local storage



//   localStorage.setItem('MyCityList', JSON.stringify(cities));
// }

// document.addEventListener('DOMContentLoaded', ()=>{
//   document.querySelector(".btn").addEventListener('click', addCity)
// });























//Sets the date at the top of the page upon loading of the page
setInterval(function () {
  var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  displayCurrentTime.textContent = time;
}, 1000);



// Need function to fetch weather data when button is clicked

btn.addEventListener("click", fetchWeather());

function fetchWeather() {
  fetch(url)
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      showWeather(data);
    })
    .catch(console.err);
}




// Function for showing weather data

function showWeather(resp) {
  console.log(resp);
  let row = document.querySelector(".weather.row");
  // row.innerhtml =  ' ';
  row.innerhtml = resp.list.map(day =>{
    return '<p>Day</p>';
  }).join(' ');

  //html
  let html = `
<div id = "fiveDayWeatherCardBody" class = "weather row gx-2">  
          <p class="weatherInfo">Future Weather Icoyuyuns:</p>
          <p class="weatherInfo">Future Temperature:</p>
          <p class="weatherInfo">Future Humidity:</p>
          <p class="weatherInfo">Future Windspeed:</p>
        </div>
`;
}





















































































// console.log(option, "options");
// btn.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(searchInput.value);
// });

// var RequestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=los%20angeles&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`;
// console.log(value, "value");
// var responseText = document.getElementById("response-text");
// function getApi(request) {
//   fetch(request)
//     .then(function (response) {
//       // Check the console first to see the response.status
//       console.log(response.status);
//       if (response.status !== 200) {
//         responseText.textContent = response.status;
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }
// getApi(RequestUrl);

//api.openweathermap.org/data/2.5/forecast?q=los%20angeles&appid=e2529e3d1d19d0acec4d2f3fc131a3ec

/* moment(data.list[i].dt_txt, 'YYYY-MM-DD HH:mm:ss').format(<insert desired format here>)

plugging in your desired format in that placeholder should get you what you want

moment(data.dt, "X").format("(MM/DD/YYYY)")
This would be for current weather api, previous message is for 5-day forecast api 
*/
