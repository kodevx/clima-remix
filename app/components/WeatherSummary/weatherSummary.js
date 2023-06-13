import React from 'react';

const WeatherSummary = (props) => {

    const { data } = props;

    return (
        <div>
            <div>{data.name}</div>
            <div>
                <span>Temp</span>
                <span>{data.temp}</span>
            </div>
            <div>
                <span>Description</span>
                <span>{data.desc}</span>
            </div>
            <div>
                <span>Main</span>
                <span>{data.temp}</span>
            </div>
        </div>
    )
}

export default WeatherSummary;
