import React from "react";


export default function NextDay(props) {
  return props.data.map(function(dailyData, index) {
    if (index < 5) {
      return (
        <div className="weather-forecast">
          <div className="row p-2 justify-content-center first" key={index}>
            <div className="col p-2 col-sm-2 day">{new Date(dailyData.dt *1000).toLocaleString("default", { weekday: "long" })}</div>
            <div className="col p-2 col-sm-2 icon">
              <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" />
            </div>
            <div className="col p-2 col-sm-2 temperature">{Math.round(dailyData.temp.max)}°/{Math.round(dailyData.temp.min)}°</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });
}


