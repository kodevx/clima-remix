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

// Light Theme Icons
import SunnyIcon from '../../assets/icons/LightTheme/Sunny/sun.svg';
import CloudsIcon from '../../assets/icons/LightTheme/cloudy.png';
import CloudySunnyIcon from '../../assets/icons/LightTheme/cloudySunny.png';
import SnowIcon from '../../assets/icons/LightTheme/snow.png';
import SnowRainIcon from '../../assets/icons/LightTheme/snowRain.png';
import RainyIcon from '../../assets/icons/LightTheme/raining.png';
import HazeIcon from '../../assets/icons/LightTheme/haze.png';
import DustIcon from '../../assets/icons/LightTheme/dust.png';
import MistIcon from '../../assets/icons/LightTheme/mist.png';
import FogIcon from '../../assets/icons/LightTheme/denseFog.png';
import SmokeIcon from '../../assets/icons/LightTheme/smoke.png';
import FewCloudsIcon from '../../assets/icons/LightTheme/fewClouds.png';
import BrokenCloudsIcon from '../../assets/icons/LightTheme/brokenClouds.png';
import DrizzleIcon from '../../assets/icons/LightTheme/drizzle.png';

// Dark Theme Icons
import SunIconDark from '../../assets/icons/DarkTheme/sunny.png';
import BrokenCloudsDark from '../../assets/icons/DarkTheme/brokenClouds.png';
import MistDarkIcon from '../../assets/icons/DarkTheme/mist.png';
import OvercastCloudsDark from '../../assets/icons/DarkTheme/overcastClouds.png';
import LightRainDark from '../../assets/icons/DarkTheme/lightRain.png';
import SnowIconDark from '../../assets/icons/DarkTheme/snow.png';
import FewCloudsDark from '../../assets/icons/DarkTheme/fewClouds.png';
import RainDark from '../../assets/icons/DarkTheme/rain.png';
import HazeDark from '../../assets/icons/DarkTheme/haze.png';
import FogDark from '../../assets/icons/DarkTheme/fog.png';
import SmokeDark from '../../assets/icons/DarkTheme/smoke.png';
import DrizzleDark from '../../assets/icons/DarkTheme/drizzle.png';
import SnowRainDark from '../../assets/icons/DarkTheme/rainSnow.png';
import DustDark from '../../assets/icons/DarkTheme/dust.png';
import CloudySunnyDark from '../../assets/icons/DarkTheme/cloudSunny.png';


export const getIconForWeather = (weatherCondition, isDarkTheme = false) => {

    let weatherIcon;
 
    switch (weatherCondition) {
        case LIGHT_RAIN: 
                weatherIcon = isDarkTheme ? LightRainDark : RainyIcon;
                break;
        case MODERATE_RAIN: 
                weatherIcon = isDarkTheme ? RainDark : RainyIcon;
                break;
        case BROKEN_CLOUDS: 
                weatherIcon = isDarkTheme ? BrokenCloudsDark : BrokenCloudsIcon;
                break;
        case FEW_CLOUDS:
                weatherIcon = isDarkTheme ? FewCloudsDark : FewCloudsIcon;
                break;
        case OVERCAST_CLOUDS:
                weatherIcon = isDarkTheme ? OvercastCloudsDark : CloudsIcon;
                break;
        case SCATERED_CLOUDS:
                weatherIcon = isDarkTheme ? CloudySunnyDark : CloudySunnyIcon;
                break;
        case RAIN_AND_SNOW:
                weatherIcon = isDarkTheme ? SnowRainDark : SnowRainIcon;
                break;
        case LIGHT_INTENSITY_DRIZZLE:
                weatherIcon = isDarkTheme ? DrizzleDark : DrizzleIcon;
                break;
        case SNOW:
                weatherIcon = isDarkTheme ? SnowIconDark : SnowIcon;
                break;
        case HAZE:
                weatherIcon = isDarkTheme ? HazeDark : HazeIcon;
                break;
        case DUST:
                weatherIcon =  isDarkTheme ? DustDark : DustIcon;
                break;
        case CLEAR_SKY:
                weatherIcon = isDarkTheme ? SunIconDark : SunnyIcon;
                break;
        case MIST:
                weatherIcon = isDarkTheme ? MistDarkIcon : MistIcon;
                break;
        case FOG:
                weatherIcon = isDarkTheme ? FogDark : FogIcon;
                break;
        case SMOKE:
                weatherIcon = isDarkTheme ? SmokeDark : SmokeIcon;
                break;
    }

    return weatherIcon;
}
