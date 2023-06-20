import { useLoaderData } from 'react-router';
import { Form } from '@remix-run/react';
import { redirect } from '@remix-run/server-runtime';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import WeatherSummary from '../components/WeatherSummary';

import { formatWeatherData } from '../utils/formatWeatherData';
import { getCitiesWeatherList, saveCityWeather } from '../models/weather.server';

export const meta = () => {
    return [
      { title: "Weather App" },
      { name: "description", content: "Weather App" },
    ];
  };

export const loader = async ({ params, request }) => {

    const cities = await getCitiesWeatherList();

    console.log("cities: ",cities);

    return {
        cities
    }
}

export const action = async ({ request, params }) => {

    const formData = await request.formData();
    const city = formData.get("city");

    let errorStatus = null;
    
    console.log("City: ",city);

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

const Index = () => {

    const { cities } = useLoaderData();

    return (
        <div className="border-4 border-gray-950 p-10 m-10">
            <Form
                method="post"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    width: "100%",
                }}
            >
                <div>
                    <div className="flex justify-center text-2xl font-gothamBold ml-1 mb-5 tracking-widest">
                        LOCATIONS
                    </div>
                    <SearchBar />
                    <div>
                        {cities && cities.length > 0 ? cities.map(data => (
                            <WeatherSummary 
                                key={data.id}
                                data={data} 
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
            </Form>
        </div>
    )
}

export default Index;
