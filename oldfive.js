// Code for 5 day weather forecast

// DAY ONE
btn.addEventListener("click", fetchFiveDayForecast);

function fetchFiveDayForecast() {
  function fetchWeatherAgain() {
    // event.preventDefault();
    let citySearchFiveApi = searchNewCityApi.value;
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
      // .then(result => console.log(result))
      .then((result) => displayFiveWeather(result))
      .catch((error) => console.log("error", error));
  }

  fetchWeatherAgain(); // Fetches the weather again for the five day forecast

  function displayFiveWeather(result) {
    const dt_txt = result.list[0].dt_txt;
    const { icon } = result.list[0].weather[0];
    const { temp } = result.list[0].main;
    const { humidity } = result.list[0].main;
    const { speed } = result.list[0].wind;

    console.log(result, dt_txt, temp, humidity, speed, icon);
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
}

// DAY TWO
btn.addEventListener("click", fetchFiveDayForecast2);

function fetchFiveDayForecast2() {
  function fetchWeatherAgain2() {
    // event.preventDefault();
    let citySearchFiveApi2 = searchNewCityApi2.value;
    console.log(citySearchFiveApi2);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${citySearchFiveApi2}&units=imperial&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`,
      requestOptions
    )
      .then((response) => response.json())
      // .then(result => console.log(result))
      .then((result) => displayFiveWeather2(result))
      .catch((error) => console.log("error", error));
  }

  fetchWeatherAgain2(); // Fetches the weather again for the five day forecast

  function displayFiveWeather2(result) {
    const dt_txt = result.list[7].dt_txt;
    const { icon } = result.list[7].weather[0];
    const { temp } = result.list[7].main;
    const { humidity } = result.list[7].main;
    const { speed } = result.list[7].wind;

    console.log(result, dt_txt, temp, humidity, speed, icon);
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
}

// DAY THREE
btn.addEventListener("click", fetchFiveDayForecast3);

function fetchFiveDayForecast3() {
  function fetchWeatherAgain3() {
    // event.preventDefault();
    let citySearchFiveApi3 = searchNewCityApi3.value;
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
      // .then(result => console.log(result))
      .then((result) => displayFiveWeather3(result))
      .catch((error) => console.log("error", error));
  }

  fetchWeatherAgain3(); // Fetches the weather again for the five day forecast

  function displayFiveWeather3(result) {
    const dt_txt = result.list[16].dt_txt;
    const { icon } = result.list[16].weather[0];
    const { temp } = result.list[16].main;
    const { humidity } = result.list[16].main;
    const { speed } = result.list[16].wind;

    console.log(result, dt_txt, temp, humidity, speed, icon);
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
}

// DAY FOUR
btn.addEventListener("click", fetchFiveDayForecast4);

function fetchFiveDayForecast4() {
  function fetchWeatherAgain4() {
    // event.preventDefault();
    let citySearchFiveApi4 = searchNewCityApi4.value;
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
      // .then(result => console.log(result))
      .then((result) => displayFiveWeather4(result))
      .catch((error) => console.log("error", error));
  }

  fetchWeatherAgain4(); // Fetches the weather again for the five day forecast

  function displayFiveWeather4(result) {
    const dt_txt = result.list[24].dt_txt;
    const { icon } = result.list[24].weather[0];
    const { temp } = result.list[24].main;
    const { humidity } = result.list[24].main;
    const { speed } = result.list[24].wind;

    console.log(result, dt_txt, temp, humidity, speed, icon);
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
}

// DAY FIVE
btn.addEventListener("click", fetchFiveDayForecast5);

function fetchFiveDayForecast5() {
  function fetchWeatherAgain5() {
    // event.preventDefault();
    let citySearchFiveApi5 = searchNewCityApi5.value;
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
      // .then(result => console.log(result))
      .then((result) => displayFiveWeather5(result))
      .catch((error) => console.log("error", error));
  }

  fetchWeatherAgain5(); // Fetches the weather again for the five day forecast

  function displayFiveWeather5(result) {
    const dt_txt = result.list[32].dt_txt;
    const { icon } = result.list[32].weather[0];
    const { temp } = result.list[32].main;
    const { humidity } = result.list[32].main;
    const { speed } = result.list[32].wind;

    console.log(result, dt_txt, temp, humidity, speed, icon);
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
}

// `https://api.openweathermap.org/data/2.5/weather?q=${citySearchApi}&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`

/* moment(data.list[i].dt_txt, 'YYYY-MM-DD HH:mm:ss').format(<insert desired format here>)

plugging in your desired format in that placeholder should get you what you want

moment(data.dt, "X").format("(MM/DD/YYYY)")
This would be for current weather api, previous message is for 5-day forecast api 
*/
