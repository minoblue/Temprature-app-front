import React from 'react';
import styles from './weathercard.module.css';

const WeatherCard = ({countryWeather}) => {
    const {createdAt, temprature} = countryWeather;
    const tempFahr = temprature * 9 / 5 + 32;
    return (
        <div className={styles.card}>
            <div className={styles.line}>
                <span>{createdAt} </span>
                <span>{temprature} °C</span>
                <span>{tempFahr} °F</span>
            </div>
        </div>
    );
};

export default WeatherCard;
