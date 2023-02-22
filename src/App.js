import React from "react";
import SearchWeather from "./SearchWeather";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="main container">
        <SearchWeather defaultCity="Kyiv" />
        <Footer />
      </div>
    </div>
  );
}
