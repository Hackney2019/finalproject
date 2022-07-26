function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}
let apiKey = "32af4edcba23e12e10d2fa362b950362";

let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Grove City&APPID=32af4edcba23e12e10d2fa362b950362&units=metric`;

axios
  .get(
    "http://api.openweathermap.org/data/2.5/weather?q=Grove City&APPID=32af4edcba23e12e10d2fa362b950362&units=metric"
  )
  .then(displayTemperature);
