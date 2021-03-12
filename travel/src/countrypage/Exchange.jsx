import React from 'react';
import PropTypes from 'prop-types';
import getPhrase from './languageSwitcher';

const Exchange = ({ language, rates }) => {
  const { EUR, USD, RUB } = rates;
  return (
    <div className="country__widgets__exchange">
      <h3>{getPhrase(language, 'exchange')}</h3>
      <div>
        <div>
          <div className="flag flag__eu" />
          <span data-testid="EUR">{`${getPhrase(language, 'EUR')}: ${EUR.toFixed(2)}`}</span>
        </div>
        <div>
          <div className="flag flag__us" />
          <span data-testid="USD">{`${getPhrase(language, 'USD')}: ${USD.toFixed(2)}`}</span>
        </div>
        <div>
          <div className="flag flag__ru" />
          <span>{`${getPhrase(language, 'RUB')}: ${RUB.toFixed(2)}`}</span>
        </div>
      </div>
    </div>
  );
};

Exchange.propTypes = {
  rates: PropTypes.instanceOf(Object).isRequired,
  language: PropTypes.string.isRequired,
};

export default Exchange;
