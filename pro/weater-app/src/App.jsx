import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = "3f467401d0456880db1302995fc8d822";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try{
      const response= await axios.get(URL)
      setWeatherData(response.data);
      setError(null)

    }catch(err){
      setError(null);
      setError("city not found or something went worong!");
    }
  };

  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>
        Weather App </h1>
        <input type="text" 
          value={city}
            onChange={(e)=>setCity(e.target.value)}
                placeholder="Enter city name"
                />

                <button onClick={fetchWeather}>Get Wether </button>
                {error && <p style={{color: 'red'}}>{error}</p>}
                {weatherData && (
                  <div>
                    <h2>
                      {weatherData.name}
                    </h2>
                    <p>Temperature: {weatherData.main.temp}°C </p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                  </div>
                )}
    </div>
  )



};

// const API_KEY = '3f467401d0456880db1302995fc8d822';
