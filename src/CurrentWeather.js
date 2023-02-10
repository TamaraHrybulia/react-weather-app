import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="col-3 CurrentCityIcon">
      <img src="" alt="" className="CurrentWeatherIcon" id="main-icon" />
      🌥
      <div
        className="CurrentWeatherDescription"
        id="current-weather-description"
      >
        Partly cloudy
      </div>
    </div>
  );
}
