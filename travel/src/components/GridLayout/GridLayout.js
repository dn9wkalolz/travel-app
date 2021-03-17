import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import GridItem from './GridItem';
import Preloader from '../../countrypage/Preloader/Preloader';

export default function GridLayout({ countries, filter }) {
  if (countries.length === 0) {
    return <Preloader />;
  }

  return (
    <Grid container spacing={3}>
      {countries.map((country) => {
        const check = country.name.toLowerCase().includes(filter)
          || country.capital.toLowerCase().includes(filter);

        if (check) {
          return (
            <Grid key={country.id} item lg={4} md={12} sm={12} xs={12}>
              <GridItem
                subheader={country.capital}
                id={country.id}
                title={country.name}
                alt={country.image.alt}
                image={country.image.mainImage}
                description={country.description}
                timezone={country.timezone}
              />
            </Grid>
          );
        }

        return false;
      })}
    </Grid>
  );
}

GridLayout.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};
