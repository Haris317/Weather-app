document.getElementById('searchBtn').addEventListener('click', function() {
    const cityInput = document.getElementById('cityInput').value;
    if (cityInput.trim() !== '') {
      fetchWeather(cityInput);
    } else {
      alert('Please enter a city name');
    }
  });
  
  function fetchWeather(city) {
    const apiKey = 'e0f99c494c2ce394a18cc2fd3f100543';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
      });
  }
  
  function displayWeather(data) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
  
    locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
    temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
  }
  