import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
         {
        city : "Wonderland",
        feelslike: 24.84,
        temp: 25.05,
        temp_min: 25.05,
        temp_max: 25.05,
        humidity: 47,
        weather: "haze"
    }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

return( 
<div 
style={{textAlign: "center", marginTop: "1rem"}}> 
<h2>Weather App by Sukanya</h2> 
<SearchBox updateInfo={updateInfo}>
    </SearchBox> 
    <InfoBox info={weatherInfo}>
        </InfoBox> 
        </div> 
        );
}