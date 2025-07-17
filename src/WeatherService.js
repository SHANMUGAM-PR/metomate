const apiKey = '95e5dfc7cb0044e880473027241710';  // Replace with your actual API key
const baseUrl = 'http://api.weatherapi.com/v1/current.json';
const hourlyUrl = 'http://api.weatherapi.com/v1/forecast.json';  // Modify based on actual hourly API
const weeklyUrl = 'http://api.weatherapi.com/v1/forecast.json';  // Modify based on actual weekly API

// Fetch current weather data for a given city
export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${baseUrl}?key=${apiKey}&q=${city}&aqi=no`);
    
    if (!response.ok) {
      throw new Error('City not found or invalid API key');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;  // Re-throw the error to handle it upstream
  }
};

// Fetch hourly weather data for a given city for the next 24 hours
export const fetchHourlyWeather = async (city) => {
  try {
    const response = await fetch(`${hourlyUrl}?key=${apiKey}&q=${city}&hours=24&aqi=no`);
    
    if (!response.ok) {
      throw new Error('Could not fetch hourly weather data');
    }

    const data = await response.json();
    console.log('Hourly weather data:', data);  // Log the API response for debugging
    return data.forecast.forecastday[0].hour;  // Adjust based on the API response structure
  } catch (error) {
    console.error('Error fetching hourly weather:', error);
    throw error;  // Re-throw the error to handle it upstream
  }
};

// Fetch weekly weather forecast for a given city (next 7 days)
export const fetchWeeklyWeather = async (city) => {
  try {
    const response = await fetch(`${weeklyUrl}?key=${apiKey}&q=${city}&days=7&aqi=no`);
    
    if (!response.ok) {
      throw new Error('Could not fetch weekly weather data');
    }

    const data = await response.json();
    console.log('Weekly weather data:', data);  // Log the API response for debugging
    return data.forecast.forecastday;  // Adjust based on the API response structure
  } catch (error) {
    console.error('Error fetching weekly weather:', error);
    throw error;  // Re-throw the error to handle it upstream
  }
};
