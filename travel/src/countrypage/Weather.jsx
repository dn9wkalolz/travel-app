/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import getIcon from './getWeatherIcons';

const Weather = ({ weatherState }) => {
  const { main: { feels_like, humidity }, weather, wind: { speed } } = weatherState;
  const { main, description } = weather[0];

  return (
    <div className="country__widgets__weather">
      <h3>Today Weather</h3>
      <div className="weather__temperature" />
      <div className="weather__forecast">
        <div className="weather__cloudy">
          <img src={getIcon(main)} alt={main} width="150" height="150" />
        </div>
        <div className="weather__description">
          <span>{description}</span>
          <span>{`feels like: ${Math.round(feels_like)}℃`}</span>
          <span>{`wind: ${Math.round(speed)} metres/s`}</span>
          <span>{`humidity: ${humidity}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
