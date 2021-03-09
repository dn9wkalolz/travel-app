/* eslint-disable react/prop-types */
import React from 'react';

const CountryDescription = ({ countryInf }) => {
  const { country } = countryInf;
  const { description, image: { alt, mainImage } } = country[0];
  return (
    <div className="country__description">
      <div>
        <img src={mainImage} width="250" height="170" alt="country" />
        <p>{alt}</p>
      </div>
      <div>
        {description}
      </div>
    </div>
  );
};

export default CountryDescription;
