import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const CountryRating = ({ data }) => {
  const { rating } = data;
  const [value, setValue] = React.useState(rating);

  return (
    <div>
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

CountryRating.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default CountryRating;
