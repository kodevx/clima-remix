import React from 'react';

import MoonIcon from '../../../assets/icons/crescentMoonBorder.svg';
import SunIcon from '../../../assets/icons/Sunny/lightModeIcon.png';

const ThemeSwitchButton = props => {

    const { isDarkMode } = props;

    const themeIcon = isDarkMode ? SunIcon : MoonIcon;

    return (
        <button 
            type='submit' 
            className='bg-gray-100 hover:bg-gray-200 p-3 rounded-full self-center dark:bg-stone-800 dark:hover:bg-stone-700'
        >
            <div className='flex flex-row'>
                <img src={themeIcon} className='h-10 w-10' alt={'arrow-right'} />
            </div>
        </button>
    )
}

export default ThemeSwitchButton;
