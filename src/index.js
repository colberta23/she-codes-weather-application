function updateWeather(response) {
  let todayTemperatureElement = document.querySelector("#today-temperature");
  let todayTemp = response.data.temperature.current;
  let city = document.querySelector("#city-name");
  city.innerHTML = response.data.city;
  todayTemperatureElement.innerHTML = Math.round(todayTemp);
}

function searchCity(city) {
  let apiKey = "b35bde4cf0218ab6t254ff1549244of3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-input");
  searchCity(searchFormInput.value);
}

let searchFormElement = document.querySelector("#search-form-element");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
