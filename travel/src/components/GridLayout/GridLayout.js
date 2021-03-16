/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import GridItem from './GridItem';

const useStyles = makeStyles((theme) => ({
  GridContainer: {
    marginTop: theme.spacing(14),
  },
}));

export default function GridLayout({ countries, filter }) {
  const classes = useStyles();

  if (!countries) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={3} className={classes.GridContainer}>
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
