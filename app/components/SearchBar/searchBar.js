import React from 'react';

const SearchBar = props => {

    return (
        <div className='flex mb-20 mt-10 justify-center items-center'>
            <input
                className={'w-96 h-12 drop-shadow-2xl font-gothamMedium outline-none border-black text-black rounded-3xl p-4 mr-3'}
                area-label='Search weather for a city eg: Cochin'
                placeholder='Search weather for a city eg: Cochin'
                name="city"
            />
            <button 
                type='submit'
                className='text-blue-500 h-9 w-9 text-lg hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:duration-300 rounded-full'
            >
                +
            </button>
        </div>
    )
}

export default SearchBar;
