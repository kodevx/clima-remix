import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Link } from "@remix-run/react";
import axios from "axios";
import WeatherData from "../components/WeatherData";

import { formatWeatherData } from '../utils/formatWeatherData';
import { saveCityWeather } from '../models/weather.server';

export const loader = async ({ params, request }) => {
    
    const city = params.cityName;
    let weatherData = {};
    let errorStatus = null;
    
    try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
        );
        console.log("Weather Data: ",res.data);

        weatherData = {
            city,
            weather: res.data.weather[0],
            main: res.data.main, 
            wind: res.data.wind
        }

        const formattedData = formatWeatherData(res.data);
        // await saveCityWeather(formattedData);

        errorStatus = null

    } catch (err) {
        console.error("Weather API Error: ",err);
        errorStatus = 'NOT_FOUND' 
    }

    return ({ city, weatherData, errorStatus });
}

const CityWeather = () => {

    const { city, weatherData, errorStatus } = useLoaderData();

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(prevState => !prevState);
    }

    const isWeatherDataAvailable = !!(errorStatus === null);
    console.log("isWeatherDataAvailable: ",isWeatherDataAvailable);

    return (
        <div className="border-4 border-black p-10 m-10">
            <div className="">
                <div className="flex">
                    <div className="text-2xl px-2 bg-yellow-300 font-gothamBold tracking-wider">
                        {city.toUpperCase()}
                    </div>
                </div>
                <WeatherData 
                    // isExpanded={isExpanded} 
                    // handleExpand={handleExpand} 
                    // isWeatherDataAvailable={isWeatherDataAvailable}
                    // {...weatherData} 
                /> 
            </div>
        </div>
    )
}

export default CityWeather;
