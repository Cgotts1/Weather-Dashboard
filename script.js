var displayCurrentTime = document.querySelector("#currentTime"); // querySelector for displaying time at top of page
var btn = document.querySelector(".btn");
var searchInput = document.querySelector("#input-searchCity-field");
var searchNewCityApi = document.querySelector("#input-field"); // 1st fiveday
var searchNewCityApi2 = document.querySelector("#input-field"); // 2nd fiveday
var searchNewCityApi3 = document.querySelector("#input-field"); // 3rd fiveday
var searchNewCityApi4 = document.querySelector("#input-field"); // 4th fiveday
var searchNewCityApi5 = document.querySelector("#input-field"); // 5th fiveday

var apiKey = "e2529e3d1d19d0acec4d2f3fc131a3ec";
let url1 =
  "https://api.openweathermap.org/data/2.5/weather?q=${citySearchApi}&units=imperial&appid=e2529e3d1d19d0acec4d2f3fc131a3ec"; // Current Day Forecast
let url2 =
  "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=e2529e3d1d19d0acec4d2f3fc131a3ec"; // Five Day Forecast

//Sets the date at the top of the page upon loading of the page
setInterval(function () {
  var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  displayCurrentTime.textContent = time;
}, 1000);

// Appends user city searches to page
$(document).ready(function () {
  var cityInputs = [];
  if (localStorage.getItem("selectedCity")) {
    cityInputs = JSON.parse(localStorage.getItem("selectedCity"));
  }
  var j = 0;
  for (i = 0; i < cityInputs.length; i++) {
    $("ol").append(
      "<li onclick = 'fetchWeather(event.target.textContent)'>" +
        cityInputs[i] +
        "</li>"
    );
    j++;
    if (j == 5) break;
  }
  console.log(cityInputs);
  $("#button").click(function () {
    event.preventDefault();
    var cityInput = $("input[name=recentCities]").val();
    // $("ol").append("<div class='city-and-remove'><li>" + cityInput + "</li>" + "<button class='remove-button'>🗑️</button></div>");
    $("ol").append("<li>" + cityInput + "</li>");

    var cityInputs = [];
    if (localStorage.getItem("selectedCity")) {
      cityInputs = JSON.parse(localStorage.getItem("selectedCity"));
    }

    cityInputs.push(cityInput);

    // Local storage
    localStorage.setItem("selectedCity", JSON.stringify(cityInputs));
  });
});

// Button to fetch weather
btn.addEventListener("click", function (event) {
  event.preventDefault();
  let cityName = searchInput.value;
  fetchWeather(cityName);
});

function fetchWeather(cityName) {
  let citySearchApi = cityName;
  console.log(citySearchApi);
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${citySearchApi}&units=imperial&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`,
    requestOptions
  )
    .then((response) => response.json())
    // .then(result => console.log(result))
    .then((result) => displayWeather(result))
    .catch((error) => console.log("error", error));

  //Captures the value of the li click
  function getFiveDayForecast() {
    console.log(citySearchApi);

    // ---------------------DAY ONE-----------------------------

    let citySearchFiveApi = citySearchApi;
    console.log(citySearchFiveApi);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${citySearchFiveApi}&units=imperial&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result1) => displayDayOne(result1))
      .catch((error) => console.log("error", error));

    function displayDayOne(result1) {
      const dt_txt = result1.list[0].dt_txt;
      const { icon } = result1.list[0].weather[0];
      const { temp } = result1.list[0].main;
      const { humidity } = result1.list[0].main;
      const { speed } = result1.list[0].wind;

      console.log(result1, dt_txt, temp, humidity, speed, icon);
      document.querySelector(".weatherInfo1Date").innerText =
        "Date: " + dt_txt.split(" ")[0];
      document.querySelector(".weatherInfo1Icon").src =
        "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.querySelector(".weatherInfo1Temp").innerText =
        "Temperature: " + temp + "°Fahrenheit";
      document.querySelector(".weatherInfo1Humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".weatherInfo1Windspeed").innerText =
        "Wind Speed: " + speed + " mph";
    }

    // --------------------END DAY ONE--------------------------------------
    // --------------------START DAY TWO--------------------------------------

    let citySearchFiveApi2 = citySearchApi;
    console.log(citySearchFiveApi2 + "OHHHHHHHHH YESSSSSSS");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${citySearchFiveApi2}&units=imperial&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result2) => displayDayTwo(result2))
      .catch((error) => console.log("error", error));

    function displayDayTwo(result2) {
      const dt_txt = result2.list[7].dt_txt;
      const { icon } = result2.list[7].weather[0];
      const { temp } = result2.list[7].main;
      const { humidity } = result2.list[7].main;
      const { speed } = result2.list[7].wind;

      console.log(result2, dt_txt, temp, humidity, speed, icon);
      document.querySelector(".weatherInfo2Date").innerText =
        "Date: " + dt_txt.split(" ")[0];
      document.querySelector(".weatherInfo2Icon").src =
        "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.querySelector(".weatherInfo2Temp").innerText =
        "Temperature: " + temp + "°Fahrenheit";
      document.querySelector(".weatherInfo2Humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".weatherInfo2Windspeed").innerText =
        "Wind Speed: " + speed + " mph";
    }

    // --------------------END DAY TWO--------------------------------------
    // ---------------------START DAY THREE--------------------------------

    // event.preventDefault();
    let citySearchFiveApi3 = citySearchApi;
    console.log(citySearchFiveApi3);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${citySearchFiveApi3}&units=imperial&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result3) => displayDayThree(result3))
      .catch((error) => console.log("error", error));

    function displayDayThree(result3) {
      const dt_txt = result3.list[16].dt_txt;
      const { icon } = result3.list[16].weather[0];
      const { temp } = result3.list[16].main;
      const { humidity } = result3.list[16].main;
      const { speed } = result3.list[16].wind;

      console.log(result3, dt_txt, temp, humidity, speed, icon);
      document.querySelector(".weatherInfo3Date").innerText =
        "Date: " + dt_txt.split(" ")[0];
      document.querySelector(".weatherInfo3Icon").src =
        "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.querySelector(".weatherInfo3Temp").innerText =
        "Temperature: " + temp + "°Fahrenheit";
      document.querySelector(".weatherInfo3Humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".weatherInfo3Windspeed").innerText =
        "Wind Speed: " + speed + " mph";
    }
    // ---------------------------------------END DAY THREE------------------------------
    // ---------------------------------------START DAY FOUR------------------------------

    let citySearchFiveApi4 = citySearchApi;
    console.log(citySearchFiveApi4);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${citySearchFiveApi4}&units=imperial&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result4) => displayDayFour(result4))
      .catch((error) => console.log("error", error));
  }

  function displayDayFour(result4) {
    const dt_txt = result4.list[24].dt_txt;
    const { icon } = result4.list[24].weather[0];
    const { temp } = result4.list[24].main;
    const { humidity } = result4.list[24].main;
    const { speed } = result4.list[24].wind;

    console.log(result4, dt_txt, temp, humidity, speed, icon);
    document.querySelector(".weatherInfo4Date").innerText =
      "Date: " + dt_txt.split(" ")[0];
    document.querySelector(".weatherInfo4Icon").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".weatherInfo4Temp").innerText =
      "Temperature: " + temp + "°Fahrenheit";
    document.querySelector(".weatherInfo4Humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".weatherInfo4Windspeed").innerText =
      "Wind Speed: " + speed + " mph";
  }

  // ---------------------------------------END DAY FOUR------------------------------
  // ---------------------------------------START DAY FIVE------------------------------

  let citySearchFiveApi5 = citySearchApi;
  console.log(citySearchFiveApi5);
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${citySearchFiveApi5}&units=imperial&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result5) => displayDayFive(result5))
    .catch((error) => console.log("error", error));

  function displayDayFive(result5) {
    const dt_txt = result5.list[32].dt_txt;
    const { icon } = result5.list[32].weather[0];
    const { temp } = result5.list[32].main;
    const { humidity } = result5.list[32].main;
    const { speed } = result5.list[32].wind;

    console.log(result5, dt_txt, temp, humidity, speed, icon);
    document.querySelector(".weatherInfo5Date").innerText =
      "Date: " + dt_txt.split(" ")[0];
    document.querySelector(".weatherInfo5Icon").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".weatherInfo5Temp").innerText =
      "Temperature: " + temp + "°Fahrenheit";
    document.querySelector(".weatherInfo5Humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".weatherInfo5Windspeed").innerText =
      "Wind Speed: " + speed + " mph";
  }

  // ---------------------------------------END DAY FIVE------------------------------

  getFiveDayForecast();
}

function displayWeather(result) {
  const { name } = result;
  const { icon } = result.weather[0];
  const { temp } = result.main;
  const { humidity } = result.main;
  const { speed } = result.wind;

  console.log(result, name, icon, temp, main, humidity, speed);
  document.querySelector(".city").innerText = "City: " + name;
  document.querySelector(".weatherInfoCurrentIcon").src =
    "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  document.querySelector(".weatherInfoCurrentTemperature").innerText =
    "Current Temperature: " + temp + "°Fahrenheit";
  document.querySelector(".weatherInfoCurrentHumidity").innerText =
    "Current Humidity: " + humidity + "%";
  document.querySelector(".weatherInfoCurrentWindSpeed").innerText =
    "Current Wind Speed: " + speed + " mph";
}

// `https://api.openweathermap.org/data/2.5/weather?q=${citySearchApi}&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`

/* moment(data.list[i].dt_txt, 'YYYY-MM-DD HH:mm:ss').format(<insert desired format here>)

plugging in your desired format in that placeholder should get you what you want

moment(data.dt, "X").format("(MM/DD/YYYY)")
This would be for current weather api, previous message is for 5-day forecast api 
*/
