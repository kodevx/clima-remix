import React from 'react';

const SearchBar = props => {

    return (
        <label className="flex w-full flex-col gap-1">
            {/* <span>City: </span> */}
            <input
                // ref={titleRef}
                area-label='Search weather for a city eg: Cochin'
                name="city"
                // className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
                // aria-invalid={actionData?.errors?.title ? true : undefined}
                // aria-errormessage={
                //     actionData?.errors?.title ? "title-error" : undefined
                // }
            />
        </label>
    )
}

export default SearchBar;