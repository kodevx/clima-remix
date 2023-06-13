import React, { Fragment } from 'react';
import classes from './weatherData.css';

const WeatherData = props => {

    const { main, wind, isExpanded, handleExpand } = props;
    console.log("Props: ",props);

    return (
        <Fragment>
            <div className={classes.root}>
                <div>
                    <span>Temp</span>
                    <span>{main.temp}</span>
                </div>
                <div>
                    <span>Description</span>
                    <span>{main.description}</span>
                </div>
                <div>
                    <span>Main</span>
                    <span>{main.temp}</span>
                </div>
                <form>
                    {/* <input name="expand" value={false} type='hidden' /> */}
                    <button type='submit' onClick={handleExpand}>
                    {isExpanded ? 'Show Less' : 'View More'}
                </button>
                </form>
                {isExpanded ? (
                    <div>
                        <div>
                            <div>
                                <span>Feels Like</span>
                                <span>{main.feels_like}</span>
                            </div>
                            <div>
                                <span>Min Temp</span>
                                <span>{main.temp_min}</span>
                            </div>
                            <div>
                                <span>Max Temp</span>
                                <span>{main.temp_max}</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Pressure</span>
                                <span>{main.pressure}</span>
                            </div>
                            <div>
                                <span>Humidity</span>
                                <span>{main.humidity}</span>
                            </div>
                        </div>
                        <div>
                            <div>Wind Conditions</div>
                            <div>
                                <span>Speed</span>
                                <span>{wind.speed}</span>
                            </div>
                            <div>
                                <span>Degree</span>
                                <span>{wind.deg}</span>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </Fragment>
    )
}

export default WeatherData;
