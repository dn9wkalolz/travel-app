/* eslint-disable react/prop-types */
import React from 'react';

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

export default Exchange;
