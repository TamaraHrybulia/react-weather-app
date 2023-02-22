import React from "react";
import CurrentTemperature from "./CurrentTemperature";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4 CurrentCityIcon">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={14}
          />

          <div className="CurrentWeatherDescription">
            {props.data.description}
          </div>
        </div>
        <div className="col-4 CurrentTempBlock">
          <CurrentTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-4 DescriptionBlock">
          <ul>
            <li>
              🌡 Feels like: {props.data.feelsLike}
              <span className="FeelsLikeUnits">°</span>
            </li>
            <li>💧 Humidity: {props.data.humidity} %</li>
            <li>💨 Wind speed: {props.data.wind} km/h</li>
            <li>
              {" "}
              ☀ Temp max: {props.data.tempMax}
              <span className="FeelsLikeUnits">°</span>
            </li>
            <li>
              {" "}
              🌙 Temp min: {props.data.tempMin}
              <span className="FeelsLikeUnits">°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
