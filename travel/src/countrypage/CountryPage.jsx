import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import CountryDescription from './CountryDescription';
import CountryMap from './CountryMap';
import CountryWidgets from './CountryWidgets';
import './countrypage.scss';
import Gallery from './Gallery/Gallery';
import Video from './Video/Video';

const data = {
  countryName: 'POL',
  longitude: 21.0118,
  latitude: 52.2298,
  language: 'en',
  timeZone: 'Europe/Warsaw',
  currencyName: 'PLN',
};

const CountryPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countryInf, setCountryInf] = useState({});

  useEffect(() => {
    const {
      longitude, latitude, language, currencyName,
    } = data;
    const dayCount = 1;
    const id = '238369625c38823901147f9e59ee369d';
    const units = 'metric';
    const countryUrl = 'https://oktravel.herokuapp.com/countries';
    const currencyUrl = `https://api.exchangeratesapi.io/latest?base=${currencyName}`;
    const weatherUrlBase = 'https://api.openweathermap.org/data/2.5/forecast?';
    const weatherUrl = `${weatherUrlBase}lat=${latitude}&lon=${longitude}&lang=${language}&cnt=${dayCount}&units=${units}&appid=${id}`;

    Promise.all([
      fetch(countryUrl).then((res) => res.json()),
      fetch(currencyUrl).then((res) => res.json()),
      fetch(weatherUrl).then((res) => res.json()),
    ]).then(
      ([country, exchangeRatesInf, weather]) => {
        const weatherState = weather.list[0];
        const { rates } = exchangeRatesInf;
        setCountryInf({ country, rates, weatherState });
        setIsLoaded(true);
      },
      (err) => {
        setIsLoaded(true);
        setError(err);
      },
    );
  }, []);

  if (error) {
    return (
      <div>
        Ошибка:
        {error.message}
      </div>
    );
  } if (!isLoaded) {
    return <div>Загрузка...</div>;
  }
  return (
    <Container>
      <div className="country__container">
        <div className="country__information">
          <CountryDescription {...{ countryInf }} />
          <Gallery {...{ countryInf }} />
          <Video {...{ countryInf }} />
          <CountryMap {...{ data }} />
        </div>
        <CountryWidgets {...{ data, countryInf }} />
      </div>
    </Container>
  );
};

export default CountryPage;
