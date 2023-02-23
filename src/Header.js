import React from "react";
import FormattedDate from "./FormattedDate";

import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <h1>
        {props.data.cityName}, {props.data.countryName}
      </h1>
      <span className="date">
        <FormattedDate date={props.data.dateInfo} />
      </span>
    </div>
  );
}
