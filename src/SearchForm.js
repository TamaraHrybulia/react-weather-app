import React from "react";

import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form id="search-form">
      <div className="row g-2">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="enter a city"
            id="search-text-input"
            autocomplete="off"
          />
        </div>
        <div className="col-6">
          <button type="submit" className="btn btn-primary me-2">
            search
          </button>
          <button
            type="button"
            className="btn btn-primary"
            id="current-city-button"
          >
            current city
          </button>
        </div>
      </div>
    </form>
  );
}
