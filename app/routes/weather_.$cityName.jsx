import { redirect } from "@remix-run/server-runtime";
import { useLoaderData } from "react-router";
import { Link } from "@remix-run/react";

import LeftArrow from '../../assets/icons/leftArrow.png';
import WeatherData from "../components/WeatherData";

import { getWeatherByCityName } from '../models/weather.server';

export const loader = async ({ params, request }) => {

    const cityName = params.cityName;
    const weatherData = await getWeatherByCityName(cityName);

    console.log('City Weather: ',weatherData);

    return {
        city: cityName,
        weatherData: weatherData && weatherData.length > 0 && weatherData[0],
    }
}

const CityWeather = () => {

    const { city, weatherData } = useLoaderData();

    return (
        <div className="border-4 border-black p-20 m-10">
            <div>
                <form type='post'>
                    <input type='hidden' field='redirect' />
                    <Link className='flex justify-center items-center text-blue-500 h-14 w-32 text-lg hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:duration-300 rounded-full' to={`/`}>
                        <img src={LeftArrow} className='h-4 w-4 mr-2 fill-white' alt={'weather-icon'} /> 
                        <div className='font-gothamMedium tracking-wider'>BACK</div>    
                    </Link>
                </form>
                <div className="flex justify-center">
                    <div className="text-3xl bg-yellow-300 font-gothamBold tracking-wider px-3">
                        {city.toUpperCase()}
                    </div>
                </div>
                <WeatherData data={weatherData} /> 
            </div>
        </div>
    )
}

export default CityWeather;
