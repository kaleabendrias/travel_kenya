import { useState, useEffect } from 'react';
import { isAuthenticated } from './auth.helper';
import { Navigate } from 'react-router-dom';

const WeatherMap = () => {
  const [city, setCity] = useState('Nairobi');
  const [weatherData, setWeatherData] = useState(null);

  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return formattedTime;
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    if (!city) {
      setWeatherData({ error: "Please enter a city name" });
      return;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === '404') {
          setWeatherData({ error: data.message });
        } else {
          setWeatherData(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setWeatherData({ error: 'Error fetching weather data' });
      });
  };

  useEffect(() => {
    setCity('Nairobi');
    handleSearch();
  }, []);

  if (!isAuthenticated()) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-semibold mb-6 pt-6">Weather Map</h2>

        {/* Search bar */}
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 bg-gray-800 border border-transparent rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {weatherData && !weatherData.error && (
          <section className="my-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h6 className="text-lg font-semibold">
                  {weatherData.name}, {weatherData.sys.country}
                </h6>
                <h6>{getCurrentTime()}</h6>
              </div>

              <div className="text-center mb-4">
                <h6 className="text-5xl font-bold">
                  {weatherData.main.temp}&deg;C
                </h6>
                <p className="text-sm">{weatherData.weather[0].description}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-grow text-sm">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-wind mr-2"></i>
                    <span>{weatherData.wind.speed} m/s</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <i className="fas fa-cloud mr-2"></i>
                    <span>{weatherData.clouds.all}%</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-arrow-right mr-2"></i>
                    <span>{weatherData.wind.deg}&deg;</span>
                  </div>
                </div>
                <img
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt="Weather icon"
                  className="w-24"
                />
              </div>
            </div>
          </section>
        )}

        {weatherData && weatherData.error && (
          <div className="bg-red-500 text-white p-4 rounded-md">
            {weatherData.error}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherMap;
