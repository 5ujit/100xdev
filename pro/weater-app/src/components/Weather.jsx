// src/components/Weather.jsx

import React, { useState } from 'react';
import { getWeatherByCity } from './api/weat';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchWeather = async () => {
    try {
      // const data = await getWeatherByCity(city);
      const data =await getWeatherByCity(city);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError("City not found or something went wrong!");
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleFetchWeather}>Get Weather</button>

      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
