import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
}
