import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp() {

  const [weatherInfo, setWeatherInfo] = useState({
    city:"Guntur",
    feels_like: 24.98,
    temp: 25.38,
    humidity: 74,
    tempMin: 21,
    tempMax: 34,
    weather: "Haze"
  });

  const updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }

  return (
    <div>
        <h1 style={{color:"black"}}>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}
