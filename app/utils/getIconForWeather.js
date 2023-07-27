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

// Dark Theme Icons
import SunIconDark from '../../assets/icons/DarkThemeIcons/sunny.png';
import BrokenCloudsDark from '../../assets/icons/DarkThemeIcons/brokenClouds.png';
import MistDarkIcon from '../../assets/icons/DarkThemeIcons/mist.png';
import OvercastCloudsDark from '../../assets/icons/DarkThemeIcons/overcastClouds.png';
import LightRainDark from '../../assets/icons/DarkThemeIcons/lightRain.png';
import SnowIconDark from '../../assets/icons/DarkThemeIcons/snow.png';
import FewCloudsDark from '../../assets/icons/DarkThemeIcons/fewClouds.png';
import RainDark from '../../assets/icons/DarkThemeIcons/rain.png';
import HazeDark from '../../assets/icons/DarkThemeIcons/haze.png';
import FogDark from '../../assets/icons/DarkThemeIcons/fog.png';
import SmokeDark from '../../assets/icons/DarkThemeIcons/smoke.png';
import DrizzleDark from '../../assets/icons/DarkThemeIcons/drizzle.png';
import SnowRainDark from '../../assets/icons/DarkThemeIcons/rainSnow.png';
import DustDark from '../../assets/icons/DarkThemeIcons/dust.png';
import CloudySunnyDark from '../../assets/icons/DarkThemeIcons/cloudSunny.png';


export const getIconForWeather = (weatherCondition, isDarkMode = false) => {

    let weatherIcon;
 
    switch (weatherCondition) {
        case LIGHT_RAIN: 
                weatherIcon = isDarkMode ? LightRainDark : RainyIcon;
                break;
        case MODERATE_RAIN: 
                weatherIcon = isDarkMode ? RainDark : RainyIcon;
                break;
        case BROKEN_CLOUDS: 
                weatherIcon = isDarkMode ? BrokenCloudsDark : BrokenCloudsIcon;
                break;
        case FEW_CLOUDS:
                weatherIcon = isDarkMode ? FewCloudsDark : FewCloudsIcon;
                break;
        case OVERCAST_CLOUDS:
                weatherIcon = isDarkMode ? OvercastCloudsDark : CloudsIcon;
                break;
        case SCATERED_CLOUDS:
                weatherIcon = isDarkMode ? CloudySunnyDark : CloudySunnyIcon;
                break;
        case RAIN_AND_SNOW:
                weatherIcon = isDarkMode ? SnowRainDark : SnowRainIcon;
                break;
        case LIGHT_INTENSITY_DRIZZLE:
                weatherIcon = isDarkMode ? DrizzleDark : DrizzleIcon;
                break;
        case SNOW:
                weatherIcon = isDarkMode ? SnowIconDark : SnowIcon;
                break;
        case HAZE:
                weatherIcon = isDarkMode ? HazeDark : HazeIcon;
                break;
        case DUST:
                weatherIcon =  isDarkMode ? DustDark : DustIcon;
                break;
        case CLEAR_SKY:
                weatherIcon = isDarkMode ? SunIconDark : SunnyIcon;
                break;
        case MIST:
                weatherIcon = isDarkMode ? MistDarkIcon : MistIcon;
                break;
        case FOG:
                weatherIcon = isDarkMode ? FogDark : FogIcon;
                break;
        case SMOKE:
                weatherIcon = isDarkMode ? SmokeDark : SmokeIcon;
                break;
    }

    return weatherIcon;
}
