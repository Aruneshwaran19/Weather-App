const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('city');
const weatherDetails = document.getElementById('weatherDetails');

const apiKey = "<YOUR_API_KEY_HERE>"; // Replace with your OpenWeatherMap API key

searchBtn.addEventListener('click', fetchWeather);

cityInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        fetchWeather();
    }
});

// Function to fetch weather data
async function fetchWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert("City not found!");
            return;
        }

        displayWeatherData(data);
    } catch (error) {
        alert("Error fetching weather data. Please try again later.");
    }
}

// Function to display weather data
function displayWeatherData(data) {
    const { name, sys, weather, main, wind } = data;

    document.getElementById('cityName').textContent = name;
    document.getElementById('country').textContent = sys.country;
    document.getElementById('temp').textContent = `${main.temp}°C`;
    document.getElementById('description').textContent = weather[0].description;
    document.getElementById('humidity').textContent = main.humidity;
    document.getElementById('windSpeed').textContent = wind.speed;

    weatherDetails.style.display = 'block';
}
