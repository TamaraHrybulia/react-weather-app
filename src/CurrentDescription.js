import React from "react";

import "./CurrentDescription.css";

export default function CurrentDescription() {
  return (
    <div className="col-4 DescriptionBlock">
      <ul>
        <li>
          💧 Humidity: <span id="humidity"></span>%
        </li>
        <li>
          💨 Wind speed: <span id="wind-speed"></span> km/h
        </li>
        <li>
          🌡 Feels like: <span id="feels-like"></span>
          <span className="FeelsLikeUnits">°</span>
        </li>
      </ul>
    </div>
  );
}
