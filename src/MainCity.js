import React from "react";


export default function MainCity(props) {

    let now = new Date();
    let weekday = now.toLocaleString("default", { weekday: "long" });
    let hours = now.getHours();
        if (hours < 10) {
        hours = `0${hours}`;
        }
    let minutes = now.getMinutes();
        if (minutes < 10) {
        minutes = `0${minutes}`;
        }
    let icon = `http://openweathermap.org/img/wn/${props.data.icon}@2x.png`;
  return (
    <div className="row p-2 justify-content-center">
      <div className="col p-2 col-md-3">
        <div className="pt-2 text-center weather-now city">{props.data.city}</div>
        <div className="text-center weather-now this-day-date">{weekday}, {hours}:{minutes}</div>
        <div className="text-center weather-now this-day-temp">
  <span>{Math.round(props.data.temperature)}</span>° C
        </div>
        <div className="text-center weather-now this-day-conditions">
          {props.data.description}
        </div>
      </div>
      <div className="col col-md-3 p-2 align-self-center text-center this-day-icon">
        <div
          className="text-center weather-now moved-icon main-icon"
          id="main-icon"
        >
          <span> <img src={icon} alt="icon" /></span>
        </div>
        <div className="text-center weather-now this-day-conditions moved-icon">
  wind: <span>{Math.round(props.data.wind)}</span>m/s
        </div>
        <div className="text-center weather-now this-day-conditions moved-icon">
  humidity: <span>{Math.round(props.data.humidity)}</span>%
        </div>
      </div>
    </div>
  );
}
