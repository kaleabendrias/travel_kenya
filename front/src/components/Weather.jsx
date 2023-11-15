import { useState, useEffect } from 'react';
import { isAuthenticated } from './auth.helper';
import { Navigate } from 'react-router-dom';

const WeatherMap = () => {
  const [city, setCity] = useState('Nairobi');
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    console.log(apiKey)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error('Error fetching weather data:', error));
  };
  console.log(weatherData)
  useEffect(() => {
    // Default city
    setCity('Nairobi');
  }, []);

  if (!isAuthenticated()) {
    return <Navigate to="/signin" />
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Weather Map</h2>

      {/* Search bar */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {weatherData && (
        <div className="card">
          <div className="card-body">
            <p className="card-text">Humidity: {weatherData.main.humidity}%</p>
            <p className="card-text">Temperature: {weatherData.main.temp}°C</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherMap;
