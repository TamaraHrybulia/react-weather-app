import React from "react";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-4 CurrentCityIcon">
        <img src="" alt="" className="CurrentWeatherIcon" />
        🌥
        <div className="CurrentWeatherDescription">Partly cloudy</div>
      </div>
      <div className="col-4 CurrentTempBlock">
        <span className="CurrentTemp">{props.data.temperature} </span>
        <span className="Units">
          <a href="/" className="Active">
            ℃
          </a>{" "}
          |<a href="/">℉</a>
        </span>
      </div>
      <div className="col-4 DescriptionBlock">
        <ul>
          <li>
            💧 Humidity: <span></span>%
          </li>
          <li>
            💨 Wind speed: <span></span> km/h
          </li>
          <li>
            🌡 Feels like: <span></span>
            <span className="FeelsLikeUnits">°</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
