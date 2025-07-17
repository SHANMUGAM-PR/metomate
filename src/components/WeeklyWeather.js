import React, { useState, useEffect } from 'react';
import { fetchWeeklyWeather } from '../WeatherService';  // Corrected import
import './WeeklyWeather.css'; // Importing the CSS file

const WeeklyWeather = ({ city }) => {
  const [weeklyData, setWeeklyData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const getWeeklyWeather = async () => {
      try {
        const data = await fetchWeeklyWeather(city);  // Pass city to API
        setWeeklyData(data);
        setError(null);
      } catch (err) {
        setError('Could not fetch weekly weather data. Please try again.');
        setWeeklyData(null);
      }
    };

    getWeeklyWeather();
  }, [city]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!weeklyData) {
    return <p>Loading weekly weather data...</p>;
  }

  return (
    <div className="weekly-weather-container">
      <h2>Weekly Weather</h2>
      {weeklyData.map((day, index) => (
        <div key={index} className="weekly-weather-card">
          <p><strong>Date:</strong> {day.date}</p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} className="weather-icon" /> {/* Weather icon */}
          <p><strong>Weather Condition:</strong> {day.day.condition.text}</p>
          <p><strong>Average Temperature:</strong> {day.day.avgtemp_c}°C</p>
          <p><strong>Max Temperature:</strong> {day.day.maxtemp_c}°C</p>
          <p><strong>Min Temperature:</strong> {day.day.mintemp_c}°C</p>
          <p><strong>Humidity:</strong> {day.day.avghumidity}%</p>
          <p><strong>Wind Speed:</strong> {day.day.maxwind_kph} km/h</p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyWeather;
