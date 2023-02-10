import React from "react";

import "./CurrentTemp.css";

export default function CurrentTemp() {
  return (
    <div className="col-4 CurrentTempBlock">
      <span className="CurrentTemp" id="current-temperature">
        19
      </span>
      <span className="Units">
        <a href="#" id="celsius-link" class="Active">
          ℃
        </a>{" "}
        |
        <a href="#" id="fahrenheit-link">
          ℉
        </a>
      </span>
    </div>
  );
}
