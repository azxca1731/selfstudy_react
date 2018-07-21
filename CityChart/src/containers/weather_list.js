import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';


class WeatherList extends Component {
    renderWeather(cityData) {
        const { name } = cityData.city;
        const temps = cityData.list.map(weather => (weather.main.temp - 273.15));
        const pressures = cityData.list.map(weather => (weather.main.pressure));
        const Humidities = cityData.list.map(weather => (weather.main.humidity));
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="C" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={Humidities} color="blue" units="%" /></td>
            </tr>
        )
    }




    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(`C)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);