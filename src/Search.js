import React,{ useState } from "react";
import axios from "axios";
import MainCity from "./MainCity.js";
import NextDay from "./NextDay.js";
// import NextDay from "./NextDay.js";

export default function Search() {
  const [city, setCity] = useState("");
  let [weatherInfo, setWeatherInfo] = useState({});
  let apiKey = "6c4290abd5648abaf091c539d72478db";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  
function showWeather(response) {
  let latitude = response.data.coord.lat;
  let longtitude = response.data.coord.lon;
  let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&units=metric&appid=${apiKey}`;  
  
  axios.get(forecastUrl).then(function(forecastResponse) {
    setWeatherInfo({
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        city: response.data.name,
        icon: response.data.weather[0].icon,
        forecast: forecastResponse.data.daily
    }); 
  })

}

function handleSubmit(event) {
    event.preventDefault();
    
    axios.get(url).then(showWeather);
    
}

function showCity(event) {
    setCity(event.target.value);
}

  return (
    <div>
        <div className="row p-2 justify-content-center">
            <div className="col col-md-4">
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            placeholder="Choose city..." onChange={showCity}
          />
        </form>  
      </div>
    </div>
    {weatherInfo.temperature ? <div><MainCity data={weatherInfo} /><NextDay data={weatherInfo.forecast} /></div> : <div className="row p-2 justify-content-center"><p>Choose city...</p></div>}
    </div>
  );
}