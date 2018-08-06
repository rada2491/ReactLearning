import React from 'react';
import propTypes from 'prop-types';

const Location = ( { city } ) => { //props con destructuring
    
    return (
        <div>
            <h1>{city}</h1>
        </div>);
};

Location.propTypes = {
    city: propTypes.string.isRequired,
};

export default Location;