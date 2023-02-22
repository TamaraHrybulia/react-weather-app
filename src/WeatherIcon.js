import React from "react";
import mist_day from "./images/icon_50d.svg";
import mist_night from "./images/icon_50n.svg";
import snow_day from "./images/icon_13d.svg";
import snow_night from "./images/icon_13n.svg";
import thunderstorm_day from "./images/icon_11d.svg";
import thunderstorm_night from "./images/icon_11n.svg";
import rain_day from "./images/icon_10d.svg";
import rain_night from "./images/icon_10n.svg";
import shower_rain from "./images/icon_09n.svg";
import broken_clouds_day from "./images/icon_04d.svg";
import broken_clouds_night from "./images/icon_04n.svg";
import scattered_clouds_day from "./images/icon_03d.svg";
import scattered_clouds_night from "./images/icon_03n.svg";
import few_clouds_day from "./images/icon_02d.svg";
import few_clouds_night from "./images/icon_02n.svg";
import clear_sky_day from "./images/icon_01d.svg";
import clear_sky_night from "./images/icon_01n.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clear_sky_day,
    "01n": clear_sky_night,
    "02d": few_clouds_day,
    "02n": few_clouds_night,
    "03d": scattered_clouds_day,
    "03n": scattered_clouds_night,
    "04d": broken_clouds_day,
    "04n": broken_clouds_night,
    "09d": shower_rain,
    "09n": shower_rain,
    "10d": rain_day,
    "10n": rain_night,
    "11d": thunderstorm_day,
    "11n": thunderstorm_night,
    "13d": snow_day,
    "13n": snow_night,
    "50d": mist_day,
    "50n": mist_night,
  };

  return (
    <div className="WeatherIcon">
      <img
        src={codeMapping[props.code]}
        alt={props.alt}
        style={{ width: `${props.size}vw` }}
      />
    </div>
  );
}
