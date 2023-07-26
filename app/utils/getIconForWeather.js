import {
    LIGHT_RAIN,
    MODERATE_RAIN,
    BROKEN_CLOUDS,
    FEW_CLOUDS,
    OVERCAST_CLOUDS,
    SCATERED_CLOUDS,
    RAIN_AND_SNOW,
    SNOW,
    CLEAR_SKY,
    HAZE,
    DUST,
    MIST,
    FOG,
    SMOKE,
    LIGHT_INTENSITY_DRIZZLE
} from '../constants/constants';

import SunnyIcon from '../../assets/icons/Sunny/sun.svg';
import CloudsIcon from '../../assets/icons/cloudy.png';
import CloudySunnyIcon from '../../assets/icons/cloudySunny.png';
import SnowIcon from '../../assets/icons/snow.png';
import SnowRainIcon from '../../assets/icons/snowRain.png';
import RainyIcon from '../../assets/icons/raining.png';
import HazeIcon from '../../assets/icons/haze.png';
import DustIcon from '../../assets/icons/dust.png';
import MistIcon from '../../assets/icons/mist.png';
import FogIcon from '../../assets/icons/denseFog.png';
import SmokeIcon from '../../assets/icons/smoke.png';
import FewCloudsIcon from '../../assets/icons/fewClouds.png';
import BrokenCloudsIcon from '../../assets/icons/brokenClouds.png';
import DrizzleIcon from '../../assets/icons/drizzle.png';

export const getIconForWeather = (weatherCondition) => {

    let weatherIcon;

    switch (weatherCondition) {
        case LIGHT_RAIN: 
                weatherIcon = RainyIcon;
                break;
        case MODERATE_RAIN: 
                weatherIcon = RainyIcon;
                break;
        case BROKEN_CLOUDS: 
                weatherIcon = BrokenCloudsIcon;
                break;
        case FEW_CLOUDS:
            weatherIcon = FewCloudsIcon;
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
        case LIGHT_INTENSITY_DRIZZLE:
            weatherIcon = DrizzleIcon;
            break;
        case SNOW:
            weatherIcon = SnowIcon;
            break;
        case HAZE:
            weatherIcon = HazeIcon;
            break;
        case DUST:
            weatherIcon = DustIcon;
            break;
        case CLEAR_SKY:
            weatherIcon = SunnyIcon;
            break;
        case MIST:
            weatherIcon = MistIcon;
            break;
        case FOG:
            weatherIcon = FogIcon;
            break;
        case SMOKE:
            weatherIcon = SmokeIcon;
            break;
    }

    return weatherIcon;
}
