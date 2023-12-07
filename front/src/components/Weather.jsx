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
    handleSearch()
  }, []);

  if (!isAuthenticated()) {
    return <Navigate to="/signin" />
  }
  return (
    <div
      className="m-0"
      style={{
        background: "linear-gradient(to bottom, #1e1e1e, #000000)",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-white">
        <h2 className="mb-4">Weather Map</h2>

        {/* Search bar */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control text-white border-none"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
            style={{
              background: "linear-gradient(to bottom, #1e1e1e, #000000)",
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary btn-lg m-2"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {weatherData && !weatherData.error && (
          <section className="vh-100">
            <div className="container py-5 ">
              <div className="row d-flex justify-content-center align-items-center" >
                <div className="col-11">
                  <div
                    className="card text-white"
                    style={{
                      background: "linear-gradient(to bottom, #1e1e1e, #000000)",
                      borderRadius: "35px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex">
                        <h6 className="flex-grow-1">
                          {weatherData.name}, {weatherData.sys.country}
                        </h6>
                        <h6>{getCurrentTime()}</h6>
                      </div>

                      <div className="d-flex flex-column text-center mt-5 mb-4">
                        <h6 className="display-4 mb-0 font-weight-bold">
                          {" "}
                          {weatherData.main.temp}&deg;C
                        </h6>
                        <span className="small">
                          {weatherData.weather[0].description}
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <div
                          className="flex-grow-1"
                          style={{ fontSize: "1rem" }}
                        >
                          <div>
                            <i className="fas fa-wind fa-fw"></i>{" "}
                            <span className="ms-1">
                              {" "}
                              {weatherData.wind.speed}
                            </span>
                          </div>
                          <div>
                            <i className="fas fa-cloud fa-fw"></i>{" "}
                            <span className="ms-1">
                              {" "}
                              {weatherData.clouds.all}{" "}
                            </span>
                          </div>
                          <div>
                            <i className="fas fa-arrow-right">
                              {weatherData.wind.deg}
                            </i>
                          </div>
                        </div>
                        <div>
                          <img
                            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                            className="img-fluid"
                            width="100px"
                          />
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
    </div>
  );
};

export default WeatherMap;
