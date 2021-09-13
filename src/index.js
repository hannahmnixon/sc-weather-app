function displayTemperature(response) {
  console.log(response.data.main.temp);
}
let apiKey = "a6ff4b7a9b12bc3ba444e702f94356c3";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
