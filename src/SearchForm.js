import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";

export default function SearchForm() {
  let [city, setCity] = useState(null);

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ef282473708576ee3e925f4f705e27c8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="enter a city"
            autoComplete="off"
            onChange={changeCity}
          />
        </div>
        <div className="col-6">
          <button type="submit" className="btn btn-primary me-2">
            search
          </button>
          <button type="button" className="btn btn-primary">
            current city
          </button>
        </div>
      </div>
    </form>
  );
}
