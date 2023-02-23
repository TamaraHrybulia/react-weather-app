import React from "react";
import FormattedDate from "./FormattedDate";

export default function Header(props) {
  return (
    <div className="Header">
      <h1>
        {props.data.cityName}, {props.data.countryName}
      </h1>
      <FormattedDate date={props.data.dateInfo} />
    </div>
  );
}
