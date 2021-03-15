import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CountryDescription from './CountryDescription';
import CountryMap from './CountryMap';
import CountryWidgets from './CountryWidgets';
import './countrypage.scss';
import Gallery from './Gallery/Gallery';
import Video from './Video/Video';
import Preloader from './Preloader/Preloader';
import CountryRating from './Rating';

const data = {
  lang: 'en',
  countryId: '6043d483656ac305b15f314c',
  rating: 3,
};

const CountryPage = ({ lang, match }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countryInf, setCountryInf] = useState({});

  useEffect(() => {
    // const { lang, id } = data;
    const { params: { countryId } } = match;
    const dayCount = 1;
    const units = 'metric';
    const weatherId = '238369625c38823901147f9e59ee369d';
    const weatherUrlBase = 'https://api.openweathermap.org/data/2.5/forecast?';
    const countryUrl = `https://oktravel.herokuapp.com/countries/${countryId}?lang=${lang}`;

    fetch(countryUrl).then((res) => res.json())
      .then((country) => {
        console.log(country);
        const { currencyCode, location: { lat, long } } = country;
        const currencyUrl = `https://api.exchangeratesapi.io/latest?base=${currencyCode}`;
        const weatherUrl = `${weatherUrlBase}lat=${lat}&lon=${long}&lang=${lang}&cnt=${dayCount}&units=${units}&appid=${weatherId}`;
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
    return <Preloader />;
  }
  return (
    <Container>
      <div className="country__container">
        <div className="country__information">
          <CountryDescription {...{ countryInf }} />
          <CountryRating {...{ data }} />
          <Gallery {...{ countryInf }} />
          <Video {...{ countryInf }} />
          <CountryMap {...{ data, countryInf }} />
        </div>
        <CountryWidgets {...{ data, countryInf }} />
      </div>
    </Container>
  );
};

CountryPage.propTypes = {
  lang: PropTypes.string.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

const CountryPageWithRouter = withRouter(CountryPage);
export default CountryPageWithRouter;
