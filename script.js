var displayCurrentTime = document.querySelector("#currentTime");  // querySelector for displaying time at top of page
var btn = document.querySelector(".btn");
var searchInput = document.querySelector("#search-input");
var option = document.querySelector("#format-input");
var weatherInfo = document.querySelector(".main");
var apiKey = "e2529e3d1d19d0acec4d2f3fc131a3ec";

//Sets the date at the top of the page upon loading of the page
setInterval(function () {
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  displayCurrentTime.textContent = time;
}, 1000);






console.log(option, "options");
var value = option.value;
btn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(searchInput.value);
});

var RequestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=los%20angeles&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`;
console.log(value, "value");
var responseText = document.getElementById("response-text");
function getApi(request) {
  fetch(request)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      if (response.status !== 200) {
        responseText.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
getApi(RequestUrl);




























//api.openweathermap.org/data/2.5/forecast?q=los%20angeles&appid=e2529e3d1d19d0acec4d2f3fc131a3ec














/* moment(data.list[i].dt_txt, 'YYYY-MM-DD HH:mm:ss').format(<insert desired format here>)

plugging in your desired format in that placeholder should get you what you want

moment(data.dt, "X").format("(MM/DD/YYYY)")
This would be for current weather api, previous message is for 5-day forecast api 
*/