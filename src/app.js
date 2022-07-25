function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "7c30cb10a35fd5546334634c6a01897d";

let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}";

axios.get(apiUrl).then(displayTemperature);
