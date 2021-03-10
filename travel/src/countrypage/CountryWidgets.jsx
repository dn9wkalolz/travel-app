import React from 'react';
import PropTypes from 'prop-types';
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

CountryWidgets.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  countryInf: PropTypes.instanceOf(Object).isRequired,
};

export default CountryWidgets;
