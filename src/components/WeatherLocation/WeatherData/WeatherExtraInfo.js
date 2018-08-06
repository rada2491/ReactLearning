import React from 'react';
import propTypes from 'prop-types';

const WeatherExtraInfo = ( {humidity, wind } ) => (
    <div>
        <span> { `${humidity} % | `} </span>
        <span> { `${wind} wind`  } </span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: propTypes.number.isRequired,
    weatherState: propTypes.string,
};

export default WeatherExtraInfo;