import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export default function InfoBox({ info }) {

    // Image URLs
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=2232";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1674";
    const RAIN_URL = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=2231";
    const CLEAR_URL = "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=2070";
    const CLOUD_URL = "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=2069";

    // Convert weather text to lowercase
    const weather = info.weather.toLowerCase();

    // Variables for image and icon
    let imageUrl;
    let icon;


// Temperature based logic ONLY

if (info.temp >= 35) {

    // Very hot
    imageUrl = HOT_URL;
    icon = <SunnyIcon sx={{ marginLeft: 1, fontSize: 30 }} />;

}
else if (info.temp >= 25) {

    // Warm / clear weather
    imageUrl = CLEAR_URL;
    icon = <CloudQueueIcon sx={{ marginLeft: 1, fontSize: 30 }} />;

}
else if (info.temp >= 15) {

    // Moderate / cloudy
    imageUrl = CLOUD_URL;
    icon = <CloudIcon sx={{ marginLeft: 1, fontSize: 30 }} />;

}
else if (info.temp >= 5) {

    // Cold / rainy feel
    imageUrl = RAIN_URL;
    icon = <ThunderstormIcon sx={{ marginLeft: 1, fontSize: 30 }} />;

}
else {

    // Very cold
    imageUrl = COLD_URL;
    icon = <AcUnitIcon sx={{ marginLeft: 1, fontSize: 30 }} />;

}

    return (
        <div className="InfoBox">
            <div className="cardContainer">

                <Card sx={{ width: 500, margin: "auto", marginTop: 2 }}>

                    <CardMedia
                        sx={{ height: 250 }}
                        image={imageUrl}
                    />

                    <CardContent>

                        {/* City name with icon */}
                        <Typography
                            variant="h5"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "bold"
                            }}
                        >
                            {info.city} {icon}
                        </Typography>

                        {/* Weather details */}
                        <Typography sx={{ textAlign: "center", marginTop: 1 }}>

                            <p>Temperature = {info.temp}°C</p>

                            <p>Humidity = {info.humidity}%</p>

                            <p>Min Temperature = {info.temp_min}°C</p>

                            <p>Max Temperature = {info.temp_max}°C</p>

                            <p>Weather = <i>{info.weather}</i></p>

                            <p>Feels like = {info.feelslike}°C</p>

                        </Typography>

                    </CardContent>

                </Card>

            </div>
        </div>
    );
}