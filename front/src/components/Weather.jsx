import { useState, useEffect } from 'react';
import { isAuthenticated } from './auth.helper';
import { Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

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
    console.log(apiKey)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
      // Check if the API response contains an error message
      if (data.cod === '404') {
        // Update state to indicate an error
        setWeatherData({ error: data.message });
      } else {
        // Update state with the weather data
        setWeatherData(data);
      }
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      // Update state to indicate an error
      setWeatherData({ error: 'Error fetching weather data' });
    });

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

      {weatherData && !weatherData.error && (
        <section className="vh-100" style={{backgroundColor: '#4B515D'}}>
  <div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <div className="card" style={{color: '#4B515D', borderRadius: '35px'}}>
          <div className="card-body p-4">

            <div className="d-flex">
              <h6 className="flex-grow-1">{weatherData.name}, {weatherData.sys.country}</h6>
              <h6>{getCurrentTime()}</h6>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold" style={{color: '#1C2331'}}> {weatherData.main.temp} </h6>
              <span className="small" style={{color: '#868B94'}}>{weatherData.weather[0].description}</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                <div><i className="fas fa-wind fa-fw" style={{color: '#868B94'}}></i> <span className="ms-1"> {weatherData.wind.speed}
                  </span></div>
                <div><i className="fas fa-cloud fa-fw" style={{color: '#868B94'}}></i> <span className="ms-1"> {weatherData.clouds.all} </span>
                </div>
                <div><i className="fas fa-arrow-right">{weatherData.wind.deg}</i></div>
              </div>
              <div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                  width="100px"/>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>
      )}

        {weatherData && weatherData.error && (
  <div className="alert alert-danger" role="alert">
    {weatherData.error}
  </div>
        )}
    </div>

  );
};

export default WeatherMap;
