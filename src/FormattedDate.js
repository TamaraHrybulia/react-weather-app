import React from "react";

import "./FormattedDate.css";

export default function FormattedDate(props) {
  let date = props.date.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tueasday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormattedDate">
      {date} {month}, {year}, {day}, {hours}:{minutes}
    </div>
  );
}
