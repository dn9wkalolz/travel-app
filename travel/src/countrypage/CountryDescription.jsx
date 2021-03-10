import React from 'react';
import PropTypes from 'prop-types';

const CountryDescription = ({ countryInf }) => {
  const { country } = countryInf;
  const { description, image: { alt, mainImage } } = country[0];
  return (
    <div className="country__description">
      <div>
        <img src={mainImage} width="250" height="170" alt={alt} />
        <p>{alt}</p>
      </div>
      <div>
        {description}
      </div>
    </div>
  );
};

CountryDescription.propTypes = {
  countryInf: PropTypes.instanceOf(Object).isRequired,
};

export default CountryDescription;
