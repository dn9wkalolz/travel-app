import React from 'react';
import PropTypes from 'prop-types';

const Exchange = ({ rates }) => {
  const { EUR, USD, RUB } = rates;
  return (
    <div className="country__widgets__exchange">
      <h3>Country Exchange Rate</h3>
      <div>
        <div>
          <div className="flag flag__eu" />
          <span>{`EUR: ${EUR.toFixed(2)}`}</span>
        </div>
        <div>
          <div className="flag flag__us" />
          <span>{`USD: ${USD.toFixed(2)}`}</span>
        </div>
        <div>
          <div className="flag flag__ru" />
          <span>{`RUB: ${RUB.toFixed(2)}`}</span>
        </div>
      </div>
    </div>
  );
};

Exchange.propTypes = {
  rates: PropTypes.instanceOf(Object).isRequired,
};

export default Exchange;
