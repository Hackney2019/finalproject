function displayTemperature(response) {
  console.log(response.data.main.temp);
  let url = "https://jsonplaceholder.typicode.com/users/1";
  axios.get(url).then(showUser);
}

let apiKey = "32af4edcba23e12e10d2fa362b950362";

let apiUrl =
  "http://api.openweathermap.org/data/2.5/weather?q=Grove City&APPID=32af4edcba23e12e10d2fa362b950362";

console.log(apiUrl);
