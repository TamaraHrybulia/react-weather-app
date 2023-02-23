import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function showMaxTemp() {
    let MaxTemperature = Math.round(props.data.temp.max);
    return `${MaxTemperature}°`;
  }

  function showMinTemp() {
    let MinTemperature = Math.round(props.data.temp.min);
    return `${MinTemperature}°`;
  }

  function showDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay card">
      <div className="card-body">
        <h2 className="card-title">{showDay()}</h2>
        <WeatherIcon code={props.data.weather[0].icon} size={5} />
        <p className="forecast-temperatures">
          <span className="card-day-temperature"> {showMaxTemp()} </span>
          <span className="card-night-temperature">{showMinTemp()}</span>
        </p>
      </div>
    </div>
  );
}
