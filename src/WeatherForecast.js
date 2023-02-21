import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response.data.list);
    setLoaded(true);
    setForecastData(response.data);
  }

  function load() {
    let lat = props.data.coordinates.lat;
    let lon = props.data.coordinates.lon;
    let apiKey = "ef282473708576ee3e925f4f705e27c8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast container text-center">
        <div className="row">
          <div className="col mt-5 mb-5">
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
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
