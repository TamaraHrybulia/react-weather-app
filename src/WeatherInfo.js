import React from "react";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-4 CurrentCityIcon">
        <img
          src={props.data.icon}
          alt={props.data.description}
          className="CurrentWeatherIcon"
        />

        <div className="CurrentWeatherDescription">
          {props.data.description}
        </div>
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
          <li>💧 Humidity: {props.data.humidity} %</li>
          <li>💨 Wind speed: {props.data.wind} km/h</li>
          <li>
            🌡 Feels like: {props.data.feelsLike}
            <span className="FeelsLikeUnits">°</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
