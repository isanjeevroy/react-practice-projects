import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const [city,setCity] = useState("");
    const [error,setError] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL
    const API_KEY = import.meta.env.VITE_API_KEY

    const getWeather = async()=>{
        try{
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const responseJson = await response.json();
            const result = {
                city:city,
                feels_like:responseJson.main.feels_like,
                temp:responseJson.main.temp,
                humidity:responseJson.main.humidity,
                tempMin:responseJson.main.temp_min,
                tempMax:responseJson.main.temp_max,
                weather:responseJson.weather[0].description
            }
            return result;
            setError(true);
        }catch(err){
            throw err;
        }   
    };

    const handleInputChange = (event)=>{
        setCity(event.target.value);
    };

    const handleForm = async(event)=>{
        try{
            event.preventDefault();
            setCity("");
            console.log(city);
            const newInfo = await getWeather();
            updateInfo(newInfo);
            setError(false);
        }catch(err){
            setError(true);
        }    
    };

    return (
        <div>
            <form onSubmit={handleForm}>
                <TextField id="city" label="Search City" variant="outlined" required  value={city} onChange={handleInputChange}/> 
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                <br /> <br />
                {error && <p style={{color:"red"}}>Such place not found! </p>}
            </form>
        </div>
    )
}
