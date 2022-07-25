function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "32af4edcba23e12e10d2fa362b950362";

let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}";

axios.get(apiUrl).then(displayTemperature);
