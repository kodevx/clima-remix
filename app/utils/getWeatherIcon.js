import {
    LIGHT_RAIN,
    MODERATE_RAIN,
    BROKEN_CLOUDS,
    FEW_CLOUDS,
    OVERCAST_CLOUDS,
    SCATERED_CLOUDS,
    RAIN_AND_SNOW,
    SNOW,
    CLEAR_SKY
} from '../constants/constants';

import SunnyIcon from '../../assets/icons/Sunny/sun.svg';
import CloudsIcon from '../../assets/icons/cloudy.png';
import CloudySunnyIcon from '../../assets/icons/cloudySunny.png';
import SnowIcon from '../../assets/icons/snow.png';
import SnowRainIcon from '../../assets/icons/snowRain.png';
import RainyIcon from '../../assets/icons/raining.png';

export const getWeatherIcon = (weatherCondition) => {

    let weatherIcon;

    switch (weatherCondition) {
        case LIGHT_RAIN: 
                weatherIcon = RainyIcon;
                break;
        case MODERATE_RAIN: 
                weatherIcon = RainyIcon;
                break;
        case BROKEN_CLOUDS: 
                weatherIcon = CloudsIcon;
                break;
        case FEW_CLOUDS:
            weatherIcon = CloudySunnyIcon;
            break;
        case OVERCAST_CLOUDS:
            weatherIcon = CloudsIcon;
            break;
        case SCATERED_CLOUDS:
            weatherIcon = CloudySunnyIcon;
            break;
        case RAIN_AND_SNOW:
            weatherIcon = SnowRainIcon;
            break;
        case SNOW:
            weatherIcon = SnowIcon;
            break;
        case CLEAR_SKY:
            weatherIcon = SunnyIcon;
            break;
    }

    return weatherIcon;
}
