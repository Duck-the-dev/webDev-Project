let cityName = document.getElementById("search");
let searchButton = document.getElementById("search_button");
let weather = document.createElement("div");

const getWeather = async (city) => {
  try {
    city = cityName.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c5cbf9741d15d4903347d931e2049199&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    let child = `<h2>${data.sys.country} - ${data.name}</h2>
    <br>
    <p>Temperature: ${Math.floor(data.main.temp)} Celsius</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} km/h</p>
    <p>Weather: ${data.weather[0].description}</p>`;
    weather.innerHTML = child;
    document.querySelector(".container").appendChild(weather);
  } catch (error) {
    console.log(error);
  }
};

searchButton.onclick = () => {
  getWeather();
};
// (86.74°F − 32) × 5/9  = 26.7°C (Celsius)
