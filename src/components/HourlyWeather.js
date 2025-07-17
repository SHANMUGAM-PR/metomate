import React, { useState, useEffect } from 'react'; 
import { fetchHourlyWeather } from '../WeatherService'; // Corrected import
import './HourlyWeather.css'; 

const HourlyWeather = ({ city }) => {  // Accept city prop
  const [hourlyData, setHourlyData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;  // If no city, do nothing

    const getHourlyWeather = async () => {
      try {
        const data = await fetchHourlyWeather(city);  // Pass city to API
        setHourlyData(data);
        setError(null);
      } catch (err) {
        setError('Could not fetch hourly weather data. Please try again.');
        setHourlyData(null);
      }
    };

    getHourlyWeather();
  }, [city]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!hourlyData) {
    return <p>Loading hourly weather data...</p>;
  }

  return (
    <div className="hourly-weather-container">
      <h2>Hourly Weather - {city}</h2>
      {hourlyData.map((hour, index) => (
        <div key={index} className="hourly-weather-card">
          <p className="time">{hour.time}</p>
          <img src={hour.condition.icon} alt={hour.condition.text} className="weather-icon" /> {/* Weather icon */}
          <p className="temperature">{hour.temp_c}°</p>
          <p className="weather-condition">{hour.condition.text}</p>
          <p className="humidity">Humidity: {hour.humidity}%</p>
          <p className="precipitation">Precipitation: {hour.precip}%</p>
          <p className="wind-speed">Wind: {hour.wind_kph} km/h</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyWeather;
