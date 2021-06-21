import React from "react";

export default function NextDay() {
  return (
    <div className="weather-forecast">
      <div className="row p-2 justify-content-center first">
        <div className="col p-2 col-sm-2 day">Thursday</div>
        <div className="col p-2 col-sm-2 icon">
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" />
        </div>
        <div className="col p-2 col-sm-2 temperature">23°/10°</div>
      </div>
    </div>
  );
}
