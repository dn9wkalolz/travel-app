/* eslint-disable react/prop-types */
import React from 'react';
import DataTime from './DataTime';
import Exchange from './Exchange';
import Weather from './Weather';

const CountryWidgets = ({ data, countryInf }) => {
  const { language, timeZone } = data;
  const { rates, weatherState } = countryInf;
  return (
    <div className="country__widgets">
      <DataTime {...{ language, timeZone }} />
      <Weather {...{ weatherState }} />
      <Exchange {...{ rates }} />
    </div>
  );
};

export default CountryWidgets;
