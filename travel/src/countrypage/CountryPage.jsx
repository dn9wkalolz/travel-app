import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import CountryDescription from './CountryDescription';
import CountryMap from './CountryMap';
import CountryWidgets from './CountryWidgets';
import './countrypage.scss';
import Gallery from './Gallery/Gallery';
import Video from './Video/Video';

const data = {
  language: 'en',
  id: '6043d483656ac305b15f314c',
};

const CountryPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countryInf, setCountryInf] = useState({});

  useEffect(() => {
    const { language, id } = data;
    const dayCount = 1;
    const units = 'metric';
    const weatherId = '238369625c38823901147f9e59ee369d';
    const weatherUrlBase = 'https://api.openweathermap.org/data/2.5/forecast?';
    const countryUrl = `https://oktravel.herokuapp.com/countries/${id}?lang=${language}`;

    fetch(countryUrl).then((res) => res.json())
      .then((country) => {
        console.log(country);
        const { currencyCode, location: { lat, long } } = country;
        const currencyUrl = `https://api.exchangeratesapi.io/latest?base=${currencyCode}`;
        const weatherUrl = `${weatherUrlBase}lat=${lat}&lon=${long}&lang=${language}&cnt=${dayCount}&units=${units}&appid=${weatherId}`;
        Promise.all([
          fetch(currencyUrl).then((res) => res.json()),
          fetch(weatherUrl).then((res) => res.json()),
        ]).then(
          ([exchangeRatesInf, weather]) => {
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
      });
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
          <CountryMap {...{ data, countryInf }} />
        </div>
        <CountryWidgets {...{ data, countryInf }} />
      </div>
    </Container>
  );
};

export default CountryPage;
