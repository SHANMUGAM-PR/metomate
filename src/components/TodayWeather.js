import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../WeatherService';  // Importing the weather fetching service
import './WeatherInfo.css';

const TodayWeather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch weather when the component mounts or city changes
  useEffect(() => {
    const handleFetchWeather = async () => {
      try {
        const data = await fetchWeather(city);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError('Could not fetch weather data. Please try again.');
        setWeatherData(null);
      }
    };

    if (city) {
      handleFetchWeather();
    }
  }, [city]);

  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  const { current, location } = weatherData;

  // Mapping weather condition to icon
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return '☀️'; // Sun
      case 'partly cloudy':
        return '⛅'; // Sun with clouds
      case 'cloudy':
        return '☁️'; // Cloud
      case 'rain':
        return '🌧️'; // Rain cloud
      case 'thunderstorm':
        return '⚡'; // Lightning
      case 'snow':
        return '❄️'; // Snowflake
      case 'fog':
        return '🌫️'; // Fog
      default:
        return '🌤️'; // Default: partially cloudy
    }
  };

  const weatherIcon = getWeatherIcon(current.condition.text);

  // Function to get the current time
  const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <div className="weather-card">
        {/* Left side: Temperature, Condition, Location, and Time */}
        <div className="location">
          {location.name}, {location.region}, {location.country}
        </div>
        <div className="time">{getCurrentTime()}</div> {/* Current time */}

        <div className="weather-content">
          <div className="weather-left">
            <div className="temperature">
              <span className="icon">{weatherIcon}</span>
              {current.temp_c}°C
            </div>
            <div className="condition">
              {current.condition.text}
            </div>
            <div className="realfeel">
              RealFeel® {current.feelslike_c}°C
            </div>
          </div>

          {/* Right side: Additional Info */}
          <div className="weather-right">
            <p><span className="label">Wind</span>: {current.wind_kph} km/h</p>
            <p><span className="label">Wind Gusts</span>: {current.gust_kph} km/h</p>
            <p><span className="label">Air Quality</span>: <span className="air-quality">Fair</span></p>
          </div>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
    </>
  );
};

export default TodayWeather;
