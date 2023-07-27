import { useLoaderData, useActionData } from "react-router";
import axios from 'axios';
import { Form, Link } from "@remix-run/react";
import { redirect } from '@remix-run/server-runtime';
import LeftArrow from '../../assets/icons/leftArrow.png';

import WeatherData from "../components/WeatherData";
import Tippy from '@tippyjs/react';
import TippyStyles from 'tippy.js/dist/tippy.css';
// import 'tippy.js/animations/scale-subtle.css';

import { formatWeatherData } from '../utils/formatWeatherData';
import { 
    getWeatherByCityName, 
    removeWeatherLocation, 
    updateWeatherForCity 
} from '../models/weather.server';

const GET_LATEST_WEATHER_INFO = 'update-weather-info';

export function links() {
  return [{ rel: "stylesheet", href: TippyStyles }];
}

export const loader = async ({ params, request }) => {

    const cityName = params.cityName;
    const weatherData = await getWeatherByCityName(cityName);

    // console.log('City Weather: ',weatherData);

    return {
        city: cityName,
        weatherData: weatherData && weatherData.length > 0 && weatherData[0]
    }
}

export const action = async ({ params, request }) => {

    const city = params.cityName;

    const formData = await request.formData();
    const requestType = formData.get('request-type');

    if(requestType === GET_LATEST_WEATHER_INFO) {
        console.log("update weather");

        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
        );

        const hourlyForecast = 

        console.log("Weather Data: ",res.data);

        const formattedData = formatWeatherData(res.data);
        await updateWeatherForCity(city, formattedData);

        return null;
    } else {
        try {
            console.log(`Remove City ${city}`);
            const weatherData = await removeWeatherLocation(city);

            return redirect(`/`);
        } catch(error) { 
            console.log("Error: ",error);
        }
    }
}

const CityWeather = (props) => {

    const { city, weatherData } = useLoaderData();

    return (
        <div className="border-4 border-black p-20 m-10 dark:bg-stone-950">
            <div>
                <div className="flex justify-between">
                    <Link className='flex justify-center items-center text-blue-500 h-14 w-32 text-lg hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:duration-300 rounded-full' to={`/`}>
                        <img src={LeftArrow} className='h-4 w-4 mr-2 fill-white' alt={'left-arrow'} /> 
                        <div className='font-gothamMedium tracking-wider'>BACK</div>    
                    </Link>
                    <Form method='post'>
                        <Tippy 
                            content={'Remove Location'}
                            disabled={false}
                            placement={'right-start'}
                            arrow={true}
                            animation={'scale-subtle'}
                            inertia='true'
                            // offset={[-20, 5]} // [skidding, distance]
                        >
                            <button type='submit' className='group h-12 w-12 flex justify-center items-center transition duration-300 ease-in-out hover:scale-95 hover:text-white hover:bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl'>
                                <svg className='h-7 w-7 fill-black group-hover:fill-white dark:fill-white dark:group-hover:fill-black' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    
                                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                                </svg>
                            </button>
                        </Tippy> 
                    </Form>
                </div>
                <div className="flex justify-center">
                    <div className="text-3xl bg-yellow-300 font-gothamBold tracking-wider px-3 dark:bg-neutral-800 dark:text-orange-400">
                        {city.toUpperCase()}
                    </div>
                </div>
                <WeatherData data={weatherData} /> 
            </div>
        </div>
    )
}

export default CityWeather;
