import React, { Fragment } from 'react';
import { Form } from "@remix-run/react";
import { getIconForWeather } from '../../utils/getIconForWeather';
import UpdateIcon from '../../../assets/icons/LightTheme/refresh.png';

const WeatherData = props => {

    const { data, isDarkTheme } = props;

    if(!data) {
        return (
            <div className='text-lg flex justify-center mt-14'>
               <div className='text-white px-3 bg-black font-gothamMedium tracking-wide dark:bg-neutral-800 dark:text-orange-400'>
                    WEATHER DATA NOT AVAILABLE.
                </div>
            </div>
        )
    }

    const weatherIcon = getIconForWeather(data.desc, isDarkTheme);

    const refinedDateFromUTC = new Date(data.updatedAt);
    const localDateAndTime = 
        refinedDateFromUTC.toLocaleString('en-IN', { 
            year: 'numeric', 
            month: 'numeric', 
            day: 'numeric', 
            hour: '2-digit', 
            minute:'2-digit' 
        });

    return (
        <Fragment>
            <div className='p-10'>
                <div className='flex flex-col items-center my-6'>
                    <img src={weatherIcon} className='h-14 w-14 mb-4' alt={'weather-icon'} /> 
                    <div className='font-gothamMedium text-2xl mt-4 tracking-wide dark:text-orange-300'>{data.desc.toUpperCase()}</div>
                    <div className='font-gothamMedium text-2xl mt-2 dark:text-orange-300'>{data.temp}°C</div>
                </div>
                <div className='flex flex-col group p-11 mb-5 shadow-xl transition duration-300 ease-in-out hover:translate-x-1 hover:scale-105 dark:bg-neutral-800'>
                    <div className='flex'>
                        <div className='text-lg mb-3 px-3 font-gothamMedium tracking-wider hover:transition duration-300 ease-in-out group-hover:bg-orange-300 dark:text-orange-300 dark:group-hover:text-black'>CURRENT WEATHER</div>
                    </div>
                    <div className='flex flex-row justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight dark:text-stone-400'>Temperature</span>
                            <span className='text-lg font-gothamMedium dark:text-stone-300'>{data.temp}°C</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight dark:text-stone-400'>Description</span>
                            <span className='text-lg font-gothamMedium dark:text-stone-300'>{data.desc}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight dark:text-stone-400'>Feels like</span>
                            <span className='text-lg font-gothamMedium dark:text-stone-300'>{data.feelsLike}°C</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mb-5 group p-11 shadow-xl transition duration-300 ease-in-out hover:translate-x-1 hover:scale-105 dark:bg-neutral-800'>
                    <div className='flex'>
                        <div className='text-lg font-gothamMedium tracking-wider mb-2 px-2 hover:transition duration-300 ease-in-out group-hover:bg-red-300 dark:text-red-300 dark:group-hover:text-black'>TEMPERATURE EXTREMES</div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight dark:text-stone-400'>Min Temp</span>
                            <span className='text-lg font-gothamMedium dark:text-stone-300'>{data.tempMin}°C</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight dark:text-stone-400'>Max Temp</span>
                            <span className='text-lg font-gothamMedium dark:text-stone-300'>{data.tempMax}°C</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mb-5 group p-11 shadow-xl transition duration-300 ease-in-out group-hover:translate-x-1 hover:scale-105 dark:bg-neutral-800'>
                    <div className='flex'>
                        <div className='text-lg font-gothamMedium tracking-wider mb-2 px-2 hover:transition duration-300 ease-in-out group-hover:bg-teal-300 dark:text-teal-300 dark:group-hover:text-black'>
                            PRESSURE & HUMIDITY
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight dark:text-stone-400'>Pressure</span>
                            <span className='text-lg font-gothamMedium dark:text-stone-300'>{data.pressure}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight dark:text-stone-400'>Humidity</span>
                            <span className='text-lg font-gothamMedium dark:text-stone-300 '>{data.humidity}</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mb-5 group p-11 shadow-xl transition duration-300 ease-in-out hover:translate-x-1 hover:scale-105 dark:bg-neutral-800'>
                    <div className='flex'>
                        <div className='flex flex-col font-gothamMedium tracking-wider text-lg mb-2 px-2 hover:transition duration-300 ease-in-out group-hover:bg-gray-200 dark:text-gray-200 dark:group-hover:text-black'>
                            WIND CONDITIONS
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight dark:text-stone-400'>Speed</span>
                            <span className='text-lg font-gothamMedium dark:text-stone-300'>{data.speed}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight dark:text-stone-400'>Degree</span>
                            <span className='text-lg font-gothamMedium dark:text-stone-300'>{data.deg}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Form method='post'>
                <div className='flex justify-end items-center group'>
                    <div>
                        <input name='request-type' value='update-weather-info' readOnly hidden />
                        <button type='submit' className='shadow-xl rounded-3xl mx-2 hover:bg-emerald-400 p-2 transition duration-300 ease-in-out hover:scale-110 dark:bg-stone-300 dark:hover:bg-emerald-400'>
                            <img src={UpdateIcon} className='h-6 w-6' alt={'update-icon'} /> 
                        </button>
                    </div>
                    <div className='font-gothamMedium text-sm'>
                        <div className='flex justify-end tracking-wide dark:text-white'>
                            Last Updated at 
                            <span className='ml-1 group-hover:text-orange-600 dark:group-hover:text-orange-500'>
                                {localDateAndTime}
                            </span>
                        </div>
                        <div className='text-xs text-gray-400 font-loveloLight italic tracking-wider dark:text-gray-500'>*Time Zone based in INDIA</div>
                    </div>
                </div>
            </Form>
        </Fragment>
    )
}

WeatherData.defaultProps = {
    city: 'tokyo',
    data: {
      desc: 'light rain',
      temp: 23.68,
      feelsLike: 24.19,
      tempMin: 22.75,
      tempMax: 24.24,
      pressure: 1006,
      humidity: 80,
      speed: 2.06, 
      deg: 120 
    }
}

export default WeatherData;
