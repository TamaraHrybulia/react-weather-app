import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded by Tamara Hrybulia and is{" "}
      <a
        href="https://github.com/TamaraHrybulia/weather-application"
        target="_blank"
      >
        open-sourced on GitHub{" "}
      </a>
      and hosted on{" "}
      <a href="https://effulgent-gecko-547801.netlify.app/"> Netlify </a>
    </footer>
  );
}
