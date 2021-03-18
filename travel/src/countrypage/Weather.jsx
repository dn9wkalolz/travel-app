/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import getIcon from './getWeatherIcons';
import getPhrase from './languageSwitcher';

const Weather = ({ lang, weatherState }) => {
  const { main: { feels_like, humidity }, weather, wind: { speed } } = weatherState;
  const { main, description } = weather[0];

  return (
    <div className="country__widgets__weather">
      <h3>{getPhrase(lang, 'todayWeather')}</h3>
      <div className="weather__temperature" />
      <div className="weather__forecast">
        <div className="weather__cloudy">
          <img src={getIcon(main)} alt={main} width="150" height="150" />
        </div>
        <div className="weather__description">
          <span data-testid="description">{description}</span>
          <span>{`${getPhrase(lang, 'feelsLike')}: ${Math.round(feels_like)}℃`}</span>
          <span>{`${getPhrase(lang, 'wind')}: ${Math.round(speed)} ${getPhrase(lang, 'speed')}`}</span>
          <span data-testid="humidity">{`${getPhrase(lang, 'humidity')}: ${humidity}%`}</span>
        </div>
      </div>
    </div>
  );
};

Weather.propTypes = {
  weatherState: PropTypes.instanceOf(Object).isRequired,
  lang: PropTypes.string.isRequired,
};

export default Weather;
