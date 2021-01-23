// Cashing the DOM
const date = moment();
const date_div = document.getElementById('date-container');
const input = document.getElementById('city-input');
const city = document.getElementById('city-container');
const temperature = document.getElementById('temp-container');
const highLow = document.getElementById('high-low-container');
const weatherCondition = document.getElementById('weather-condition-container');

// Call the API
const api = {
  key: "4a1f5dd9d0c0a431a8fbe9cf9f28e7e6",
  base: "https://api.openweathermap.org/data/2.5/weather?",
}


// Get Weather
function getWeather(city) {
    fetch(`${api.base}q=${city}&appid=${api.key}&units=metric`)
    .then(details => {
        return details.json();

    }).then(showWeather);
}

// Show Weather
function showWeather(details) {
  date_div.innerHTML = date.format("MMMM Do YYYY");
  city.innerHTML = `${details.name}, ${details.sys.country}`
  temperature.innerHTML = `${Math.ceil(details.main.temp)}&deg;C`;
  highLow.innerHTML = `${Math.ceil(details.main.temp_max)}&deg;C (H) | ${Math.ceil(details.main.temp_min)}&deg;C (L)`;
  weatherCondition.innerHTML = `${details.weather[0].main}`;
}

// Take Input and Show Weather
input.addEventListener('keypress', (event) => {
  if(event.keyCode == 13) {
    getWeather(input.value);
  }
});
