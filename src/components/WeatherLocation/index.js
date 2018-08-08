import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../../constants/weather';
import './styles.css';

const location = 'Buenos Aires,ar';
const api_key = '81b81cad03031610d3857337b8bed054';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10m/s',
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
        fetch(api_weather);
        /*this.setState({
            data: data2
        })*/
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