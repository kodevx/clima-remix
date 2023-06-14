import React from 'react';

const WeatherSummary = (props) => {

    const { data } = props;

    return (
        <div className='h-44 p-10 m-5 text-lg shadow-xl transition duration-300 ease-in-out hover:translate-x-1 hover:scale-105'>
            <div className='font-gothamMedium tracking-widest'>{data.name.toUpperCase()}</div>
            <div className='flex flex-row justify-around'>
                <div className='flex flex-col items-center'>
                    <div className='font-gothamLight'>Temperature</div>
                    <div className='font-gothamMedium'>{data.temp}°C</div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='font-gothamLight'>Description</div>
                    <div className='font-gothamMedium'>{data.desc}</div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='font-gothamLight'>Feels Like</div>
                    <div className='font-gothamMedium'>{data.feelsLike}°C</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherSummary;
