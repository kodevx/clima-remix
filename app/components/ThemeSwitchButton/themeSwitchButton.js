import React from 'react';

import DarkThemeIcon from '../../../assets/icons/LightTheme/crescentMoonBorder.svg';
import LightThemeIcon from '../../../assets/icons/LightTheme/Sunny/lightModeIcon.png';

const ThemeSwitchButton = props => {

    const { isDarkTheme } = props;

    const themeIcon = isDarkTheme ? LightThemeIcon : DarkThemeIcon;

    return (
        <button 
            type='submit' 
            className='bg-gray-100 hover:bg-gray-200 p-3 rounded-full self-center dark:bg-neutral-800 dark:hover:bg-neutral-700'
        >
            <div className='flex flex-row'>
                <img src={themeIcon} className='h-10 w-10' alt={'arrow-right'} />
            </div>
        </button>
    )
}

export default ThemeSwitchButton;
