import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../../constants/weather';
import './styles.css';

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10m/s',
};

const data2 = {
    temperature: 18,
    weatherState: WINDY,
    humidity: 5,
    wind: '20m/s',
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "San José, Costa Rica",
            data: data1
        };
    }

    handleUpdateClick = () => {
        this.setState({
            city: "San José, Costa Rica",
            data: data2
        })
        console.log("actualizando");
    }
    render = () => {
        const { city, data } = this.state;
        return (
        <div className='weatherLocationCont'>
            <Location city={city} />
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);
    };
}


export default WeatherLocation;