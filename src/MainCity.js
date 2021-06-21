import React from "react";

export default function MainCity() {
  return (
    <div className="row p-2 justify-content-center">
      <div className="col p-2 col-md-3">
        <div className="pt-2 text-center weather-now city">Złotniki</div>
        <div className="text-center weather-now this-day-date">03.06.2021</div>
        <div className="text-center weather-now this-day-temp">
          <span>24</span>° C
        </div>
        <div className="text-center weather-now this-day-conditions">
          clear sky
        </div>
      </div>
      <div className="col col-md-3 p-2 align-self-center text-center this-day-icon">
        <div
          className="text-center weather-now moved-icon main-icon"
          id="main-icon"
        >
          <span> ☀️</span>
        </div>
        <div className="text-center weather-now this-day-conditions moved-icon">
          wind: <span>2</span>m/s
        </div>
        <div className="text-center weather-now this-day-conditions moved-icon">
          humidity: <span>38</span>%
        </div>
      </div>
    </div>
  );
}
