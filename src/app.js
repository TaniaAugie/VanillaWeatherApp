function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
}

let apiKey = "d3b3247o775abt0c69f7b0e4513c11ea";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Johannesburg&key=d3b3247o775abt0c69f7b0e4513c11ea&units=metric`;

axios.get(apiUrl).then(displayTemperature);
