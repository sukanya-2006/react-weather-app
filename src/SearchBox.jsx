import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';

export default function SearchBox ({updateInfo}) {
     let [city, setCity] = useState("");
     let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8bac15776522ae9118f7047fbeb04cfc";
    
    let getWeatherInfo = async () => {
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            temp_min: jsonResponse.main.temp_min,
            temp_max: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        } catch (err) {
           throw err;
        }
    };

   

let handleChange = (evt) => {
  setCity(evt.target.value);
  setError(false);
};

let handleSubmit = async (evt) => {
    try {
     evt.preventDefault();
    console.log(city);
    setCity("");
     let newInfo = await getWeatherInfo();
     updateInfo(newInfo);
      setError(false); 
    } catch (err) {
        setError(true);
    }
};

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                  <TextField 
                  id="city" 
                  label="City Name" 
                  variant="outlined" 
                  required value={city} 
                  onChange={handleChange}
                  />
                  <br /> <br />
                  <Button variant="contained"type='submit' >
                   Search
                  </Button>
                  {error && <p style={{color: "red"}}>City not found. Please try again.</p>}
            </form>   
        </div>
    );
}