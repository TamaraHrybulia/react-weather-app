import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./SearchWeather.css";

export default function SearchWeather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ loaded: false });

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function searchCity() {
    let apiKey = "ef282473708576ee3e925f4f705e27c8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function searchLocation(position) {
    let apiKey = "ef282473708576ee3e925f4f705e27c8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
      cityName: response.data.name,
      countryName: response.data.sys.country,
      dateInfo: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="SearchWeather">
        <div className="MainDisplay">
          <form onSubmit={handleSubmit}>
            <div className="row g-2">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter a city"
                  autoComplete="off"
                  onChange={changeCity}
                />
              </div>
              <div className="col-6">
                <button type="submit" className="btn btn-primary me-2">
                  search
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={getCurrentPosition}
                >
                  current city
                </button>
              </div>
            </div>
          </form>
          <Header data={weatherData} />
          <WeatherInfo data={weatherData} />
        </div>
        <div className="WeatherForecastDisplay">
          <WeatherForecast data={weatherData} />
        </div>
      </div>
    );
  } else {
    searchCity();
  }
}
