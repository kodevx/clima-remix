import React, { Fragment } from 'react';
import { getIconForWeather } from '../../utils/getIconForWeather';

const WeatherData = props => {

    const { data } = props;

    console.log("Props: ",props);

    if(!data) {
        return (
            <div className='text-lg flex justify-center mt-14'>
               <div className='text-white px-3 bg-black font-gothamMedium tracking-wide'>
                    WEATHER DATA NOT AVAILABLE.
                </div>
            </div>
        )
    }

    const weatherIcon = getIconForWeather(data.desc);

    return (
        <Fragment>
            <div className='p-10'>
                <div className='flex flex-col items-center my-6'>
                    <img src={weatherIcon} className='h-14 w-14 mb-4' alt={'weather-icon'} /> 
                    <div className='font-gothamMedium text-2xl mt-4 tracking-wide'>{data.desc.toUpperCase()}</div>
                    <div className='font-gothamMedium text-2xl mt-2'>{data.temp}°C</div>
                </div>
                <div className='flex flex-col group p-11 mb-5 shadow-xl transition duration-300 ease-in-out hover:translate-x-1 hover:scale-105'>
                    <div className='flex'>
                        <div className='text-lg mb-3 px-3 font-gothamMedium tracking-wider hover:transition duration-300 ease-in-out group-hover:bg-orange-300'>CURRENT WEATHER</div>
                    </div>
                    <div className='flex flex-row justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Temperature</span>
                            <span className='text-lg font-gothamMedium'>{data.temp}°C</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Description</span>
                            <span className='text-lg font-gothamMedium'>{data.desc}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Feels like</span>
                            <span className='text-lg font-gothamMedium'>{data.feelsLike}°C</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mb-5 group p-11 shadow-xl transition duration-300 ease-in-out hover:translate-x-1 hover:scale-105'>
                    <div className='flex'>
                        <div className='text-lg font-gothamMedium tracking-wider mb-2 px-2 hover:transition duration-300 ease-in-out group-hover:bg-red-300'>TEMPERATURE EXTREMES</div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Min Temp</span>
                            <span className='text-lg font-gothamMedium'>{data.tempMin}°C</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Max Temp</span>
                            <span className='text-lg font-gothamMedium'>{data.tempMax}°C</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mb-5 group p-11 shadow-xl transition duration-300 ease-in-out group-hover:translate-x-1 hover:scale-105'>
                    <div className='flex'>
                        <div className='text-lg font-gothamMedium tracking-wider mb-2 px-2 hover:transition duration-300 ease-in-out group-hover:bg-teal-300'>
                            PRESSURE & HUMIDITY
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Pressure</span>
                            <span className='text-lg font-gothamMedium'>{data.pressure}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Humidity</span>
                            <span className='text-lg font-gothamMedium'>{data.humidity}</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mb-5 group p-11 shadow-xl transition duration-300 ease-in-out hover:translate-x-1 hover:scale-105'>
                    <div className='flex'>
                        <div className='flex flex-col font-gothamMedium tracking-wider text-lg mb-2 px-2 hover:transition duration-300 ease-in-out group-hover:bg-gray-200'>
                            WIND CONDITIONS
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Speed</span>
                            <span className='text-lg font-gothamMedium'>{data.speed}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Degree</span>
                            <span className='text-lg font-gothamMedium'>{data.deg}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='group font-gothamMedium text-sm'>
                <div className='flex justify-end'>
                    Last Updated at 
                    <span className='ml-1 group-hover:text-cyan-600'>
                        {`${data.updatedAt.split('T')[1].slice(0,5)}, ${data.updatedAt.split('T')[0]}`}
                    </span>
                </div>
            </div>
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
