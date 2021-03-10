import React from 'react';
import PropTypes from 'prop-types';

const Exchange = ({ rates }) => {
  const { EUR, USD, RUB } = rates;
  return (
    <div className="country__widgets__exchange">
      <h3>Country Exchange Rate</h3>
      <span>{`EUR: ${EUR.toFixed(2)}`}</span>
      <span>{`USD: ${USD.toFixed(2)}`}</span>
      <span>{`RUB: ${RUB.toFixed(2)}`}</span>
    </div>
  );
};

Exchange.propTypes = {
  rates: PropTypes.instanceOf(Object).isRequired,
};

export default Exchange;
