import React, { Fragment } from 'react';
import { getIconForWeather } from '../../utils/getIconForWeather';

const WeatherData = props => {

    const { 
        main, 
        wind, 
        isExpanded, 
        handleExpand, 
        weather,
        isWeatherDataAvailable 
    } = props;

    console.log("Props: ",props);

    const weatherIcon = getIconForWeather(weather.description);

    if(!isWeatherDataAvailable) {
        return (
            <div className='text-lg flex justify-center'>
               <div className='text-white px-3 bg-black font-gothamMedium tracking-wide'>
                    WEATHER DATA NOT AVAILABLE.
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <div className='p-5 border-black border-2'>
                <div className='flex flex-col items-center my-5'>
                    <img src={weatherIcon} className='h-14 w-14' alt={'weather-icon'} /> 
                    <div className='font-gothamMedium text-3xl mt-4 tracking-wide'>{weather.description.toUpperCase()}</div>
                    <div className='font-gothamMedium text-3xl mt-4'>{main.temp}°C</div>
                </div>
                <div className='flex flex-col mb-5 shadow-xl transition duration-300 ease-in-out hover:translate-x-1 hover:scale-105'>
                    <div className='flex'>
                        <div className='text-lg mb-3 px-3 font-gothamMedium tracking-wider bg-orange-300'>CURRENT WEATHER</div>
                    </div>
                    <div className='flex flex-row justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Temperature</span>
                            <span className='text-lg font-gothamMedium'>{main.temp}°C</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Description</span>
                            <span className='text-lg font-gothamMedium'>{weather.description}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Feels like</span>
                            <span className='text-lg font-gothamMedium'>{main.feels_like}°C</span>
                        </div>
                    </div>
                </div>
                {/* <form>
                    <button type='submit' onClick={handleExpand}>
                        {isExpanded ? 'Show Less' : 'View More'}
                    </button>
                </form> */}
                {/* {isExpanded ? ( */}
                <div className='flex flex-col mb-5'>
                    <div className='flex'>
                        <div className='text-lg font-gothamMedium tracking-wider mb-2 px-2 bg-red-300'>TEMPERATURE EXTREMES</div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Min Temp</span>
                            <span className='text-lg font-gothamMedium'>{main.temp_min}°C</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Max Temp</span>
                            <span className='text-lg font-gothamMedium'>{main.temp_max}°C</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mb-5'>
                    <div className='flex'>
                        <div className='text-lg font-gothamMedium tracking-wider mb-2 px-2 bg-teal-300'>
                            PRESSURE & HUMIDITY
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Pressure</span>
                            <span className='text-lg font-gothamMedium'>{main.pressure}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Humidity</span>
                            <span className='text-lg font-gothamMedium'>{main.humidity}</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mb-5'>
                    <div className='flex'>
                        <div className='flex flex-col font-gothamMedium tracking-wider text-lg mb-2 px-2 bg-gray-200'>
                            WIND CONDITIONS
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Speed</span>
                            <span className='text-lg font-gothamMedium'>{wind.speed}</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-lg font-gothamLight'>Degree</span>
                            <span className='text-lg font-gothamMedium'>{wind.deg}</span>
                        </div>
                    </div>
                </div>
                {/* ) : null} */}
            </div>
        </Fragment>
    )
}

WeatherData.defaultProps = {
    city: 'tokyo',
    isExpanded: false,
    isWeatherDataAvailable: true,
    weather: { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
    main: {
      temp: 23.68,
      feels_like: 24.19,
      temp_min: 22.75,
      temp_max: 24.24,
      pressure: 1006,
      humidity: 80
    },
    wind: { speed: 2.06, deg: 120 }
}

export default WeatherData;
