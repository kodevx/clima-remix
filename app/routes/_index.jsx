import { useLoaderData } from 'react-router';
import { Form } from '@remix-run/react';
import { redirect } from '@remix-run/server-runtime';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import WeatherSummary from '../components/WeatherSummary';

import { getTheme } from '../../app/models/theme.server';
import { formatWeatherData } from '../utils/formatWeatherData';

import { 
    getCitiesWeatherList, 
    saveCityWeather, 
    removeWeatherLocation 
} from '../models/weather.server';

import { DARK_THEME } from '../constants/constants';

const REMOVE_LOCATION = 'remove-location';

export const meta = () => {
    return [
      { title: "Weather App" },
      { name: "description", content: "Weather App" },
    ];
  };

export const loader = async ({ params, request }) => {

    const cities = await getCitiesWeatherList();

    const themeData = await getTheme();

    console.log("cities: ",cities);

    return {
        cities,
        isDarkMode: !!(themeData[0].theme === DARK_THEME)
    }
}

export const action = async ({ request, params }) => {

    const formData = await request.formData();
    const city = formData.get('city');
    const requestType = formData.get('request-type');

    let errorStatus = null;
    
    console.log("City: ",city);

    if(requestType === REMOVE_LOCATION) {   // Remove Location from Weather List
        try {
            console.log(`Remove City ${city}`);
            const weatherData = await removeWeatherLocation(city);

            return redirect(`/`);
        } catch(error) { 
            console.log("Error: ",error);

            return null;
        }
    } else {                            // Add Location to Weather List
        try {
            if(!city) {
                throw 'CITY_ERROR';
            }
            
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
            );
            console.log("Weather Data: ",res.data);

            const formattedData = formatWeatherData(res.data);
            await saveCityWeather(formattedData);

            errorStatus = null
            
        } catch (err) {
            console.error("Weather API Error: ",err);
            errorStatus = 'NOT_FOUND' 
        }

        if(city) {
            return redirect(`/weather/${city}`);
        } else {
            return redirect(`/`);
        }
    }
}

const Index = () => {

    const { cities, isDarkMode } = useLoaderData();

    return (
        <div className="border-4 border-gray-950 p-10 m-10 dark:bg-stone-950">
            <div>
                <Form method="post">
                    <div className="flex justify-center text-2xl font-gothamBold ml-1 mb-5 tracking-widest dark:text-orange-300">
                        LOCATIONS
                    </div>
                    <SearchBar />
                </Form>
                <div>
                    {cities && cities.length > 0 ? cities.map(data => (
                        <WeatherSummary 
                            key={data.id}
                            data={data}
                            isDarkMode={isDarkMode}
                        />
                    )) : (
                        <div className='flex justify-center'>
                            <span className='text-lg text-white px-3 bg-black font-gothamMedium tracking-wide'>
                                NO CITIES ARE ADDED.
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Index;
