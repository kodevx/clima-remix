import { useState } from "react";
import { redirect } from "@remix-run/server-runtime";
import { useLoaderData } from "react-router";
import axios from "axios";
import LeftArrow from '../../assets/icons/leftArrow.png';
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
        await saveCityWeather(formattedData);

        errorStatus = null

    } catch (err) {
        console.error("Weather API Error: ",err);
        errorStatus = 'NOT_FOUND' 
    }

    return ({ city, weatherData, errorStatus });
}

export const action = async ({ params, request }) => {
    return redirect(`/weather`);
}

const CityWeather = () => {

    const { city, weatherData, errorStatus } = useLoaderData();

    const isWeatherDataAvailable = !!(errorStatus === null);
    console.log("isWeatherDataAvailable: ",isWeatherDataAvailable);

    return (
        <div className="border-4 border-black p-20 m-10">
            <div>
                <form type='post'>
                    <input type='hidden' field='redirect' />
                    <button 
                        type='submit'
                        className='flex justify-center items-center text-blue-500 h-14 w-32 text-lg hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:duration-300 rounded-full'
                    >
                        <img src={LeftArrow} className='h-4 w-4 mr-2 fill-white' alt={'weather-icon'} /> 
                        <div className='font-gothamMedium tracking-wider'>BACK</div>
                    </button>
                </form>
                <div className="flex justify-center">
                    <div className="text-3xl bg-yellow-300 font-gothamBold tracking-wider px-3">
                        {city.toUpperCase()}
                    </div>
                </div>
                <WeatherData 
                    isWeatherDataAvailable={isWeatherDataAvailable}
                    {...weatherData} 
                /> 
            </div>
        </div>
    )
}

export default CityWeather;
