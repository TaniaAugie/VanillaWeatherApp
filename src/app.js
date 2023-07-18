function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temp.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "d3b3247o775abt0c69f7b0e4513c11ea";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Johannesburg&key=d3b3247o775abt0c69f7b0e4513c11ea&units=metric`;

axios.get(apiUrl).then(displayTemperature);
