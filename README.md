# Weather App

## Overview
A simple weather application built using **HTML**, **CSS**, **JavaScript**, and **OpenWeatherMap API** to fetch real-time weather data. This app allows users to check the current weather by entering a city name, providing them with essential weather information such as temperature, humidity, and weather conditions.

## Features
- Get the current weather for any city around the world.
- View temperature, humidity, pressure, and general weather conditions (e.g., clear sky, rain, etc.).
- Responsive design to ensure the app works on both desktop and mobile devices.
- User-friendly interface with smooth animations and real-time data fetching.
- Error handling for invalid city names or failed API requests.

## Screenshots
[Weather App Screenshot]![Screenshot (472)](https://github.com/user-attachments/assets/4b058015-bd47-4d6a-ade1-74b5ad72b057)


## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **API**: OpenWeatherMap API (Free API for weather data)
- **Libraries**: 
  - Axios (for making API requests)
  - JavaScript Fetch API

## Setup

### Prerequisites

Before running the project, ensure you have the following installed on your local machine:

- **Node.js** and **npm** (Node Package Manager) if you're using a backend or want to install additional packages.

### Steps to Run Locally

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Aruneshwaran19/weather-app.git

2. Open the project directory:
   ```bash
   cd weather-app
3. Open index.html in your browser to run the app locally.

4. To get weather data, you need an API key from OpenWeatherMap:

- Go to OpenWeatherMap.
- Create an account and get an API key.
- Replace the YOUR_API_KEY placeholder in the JavaScript file with your actual API key:
 ```javascript\
const apiKey = 'YOUR_API_KEY';
```

## How to Use

1. Open the app in your browser.
2. Enter the name of the city in the input box and click the "Get Weather" button.
3. The app will display the current weather for that city, including temperature, humidity, pressure, and weather description.
4. If the city name is invalid, the app will show an error message.


## Folder Structure
```weather-app/
├── index.html        # Main HTML file
├── script.js         # JavaScript file for API requests and functionality
├── style.css         # CSS file for styling
├── README.md         # This file
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.





