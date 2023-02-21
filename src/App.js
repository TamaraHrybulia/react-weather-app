import React from "react";
import SearchWeather from "./SearchWeather";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="main container">
        <div className="MainDisplay">
          <SearchWeather defaultCity="Kyiv" />
        </div>
        <div className="WeatherForecastDisplay">
          <WeatherForecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
