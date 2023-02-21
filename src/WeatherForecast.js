import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  function load() {
    let lat = props.data.coordinates.lat;
    let lon = props.data.coordinates.lon;
    let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast container text-center">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col mt-5 mb-5 key={index}">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="card-title">Fri</h2>
                      <WeatherIcon code="01d" size={6} />
                      <p className="forecast-temperatures">
                        <span className="card-day-temperature"> 19°</span>
                        <span className="card-night-temperature">10°</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
