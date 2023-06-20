import { useLoaderData, useActionData } from "react-router";
import { Form, Link } from "@remix-run/react";
import { redirect } from '@remix-run/server-runtime';

import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-subtle.css';

import LeftArrow from '../../assets/icons/leftArrow.png';
import WeatherData from "../components/WeatherData";

import { 
    getWeatherByCityName, 
    removeWeatherLocation 
} from '../models/weather.server';

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

    try {
        console.log(`Remove City ${city}`);
        const weatherData = await removeWeatherLocation(city);

        return redirect(`/`);
    } catch(error) { 
        console.log("Error: ",error);
    }

}

const CityWeather = (props) => {

    const { city, weatherData } = useLoaderData();

    return (
        <div className="border-4 border-black p-20 m-10">
            <div>
                <div className="flex justify-between">
                    <Link className='flex justify-center items-center text-blue-500 h-14 w-32 text-lg hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:duration-300 rounded-full' to={`/`}>
                        <img src={LeftArrow} className='h-4 w-4 mr-2 fill-white' alt={'weather-icon'} /> 
                        <div className='font-gothamMedium tracking-wider'>BACK</div>    
                    </Link>
                    <Form method='post'>
                        <Tippy 
                            content={'Remove Location'}
                            visible={true}
                            placement={'right-start'}
                            arrow={true}
                            animation={'scale-subtle'}
                            inertia='true'
                            className={{
                                color: 'red',
                                backgroundColor: 'white'
                            }}
                            // offset={[-20, 5]} // [skidding, distance]
                        >
                            <button type='submit' className='group h-12 w-12 flex justify-center items-center hover:transition ease-in-out hover:duration-150 hover:text-white hover:bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl'>
                                <svg className='h-7 w-7 fill-black group-hover:fill-white' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    
                                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                                </svg>
                            </button>
                        </Tippy> 
                    </Form>
                </div>
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
