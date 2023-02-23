import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="CurrentTemperature">
        <span className="CurrentTemp">{Math.round(props.celsius)} </span>
        <span className="Units">
          ℃ |{" "}
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemperature">
        <span className="CurrentTemp">{fahrenheit()} </span>
        <span className="Units">
          <a href="/" onClick={showCelsius}>
            {" "}
            ℃{" "}
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}
