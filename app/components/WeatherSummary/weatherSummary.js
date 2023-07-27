import React from 'react';
import { Form, Link } from "@remix-run/react";

import ArrowRight from '../../../assets/icons/LightTheme/arrowRight.svg';
import { getIconForWeather } from '../../utils/getIconForWeather';

const WeatherSummary = (props) => {

    const { data, isDarkTheme } = props;

    const weatherIcon = getIconForWeather(data.desc, isDarkTheme);

    return (
            <div className='h-52 m-10 flex flex-row text-lg shadow-xl transition duration-300 ease-in-out hover:translate-x-1 hover:scale-105 dark:bg-neutral-800'>
                <div className='grow p-11'>
                    <div>
                        <div className='mb-3 font-gothamMedium tracking-widest dark:text-orange-300'>{data.name.toUpperCase()}</div>
                        <div className='flex flex-row justify-around'>
                            <div className='flex flex-col items-center'>
                                <img src={weatherIcon} className='h-14 w-14' alt={'arrow-right'} /> 
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='font-gothamLight dark:text-stone-400'>Temperature</div>
                                <div className='font-gothamMedium dark:text-orange-300'>{data.temp}°C</div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='font-gothamLight dark:text-stone-400'>Description</div>
                                <div className='font-gothamMedium dark:text-orange-300'>{data.desc}</div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='font-gothamLight dark:text-stone-400'>Feels Like</div>
                                <div className='font-gothamMedium dark:text-orange-300'>{data.feelsLike}°C</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form method='post' className='group p-5 m-0 cursor-pointer flex items-center hover:bg-gradient-to-r from-orange-400 to-red-400'>
                    <input name='request-type' value='remove-location' readOnly hidden />
                    <input name='city' value={`${data.name}`} readOnly hidden />
                    <button>
                        <svg className='h-4 w-4 fill-black group-hover:fill-white dark:fill-stone-300' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    
                            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                        </svg>
                    </button>
                </Form>
                <Link className='group p-5 flex items-center hover:bg-gradient-to-r from-green-500 to-teal-400' to={`/weather/${data.name}`}>
                    <img src={ArrowRight} className='h-4 w-4 group-hover:fill-white dark:fill-stone-300' alt={'arrow-right'} />
                </Link>
            </div>
    )
}

export default WeatherSummary;
