import React from 'react';
import PropTypes from 'prop-types';

const CountryDescription = ({ countryInf }) => {
  const { country } = countryInf;
  const { description, image: { alt, mainImage } } = country;
  return (
    <div className="country__description">
      <div>
        <img className="country__description_image" src={mainImage} alt={alt} />
        <h1 className="country__description_town_name" data-testid="alt">{alt}</h1>
      </div>
      <div>
        <p className="country__description_text">
          {description}
        </p>
      </div>
    </div>
  );
};

CountryDescription.propTypes = {
  countryInf: PropTypes.instanceOf(Object).isRequired,
};

export default CountryDescription;
