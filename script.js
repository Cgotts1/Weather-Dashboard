var btn = document.querySelector('.btn');
var searchInput = document.querySelector('#search-input');
var option = document.querySelector('#format-input');
console.log(option, "options")
var value = option.value;
btn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(searchInput.value)
})
  var RequestUrl = `https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid=&appid=e2529e3d1d19d0acec4d2f3fc131a3ec`;
  console.log(value , "value")
var responseText = document.getElementById('response-text');
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



`https://www.loc.gov/search/?q=${value}&fo=json`