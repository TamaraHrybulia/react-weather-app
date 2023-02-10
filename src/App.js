import React from "react";
import SearchForm from "./SearchForm";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import CurrentTemp from "./CurrentTemp";
import CurrentDescription from "./CurrentDescription";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="main container">
        <div className="MainDisplay">
          <SearchForm />
          <Header />
          <div className="row">
            <CurrentWeather />
            <CurrentTemp />
            <CurrentDescription />
          </div>
        </div>
        <div className="WeatherForecast"></div>
        <Footer />
      </div>
    </div>
  );
}
