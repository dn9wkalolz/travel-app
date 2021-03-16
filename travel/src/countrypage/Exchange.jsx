import React from 'react';
import PropTypes from 'prop-types';
import getPhrase from './languageSwitcher';

const Exchange = ({ lang, rates }) => {
  const { EUR, USD, RUB } = rates;
  const defaultValueToEUR = 1;
  return (
    <div className="country__widgets__exchange">
      <h3>{getPhrase(lang, 'exchange')}</h3>
      <div>
        <div>
          <div className="flag flag__eu" />
          <span data-testid="EUR">{`${getPhrase(lang, 'EUR')}: ${EUR?.toFixed(2) || defaultValueToEUR.toFixed(2)}`}</span>
        </div>
        <div>
          <div className="flag flag__us" />
          <span data-testid="USD">{`${getPhrase(lang, 'USD')}: ${USD.toFixed(2)}`}</span>
        </div>
        <div>
          <div className="flag flag__ru" />
          <span>{`${getPhrase(lang, 'RUB')}: ${RUB.toFixed(2)}`}</span>
        </div>
      </div>
    </div>
  );
};

Exchange.propTypes = {
  rates: PropTypes.instanceOf(Object).isRequired,
  lang: PropTypes.string.isRequired,
};

export default Exchange;
